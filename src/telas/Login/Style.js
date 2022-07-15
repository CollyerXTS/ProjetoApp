import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#304FFE',
        justifyContent: 'center',
    },
    logo: {
        width: 228,
        height: 228,
        marginTop: 10,
    },
    inputEmail: {
        width: 321,
        height: 46,
        marginTop: 70,
        paddingTop: 10,
        paddingLeft: 20,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 18,
    },
    containerInputSenha: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        width: 321,
        height: 46,
        marginTop: 25,
        paddingLeft: 16,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
    },
    inputSenha: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 18,
    },
    iconEye: {
        flexDirection: 'row',
        marginLeft: 270,
        paddingEnd: 10,
        position: 'absolute'
    },
    containerPoup: {
        alignSelf: 'center',
        width: 321,
        height: 182,
        marginTop: 40,
        borderRadius: 20,
        backgroundColor: '#F4F6F9',
        //caso mandem excluir o shadow excluir aqui
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 7,
        flexDirection: 'column',
    },
    iconPoup: {
        justifyContent: 'space-between',
        position: 'absolute',
        color: '#E24B4B',
        marginTop: 16,
        marginLeft: 16
    },
    textoPoup: {
        marginLeft: 52,
        marginTop: 15,
        letterSpacing: 1,
        lineHeight: 21.8,
        color: '#000000'
    },
    containerBotao: {
        width: 133,
        height: 46,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#C6CEFF',
        fontSize: 15,
        marginBottom: 60
    },
    botaoTexto: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#304FFE',
        fontFamily: 'SourceSansPro-SemiBold'
    }
});
export default styles