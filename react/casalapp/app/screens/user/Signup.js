import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../../styles/GlobalStyles';


import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

const SignUp = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSubmit = () => {

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        Alert.alert('Sucesso', `Usuário criado: ${user.email}`);
        // redirecionar para tela de criar ou entrar em uma Casa
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