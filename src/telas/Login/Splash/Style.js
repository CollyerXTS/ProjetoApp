import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#304FFE',
        justifyContent: 'center',
    },
    splashLogo: {
        width: 300,
        height: 300,
        position: 'absolute'
    },
    textoSplashLogo: {
        marginTop: 430,
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 40,
        color: '#304FFE',
        marginLeft: 10,
        width: 321,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#F4F6F9',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 7,
        textAlign: 'center'
    }
});

export default styles