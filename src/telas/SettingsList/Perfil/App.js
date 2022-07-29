import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Perfil() {
    const [modalActive, setModalActive] = useState(false)
    const navigation = useNavigation();
    const [id, setId] = useState(null)
    const clickActiveEmoji = (key) => {
        if (key == id) {
            setId(null)
        }
        else {
            setId(key)
        }
    }
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
                visible={modalActive}>
                <View style={styles.modalView}>

                    <View style={styles.modalBotao1}>
                        <TouchableOpacity
                            style={styles.subContainerDois}
                            onPress={() => setModalActive(false)}>
                            <Text style={styles.modalBotao1}>X
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.modalTexto}>
                            Selecione a foto de perfil
                        </Text>
                        <View style={styles.subContainerModal}>
                            <View style={styles.subContainerModalInferior}>
                                <TouchableOpacity
                                    onPress={() => clickActiveEmoji(0)}>
                                    <View
                                        style={[styles.containerImageCircle, { backgroundColor: id == 0 ? '#304ffe' : 'white' }]}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../../../assets/humores/happy.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => clickActiveEmoji(1)}>
                                    <View style={[styles.containerImageCircle, { backgroundColor: id == 1 ? '#304ffe' : 'white' }]}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../../../assets/humores/happy.png')}
                                        />
                                    </View >
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => clickActiveEmoji(2)}>
                                    <View style={[styles.containerImageCircle, { backgroundColor: id == 2 ? '#304ffe' : 'white' }]}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../../../assets/humores/happy.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.subContainerModalInferior}>
                                <TouchableOpacity
                                    onPress={() => clickActiveEmoji(3)}>
                                    <View style={[styles.containerImageCircle, { backgroundColor: id == 3 ? '#304ffe' : 'white' }]}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../../../assets/humores/happy.png')} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => clickActiveEmoji(4)}>
                                    <View style={[styles.containerImageCircle, { backgroundColor: id == 4 ? '#304ffe' : 'white' }]}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../../../assets/humores/happy.png')} />
                                    </View >
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => clickActiveEmoji(5)}>
                                    <View style={[styles.containerImageCircle, { backgroundColor: id == 5 ? '#304ffe' : 'white' }]}>
                                        <Image
                                            style={styles.modalImage}
                                            source={require('../../../../assets/humores/happy.png')}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.subContainerTres}
                            onPress={() => setModalActive(false)}>
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
                    placeholder='FULANA'
                    placeholderTextColor="#000000" />
                <Text style={styles.ContaineTexto}>
                    E-MAIL
                </Text>
                <TextInput style={styles.ContaineInputTexto}
                    placeholder='FULANINHA2@GMAIL.COM'
                    placeholderTextColor="#000000" />
                <View>
                    <Text style={styles.ContaineTexto}>
                        GÊNERO
                    </Text>
                    <TextInput style={styles.ContaineInputTexto}
                        placeholder='FEMININO'
                        placeholderTextColor="#000000" />
                    <TouchableOpacity style={{ position: 'absolute' }}>
                        <MaterialIcons
                            style={styles.ContaineInputIcon}
                            name='keyboard-arrow-down'
                            color="#000000" size={50} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.ContaineTexto}>
                    DATA DE NASCIMENTO
                </Text>
                <TextInput style={styles.ContaineInputTexto}
                    placeholder='15/12/1998'
                    placeholderTextColor="#000000" />
            </View>
            <View style={styles.containerQuatro}>
                <TouchableOpacity
                    style={styles.containerBotaoConfirmar}
                    onPress={() => navigation.navigate('BottonSettings')}>
                    <Text style={styles.textoBotaoConfirmar}>
                        SALVAR
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};