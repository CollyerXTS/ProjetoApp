import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, BackHandler, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { api } from '../../services/api';

export default function Login() {
  const [password, setPassword] = useState('');
  const [passHide, setPassHide] = useState(true);
  const [email, setEmail] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);

  const validarEmail = () => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(email.toLowerCase())) {
      return true
      //navigation.navigate('Home')
    }
    else {
      return false

    }
  }
  const validarSenha = () => {
    const regex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    if (regex1.test(password)) {
      return true
    }
    else {
      return false

    }
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])
  function validacaoInput() {
    if (validarEmail() && validarSenha()) {
      validacaoApi()
    }
    else {
      setErrorLogin(true)
      setTimeout(() => {
        setErrorLogin(false)
      }, 10000);
      console.log('errado')
    }
  }

  async function validacaoApi() {
    try {
      await api.post('/oauth/token', {
        'grant_type': 'password',
        'email': email,
        'password': password,
        'client_id': '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
        'client_secret': '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
      })
        .then((resp) => {
          navigation.navigate('Home')
          api.defaults.headers.common['Authorization'] = `Bearer ${resp.data.access_token}`
        })
    }
    catch (error) {
      console.log(error)
      setErrorLogin(true)
      setTimeout(() => {
        setErrorLogin(false)
      }, 10000);
    }
  }

  const navigation = useNavigation();
  return (

    <KeyboardAvoidingView style={styles.containerPrincipal}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>
      <Image style={styles.logo}
        source={require('../../../assets/Login.png')} />
      <View>
        <TextInput style={styles.inputEmail}
          placeholder='E-mail'
          onChangeText={value => setEmail(value)}
          keyboardType="email-address" />
        <View style={styles.containerInputSenha}>
          <TextInput
            placeholder='senha'
            style={styles.inputSenha}
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={passHide} />
          <TouchableOpacity style={styles.iconEye} onPress={() => setPassHide(!passHide)}>
            <Ionicons
              name={passHide ? 'eye' : 'eye-off'}
              color="#304FFE" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {errorLogin &&
        <View style={styles.containerPoup}>
          <View style={styles.iconPoup}>
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B" />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B" />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B" />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B" />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B" />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B" />
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={21}
              color="#E24B4B" />
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
        onPress={validacaoInput}>
        <Text style={styles.botaoTexto}>ENTRAR</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView >
  )
};
