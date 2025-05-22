import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SignUp from './screens/user/Signup';

export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <SignUp />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
