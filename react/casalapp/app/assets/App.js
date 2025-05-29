import { View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SignUp from './screens/user/Signup';
import Login from './screens/user/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Crie sua conta' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    gap: 20,
  },
});
