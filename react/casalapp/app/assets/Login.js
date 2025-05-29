import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import globalStyles from '../../styles/GlobalStyles';
import Feather from 'react-native-vector-icons/Feather';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setError(''); // limpa erros anteriores

    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert('Login realizado com sucesso!', `Bem-vindo de volta, ${user.email}`);
        // aqui você pode navegar para outra tela, ex: navigation.navigate('Home')
      })
      .catch((error) => {
        let message = 'Erro ao fazer login.';
        if (error.code === 'auth/user-not-found') {
          message = 'Usuário não encontrado.';
        } else if (error.code === 'auth/wrong-password') {
          message = 'Senha incorreta.';
        } else if (error.code === 'auth/invalid-email') {
          message = 'Email inválido.';
        }
        Alert.alert('Erro',message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={globalStyles.heading}>Seja bem vindo ao Ca$alApp!</Text>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={[globalStyles.textInput, { width: '100%' }]}
          />

          <View style={[globalStyles.textInput, globalStyles.passwordInput]}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={{ flex: 1, fontSize: 16 }}
            />
          </View>
          {error ? <Text style={{ color: 'red', fontSize: 12, marginTop: 8 }}>{error}</Text> : null}


          <TouchableOpacity>
            <Text style={{ color: '#006ffd', fontWeight: '600', fontSize: 14 }}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.primaryButton} onPress={handleLogin}>
            <Text style={globalStyles.primaryButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.bottomRow}>
            <Text style={{ fontSize: 12, color: '#71727a' }}>Não tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ fontSize: 12, color: '#006ffd', fontWeight: '600' }}> Registre-se agora.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  inputGroup: {
    gap: 16,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Login;