import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
    },
    subContainerUm: {
        alignItems: 'center',

    },
    imagemPeril: {
        width: 128,
        height: 129,
        marginTop: 84

    },
    containerSecundario: {
        alignItems: 'center',

    },
    containerBotaoFoto: {
        width: 182,
        height: 44,
        borderRadius: 6,
        marginTop: 41,
        alignItems: 'center',
        backgroundColor: 'rgba(48, 79, 254, 0.15)',
        fontSize: 15,
        borderColor: 'rgba(48, 79, 254, 0.25)',
        borderWidth: 2,
    },
    textoBotaoFoto: {
        paddingTop: 10,
        fontFamily: 'SourceSansPro-Bold',
        color: 'rgba(48, 79, 254, 3)',
        fontSize: 15,

    },
    modalView: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#F5F5F5',

    },
    subContainerDois: {
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: '#ebeeff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 31,
        marginTop: 32
    },
    modalBotao1: {
        fontSize: 20,
        color: '#697FFF'
    },
    modalTexto: {
        fontSize: 24,
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'SourceSansPro-Bold',
        marginTop: 63
    },
    subContainerTres: {
        width: 322,
        height: 52,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: '#304FFE',
        fontSize: 15,
        marginLeft: 35
    },
    modalBotao2: {
        fontSize: 15,
        color: '#FFFFFF'
    },
    Containerterciario: {
        marginLeft: 36.5,
        marginTop: 25
    },
    ContaineTexto: {
        fontSize: 15,
        color: '#000000',
        fontFamily: 'SourceSansPro-Bold',
        marginTop: 5

    },
    ContaineInputTexto: {
        width: 322,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        fontSize: 15,
        borderColor: '#000000',
        borderWidth: 1,
        paddingTop: 10,
        paddingLeft: 17,
        fontFamily: 'SourceSansPro-SemiBold',
        marginTop: 7
    }
    ,
    containerQuatro: {
        alignItems: 'center',
        marginBottom: 70,
        justifyContent: 'center',
    },
    containerBotaoConfirmar: {
        width: 322,
        height: 52,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: '#304FFE',
        fontSize: 15,


    },
    textoBotaoConfirmar: {
        fontFamily: 'SourceSansPro-Bold',
        color: '#FFFFFF',
        fontSize: 15,


    }

});

export default styles