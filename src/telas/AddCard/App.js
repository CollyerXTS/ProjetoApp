import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Style';
import { api } from '../../services/api';



export default function AddCard() {
    const [click, setClick] = useState(false)
    const [arrayAction, setArrayAction] = useState([])
    const [id, setId] = useState(null)
    const [description, setDiscription] = useState('')
    const clickActiveEmoji = (key) => {
        if (key == id) {
            setId(null)
        }
        else {
            setId(key)
        }
    }


    const clickActiveAction = (key) => {
        setClick(true)
        if (arrayAction.indexOf(key) !== -1) {
            setArrayAction(arrayAction.filter(item => item !== key))
        }
        else if (arrayAction.length < 3) {
            setArrayAction([...arrayAction, key])
        }
    }


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
                        <TouchableOpacity
                            onPress={() => clickActiveEmoji(0)}>
                            <View style={[styles.containerEllipse, { backgroundColor: id == 0 ? '#304ffe' : 'white' }]}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}

                                />
                            </View>
                            <Text
                                style={[styles.textoEmoji, { color: id == 0 ? '#304ffe' : null }]}

                            >
                                RADIANTE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => clickActiveEmoji(1)}>

                            <View style={[styles.containerEllipse, { backgroundColor: id == 1 ? '#304ffe' : 'white' }]}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={[styles.textoEmoji, { color: id == 1 ? '#304ffe' : null }]}
                            >
                                FELIZ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => clickActiveEmoji(2)}>

                            <View style={[styles.containerEllipse, { backgroundColor: id == 2 ? '#304ffe' : 'white' }]}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={[styles.textoEmoji, { color: id == 2 ? '#304ffe' : null }]}
                            >
                                OK
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => clickActiveEmoji(3)}>

                            <View style={[styles.containerEllipse, { backgroundColor: id == 3 ? '#304ffe' : 'white' }]}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={[styles.textoEmoji, { color: id == 3 ? '#304ffe' : null }]}
                            >
                                TRISTE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => clickActiveEmoji(4)}>
                            <View style={[styles.containerEllipse, { backgroundColor: id == 4 ? '#304ffe' : 'white' }]}>
                                <Image
                                    style={styles.emojiHappy}
                                    source={require('../../../assets/humores/radiant.png')}
                                />

                            </View>
                            <Text
                                style={[styles.textoEmoji, { color: id == 4 ? '#304ffe' : null }]}
                            >
                                ACABADO
                            </Text>
                        </TouchableOpacity>
                    </View >
                    <View style={styles.subContainerCinco}>
                        <View style={styles.containerInferiorUm}>
                            <TouchableOpacity onPress={() => clickActiveAction(0)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(0) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="sleep"
                                        size={35}
                                        color={click && arrayAction.indexOf(0) !== -1 ? '#fff' : '#000'}
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    descanso
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickActiveAction(1)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(1) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="calendar-heart"
                                        size={35}
                                        color={click && arrayAction.indexOf(1) !== -1 ? '#fff' : '#000'}
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    encontro
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickActiveAction(2)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(2) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="movie-open-star"
                                        size={35}
                                        color={click && arrayAction.indexOf(2) !== -1 ? '#fff' : '#000'}
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
                            <TouchableOpacity onPress={() => clickActiveAction(3)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(3) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="shopping"
                                        size={35}
                                        color={click && arrayAction.indexOf(3) !== -1 ? '#fff' : '#000'}
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    compras
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickActiveAction(4)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(4) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="food"
                                        size={35}
                                        color={click && arrayAction.indexOf(4) !== -1 ? '#fff' : '#000'}
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    boa refeição
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickActiveAction(5)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(5) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="party-popper"
                                        size={35}
                                        color={click && arrayAction.indexOf(5) !== -1 ? '#fff' : '#000'}
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
                            <TouchableOpacity onPress={() => clickActiveAction(6)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(6) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="football"
                                        size={35}
                                        color={click && arrayAction.indexOf(6) !== -1 ? '#fff' : '#000'}
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    esporte
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickActiveAction(7)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(7) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="food-turkey"
                                        size={35}
                                        color={click && arrayAction.indexOf(7) !== -1 ? '#fff' : '#000'}
                                    />

                                </View>
                                <Text
                                    style={styles.textoIcon}
                                >
                                    cozinhar
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => clickActiveAction(8)}>
                                <View style={[styles.containerIconCircle, { backgroundColor: click && arrayAction.indexOf(8) !== -1 ? '#304ffe' : 'white' }]}>
                                    <MaterialCommunityIcons
                                        style={styles.ContainerIcons}
                                        name="nintendo-game-boy"
                                        size={35}
                                        color={click && arrayAction.indexOf(8) !== -1 ? '#fff' : '#000'}
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
                            onChangeText={(textoDigitado) => setDiscription(textoDigitado)}
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
    )
}
