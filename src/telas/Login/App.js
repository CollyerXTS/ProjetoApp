import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, BackHandler, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login() {
  const [senha, setSenha] = useState('');
  const [passHide, setPassHide] = useState(true);
  const [email, setEmail] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);

  const validar = () => {
    const regex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test((email).toLowerCase()) && regex1.test(senha)) {
      navigation.navigate('Home')
    }
    else {
      setErrorLogin(true)
    }
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])

  const navigation = useNavigation();

  return (

    <KeyboardAvoidingView style={styles.containerPrincipal}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
    >
      <Image style={styles.logo}
        source={require('../../../assets/Login.png')}
      />
      <View>
        <TextInput style={styles.inputEmail}
          placeholder='E-mail'
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />
        <View style={styles.containerInputSenha}>
          <TextInput
            placeholder='senha'
            style={styles.inputSenha}
            value={senha}
            onChangeText={value => setSenha(value)}
            secureTextEntry={passHide}
          />
          <TouchableOpacity style={styles.iconEye} onPress={() => setPassHide(!passHide)}>
            <Ionicons
              name={passHide ? 'eye' : 'eye-off'}
              color="#304FFE" size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
      {errorLogin &&
        <View style={styles.containerPoup}>
          <View style={styles.iconPoup}>
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B"
            />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B"
            />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B"
            />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B"
            />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B"
            />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B"
            />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B"
            />
          </View>
          <Text style={styles.textoPoup}>
            Campo não pode ficar em branco.
            {'\n'}
            Deve ser um email valido.
            {'\n'}
            A senha deve conter:
            {'\n'}
            Pelo menos 8 caracteres.
            {'\n'}
            Pelo menos 1 número.
            {'\n'}
            letras maiúsculas e minusculas.
            {'\n'}
            Pelo menos 1 caractere especial.
          </Text>
        </View>
      }
      <TouchableOpacity
        style={styles.containerBotao}
        onPress={validar}
      >
        <Text style={styles.botaoTexto}>ENTRAR</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView >
  )
};