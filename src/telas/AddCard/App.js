import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './Style';

export default function AddCard() {
    return (
        < View style={styles.container}>
            <Fontisto style={styles.Icon}
                name="neutral"
                size={48}
                color="#ACACAC"
            />
            <Text style={styles.texto}>
                Você ainda não tem nenhum
                {'\n'}
                registro diário. Para começar,
                {'\n'}
                toque no ícone de adicionar na tela.
            </Text>
        </View >
    );
};