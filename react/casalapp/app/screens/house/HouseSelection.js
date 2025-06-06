import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import globalStyles from '../../styles/GlobalStyles';
import { auth, db } from '../../services/firebase';
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { Alert } from 'react-native';



const HouseSelection = () => {
  const [houseName, setHouseName] = useState('');
  const [houseCode, setHouseCode] = useState('');

  const navigation = useNavigation();

      // Obtém o usuário autenticad
    const user = auth.currentUser;


  const handleCreateHouse = async () => {
 

    /**
     * O id da casa é gerado a partir do email do usuário,
     * substituindo os caracteres '@' e '.' por '-'.
     * Isso garante que o id seja único e não contenha caracteres inválidos.
     * O id da casa será usado para criar o documento no Firestore.
     */
    const houseId = user.email.replace(/[@.]/g, '-');
  
    if (!houseName.trim()) {
      Alert.alert('Erro', 'Informe um nome para a casa.');
      return;
    }
  
    try {
    /**
     * Aqui estamos criando um documento no Firestore
     * doc(db, 'houses', houseId) cria uma referência ao documento da casa
     * houseId é o id da casa que geramos anteriormente que é o email do usuário recem cadastrado
     * setDoc() salva os dados no Firestore
     * O objeto passado contém os dados que queremos salvar
     * name é o nome da casa, createdBy é o id do usuário que criou a casa,
     * createdByEmail é o email do usuário que criou a casa, members é um array com o id do usuário que criou a casa,
     * createdAt é a data de criação da casa, que estamos definindo como a data atual.
     */
      const houseRef = doc(db, 'houses', houseId);
      await setDoc(houseRef, {
        name: houseName,
        createdBy: user.uid,
        createdByEmail: user.email,
        members: [user.uid],
        createdAt: new Date(),
      });
  
      /**
       * Aqui estamos atualizando o documento do usuário no Firestore
       * doc(db, 'users', user.uid) cria uma referência ao documento do usuário
       * updateDoc() atualiza os dados no Firestore
       * O objeto passado contém os dados que queremos atualizar
       * houseId é o id da casa que o usuário criou, que será usado para associar o usuário à casa.
       * Isso é importante para que o usuário possa acessar a casa que ele criou posteriormente.
       */
      await updateDoc(doc(db, 'users', user.uid), {
        houseId: houseId,
      });

    
      Alert.alert('Casa criada com sucesso!');

      /**
       * Redireciona o usuário para a tela inicial
       * navigation.reset() redefine a pilha de navegação
       * index: 0 define que a primeira tela da pilha será a de Home
       * routes: [{ name: 'Home' }] define que a primeira tela será a de Home
       */
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
      return; 
    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao criar casa', error.message);
    }
  };
  

  const handleJoinHouse = async () => {


    
     /**
     * O id da casa é gerado a partir do email do usuário,
     * substituindo os caracteres '@' e '.' por '-'.
     * Isso garante que o id seja único e não contenha caracteres inválidos.
     * O id da casa será usado para criar o documento no Firestore.
     */
    const houseId = houseCode.trim().replace(/[@.]/g, '-');
  
    if (!houseId) {
      Alert.alert('Erro', 'Informe o email do administrador da casa.');
      return;
    }
  
    try {
       /**
     * Aqui estamos criando um documento no Firestore
     * doc(db, 'houses', houseId) cria uma referência ao documento da casa
     * houseId é o id da casa que geramos anteriormente que é o email do usuário recem cadastrado
     * setDoc() salva os dados no Firestore
     * O objeto passado contém os dados que queremos salvar
     * name é o nome da casa, createdBy é o id do usuário que criou a casa,
     * createdByEmail é o email do usuário que criou a casa, members é um array com o id do usuário que criou a casa,
     * createdAt é a data de criação da casa, que estamos definindo como a data atual.
     */
      const houseRef = doc(db, 'houses', houseId);

      /**
       * Busca o snapsot do documento da casa
       * getDoc(houseRef) busca o documento da casa no Firestore
       * houseRef é a referência ao documento da casa que criamos anteriormente
       * O snapshot contém os dados do documento, se ele existir.
       * Se o documento não existir, o snapshot não terá dados e retornará false para exists().
       */
      const houseSnap = await getDoc(houseRef);
  
      if (!houseSnap.exists()) {
        Alert.alert('Erro', 'Casa não encontrada.');
        return;
      }
  
      /**
       * Atualiza o 'snapshot' do documento da casa
       * updateDoc(houseRef, { members: arrayUnion(user.uid) }) atualiza o documento da casa
       * houseRef é a referência ao documento da casa que criamos anteriormente
       * members é um array que contém os ids dos usuários que são membros da casa
       */
      await updateDoc(houseRef, {
        members: arrayUnion(user.uid),
      });
  
      /**
       * Aqui estamos atualizando o documento do usuário no Firestore
       * doc(db, 'users', user.uid) cria uma referência ao documento do usuário
       * updateDoc() atualiza os dados no Firestore
       * O objeto passado contém os dados que queremos atualizar
       * houseId é o id da casa que o usuário criou, que será usado para associar o usuário à casa.
       * Isso é importante para que o usuário possa acessar a casa que ele criou posteriormente.
       */
      await updateDoc(doc(db, 'users', user.uid), {
        houseId: houseId,
      });

  
      Alert.alert('Você ingressou na casa com sucesso!');
      
    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao entrar na casa', error.message);
    }
  };
  
  
  

  
    return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <Text style={globalStyles.heading}>Nova Casa</Text>

      <TextInput
        placeholder="Nome da casa"
        value={houseName}
        onChangeText={setHouseName}
        style={[globalStyles.textInput, { width: '100%', marginBottom: 16 }]}
      />

      <TouchableOpacity style={globalStyles.primaryButton} onPress={handleCreateHouse}>
        <Text style={globalStyles.primaryButtonText}>Criar casa</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={[globalStyles.subheading, { marginBottom: 8 }]}>
        Já tem o código de uma casa?
      </Text>

      <TextInput
        placeholder="Código da casa"
        value={houseCode}
        onChangeText={setHouseCode}
        style={[globalStyles.textInput, { width: '100%', marginBottom: 16 }]}
      />

      <TouchableOpacity style={globalStyles.secondaryButton} onPress={handleJoinHouse}>
        <Text style={globalStyles.secondaryButtonText}>Ingressar em uma casa existente</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);


};

export default HouseSelection;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 24,
      justifyContent: 'center',
    },
    divider: {
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 32,
    },

  });
  