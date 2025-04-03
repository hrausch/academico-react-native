import React from 'react';
import { Text, View } from 'react-native';

export function PrimeiroComponente() {
    return (
      <View>
        <Text>Olá</Text>
        <Text>Mundo!</Text>
      </View>
    )
  }

export const Saudacao = (props) => {
    return (
      <Text>Olá, {props.nome}!</Text>
    );
  };

export function SaudacaoCompleta(props) {
    return (
      <Text>
        Olá, {props.nome}! Você tem {props.idade} anos.
      </Text>
    );
  }