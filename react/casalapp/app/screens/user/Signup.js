import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../../styles/GlobalStyles';


import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 'objeto' que lida com a navegação
  const navigation = useNavigation();


  const handleSubmit = () => {

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        // userCredential é um objeto que contém informações sobre o usuário autenticado
        // e o token de autenticação
        // user é o objeto que representa o usuário autenticado
        const user = userCredential.user;

        try {

          /**
           * Aqui salvamos os dados do usuário no Firestore
           * doc(db, 'users', user.uid) cria uma referência ao documento do usuário
           * setDoc() salva os dados no Firestore
           * O objeto passado contém os dados que queremos salvar
           * fullName, email e createdAt são os campos que estamos salvando
           * createdAt é a data de criação do usuário, que estamos definindo como a data atual
           */
          await setDoc(doc(db, 'users', user.uid), {
            fullName,
            email,
            createdAt: new Date(),
          });

          Alert.alert('Sucesso', `Usuário criado: ${user.email}`);

          
          /**
           * Aqui estamos redefinindo a navegação para a tela de seleção de casa
           * navigation.reset() redefine a pilha de navegação
           * index: 0 define que a primeira tela da pilha será a de seleção de casa
           * routes: [{ name: 'HouseSelection' }] define que a primeira tela será a de seleção de casa
           * Isso é útil para evitar que o usuário volte para a tela de cadastro após criar a conta
           *  */ 
        
          navigation.reset({
            index: 0,
            routes: [{ name: 'HouseSelection'}],
          });

        } catch (firestoreError) {
          console.error("Erro ao salvar no Firestore:", firestoreError);
          Alert.alert('Usuário criado, mas houve erro ao salvar os dados.', firestoreError.message);
        }

      })
      .catch(error => {
        console.error(error);
        Alert.alert('Erro ao cadastrar', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Cadastre-se</Text>
      <Text style={globalStyles.subheading}>Create an account to get started</Text>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Full Name"
          style={[globalStyles.textInput, { width: '100%' }]}
          value={fullName}
          onChangeText={setFullName}
        />


        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          style={[globalStyles.textInput, { width: '100%' }]}
          value={email}
          onChangeText={setEmail}
        />

        <View style={[globalStyles.textInput, globalStyles.passwordInput]}>
          <TextInput
            placeholder="Create a password"
            secureTextEntry
            style={{ flex: 1, fontSize: 16 }}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={[globalStyles.textInput, globalStyles.passwordInput]}>
          <TextInput
            placeholder="Confirm password"
            secureTextEntry
            style={{ flex: 1, fontSize: 16 }}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>


      <TouchableOpacity style={[globalStyles.primaryButton, { marginTop: 24 }]} onPress={handleSubmit}>
        <Text style={globalStyles.primaryButtonText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );

}

export default SignUp;


const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 0,
    justifyContent: 'center',
  },
  inputGroup: {
    gap: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },


});