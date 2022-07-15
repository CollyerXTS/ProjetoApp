import React from 'react';
import { View, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import styles from './Styles';

export default function BottonSettings() {
  return (
    < View style={styles.container}>
      <Lottie source={require('../../../assets/manutencao.json')} autoPlay loop />
      <Text style={styles.texto}>
        Em desenvolvimnento.
      </Text>
    </View >
  );
};