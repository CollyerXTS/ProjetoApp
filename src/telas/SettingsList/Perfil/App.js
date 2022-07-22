import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';


export default function Perfil() {
    const [modalActive, setModalActive] = useState(false)
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView style={styles.containerPrincipal}
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 120}
        >
            <View style={styles.subContainerUm}>
                <Image style={styles.imagemPeril}
                    source={require('../../../../assets/humores/happy.png')}
                />
            </View>
            <View style={styles.containerSecundario}>
                <TouchableOpacity
                    style={styles.containerBotaoFoto}
                    onPress={() => setModalActive(true)}
                >
                    <Text style={styles.textoBotaoFoto}>
                        ALTERAR FOTO
                    </Text>
                </TouchableOpacity>
            </View>


            <Modal
                animationType='fade'
                transparent={true}
                visible={modalActive}
            >
                <View style={styles.modalView}>

                    <View style={styles.modalBotao}>
                        <TouchableOpacity
                            style={styles.subContainerDois}
                            onPress={() => setModalActive(false)}
                        >
                            <Text style={styles.modalBotao1}>X
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.modalTexto}>
                            Selecione a foto de perfil
                        </Text>


                        <TouchableOpacity
                            style={styles.subContainerTres}
                            onPress={() => setModalActive(false)}
                        >
                            <Text
                                style={styles.modalBotao2}>
                                Confirmar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.Containerterciario}>
                <Text style={styles.ContaineTexto}>
                    NOME
                </Text >
                <TextInput style={styles.ContaineInputTexto}

                    placeholder='E-mail'
                    placeholderTextColor="#000000"
                />
                <Text style={styles.ContaineTexto}>
                    E-MAIL
                </Text>
                <TextInput style={styles.ContaineInputTexto}
                    placeholder='E-mail'
                    placeholderTextColor="#000000"
                />
                <Text style={styles.ContaineTexto}>
                    GÊNERO
                </Text>
                <TextInput style={styles.ContaineInputTexto}
                    placeholder='E-mail'
                    placeholderTextColor="#000000"
                />
                <Text style={styles.ContaineTexto}>
                    DATA DE NASCIMENTO
                </Text>
                <TextInput style={styles.ContaineInputTexto}
                    placeholder='E-mail'
                    placeholderTextColor="#000000"
                />
            </View>
            <View style={styles.containerQuatro}>
                <TouchableOpacity
                    style={styles.containerBotaoConfirmar}
                    onPress={() => navigation.navigate('BottonSettings')}
                >
                    <Text style={styles.textoBotaoConfirmar}>
                        SALVAR
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};