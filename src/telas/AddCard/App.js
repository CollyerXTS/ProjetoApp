import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Style';



export default function AddCard() {
    return (
        <KeyboardAvoidingView style={styles.containerPrincipal}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
            <ScrollView style={styles.containerPrincipal}>

                <View>
                    <TouchableOpacity
                        style={styles.subContainerDois}
                    >
                        <Text style={styles.modalBotao1}>
                            X
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.textoUm}>
                        Como você está?
                    </Text>

                    <View style={styles.subContainerTres}>
                        <MaterialCommunityIcons
                            name='calendar-month-outline'
                            size={12}
                        />
                        <Text
                            style={styles.textoDois}>
                            HOJE, 23 DE JANEIRO
                        </Text>

                        <MaterialCommunityIcons
                            style={styles.iconDois}
                            name='clock-time-three-outline'
                            size={12}
                        />
                        <Text style={styles.textoTres}>
                            08:35
                        </Text>

                    </View>

                    <View style={styles.subContainerQuatro}>
                        <TouchableOpacity>
                            <View style={[styles.containerEllipse, { backgroundColor: '#304FFE' }]}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={styles.textoEmoji}
                            >
                                RADIANTE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.containerEllipse}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={styles.textoEmoji}
                            >
                                FELIZ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.containerEllipse}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={styles.textoEmoji}
                            >
                                OK
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.containerEllipse}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={styles.textoEmoji}
                            >
                                TRISTE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.containerEllipse}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={styles.textoEmoji}
                            >
                                ACABADO
                            </Text>
                        </TouchableOpacity>
                    </View >
                    <View style={styles.subContainerCinco}>
                        <View style={styles.containerInferiorUm}>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    descanso
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    encontro
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    filmes e séries
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerInferiorUm}>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    compras
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    boa refeição
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    festa
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerInferiorUm}>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    esporte
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    cozinhar
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.containerIconCircle}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color='#000000'
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    jogos
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.subContainerSeis}>
                        <TextInput style={styles.subContainerTexto}
                            placeholder='Escreva aqui oque aconteceu hoje...'
                        >

                        </TextInput>
                    </View>
                    <View
                        style={styles.subContainerSete}
                    >
                        <TouchableOpacity
                            style={styles.containerBotaoConfirmar}
                        >
                            <Text style={styles.textoBotaoConfirmar}>
                                SALVAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </KeyboardAvoidingView>
    );
};