import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    content: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: 350,
        height: 145,
        marginTop: 12,
        paddingLeft: 28,
        paddingTop: 16.5,
        borderRadius: 20,
        marginBottom: 4,
        backgroundColor: '#F4F6F9',
        borderColor: '#F4F6F9',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 7,
        flexDirection: 'column'
    },
    containerSecundario: {
        flexDirection: 'row'
    },
    imagemHumor: {
        width: 57,
        height: 57,
    },
    subContainerUm: {
        paddingLeft: 16
    },
    data: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        color: '#ACACAC'
    },
    subContainerDois: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    humor: {
        fontSize: 24,
        fontFamily: 'SourceSansPro-SemiBold',
    },
    horario: {
        margin: 3,
        left: 7,
        fontSize: 14,
        fontFamily: 'SourceSansPro-Regular',
        color: '#ACACAC',
    },
    containerTerciario: {
        flexDirection: 'row',
        paddingTop: 14.5,
        alignItems: 'center'
    },
    festa: {
        marginLeft: 6,
        width: 20,
        height: 20,
    },
    festaTexto: {
        fontSize: 12,
        color: '#000000',
        marginLeft: 8,
    },
    esporte: {
        width: 20,
        height: 20,
        marginLeft: 8,
    },
    esporteTexto: {
        fontSize: 12,
        color: '#000000',
        marginLeft: 8,
    },
    cozinhar: {
        width: 20,
        height: 20,
        marginLeft: 8,
    },
    cozinharTexto: {
        fontSize: 12,
        color: '#000000',
        marginLeft: 8,
    },
    texto: {
        fontSize: 12,
        color: '#ACACAC',
        marginLeft: 8,
        paddingTop: 8,
        width: 198,
    }
});

export default styles


