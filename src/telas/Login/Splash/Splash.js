import React from 'react';
import { View, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';

export default function Splash() {
    const navigation = useNavigation();
    return (
        < View style={styles.containerPrincipal}>
            <Lottie style={styles.splashLogo}
                source={require('../../../../assets/65683-notes-animation.json')} autoPlay
                loop={false}
                speed={0.8}
                onAnimationFinish={() => navigation.navigate('Login')}
            />
            <Text style={styles.textoSplashLogo}>
                Diário Pessoal
            </Text>
        </View >
    );
}