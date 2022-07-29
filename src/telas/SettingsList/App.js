import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';


export default function BottonSettings() {

  const [modalActive, setModalActive] = useState(false)
  const navigation = useNavigation();

  return (
    < View style={styles.containerPrincipal}>
      <View>
        <View style={styles.subContainerUm}>
          <Image style={styles.imagemPeril}
            source={require('../../../assets/humores/happy.png')}

          />
        </View>


        <View style={styles.subContainerDois}
        >
          <Text style={styles.textoNome} >
            Olá, Fulana
          </Text>
        </View>
        <View style={styles.subContainerTres}>

          <View style={styles.subContainerTresView}>
            <Text style={styles.textoCampos1} >
              E-MAIL:
            </Text>
            <Text style={styles.textoCampos1} >
              FULANA@GMAIL.COM
            </Text>
          </View>

          <View style={styles.subContainerTresView}>
            <Text style={styles.textoCampos2} >
              GÊNERO:
            </Text>
            <Text style={styles.textoCampos2} >
              FEMININO
            </Text>
          </View>

          <View style={styles.subContainerTresView}>
            <Text style={styles.textoCampos3} >
              DATA DE NASCIMENTO:
            </Text>
            <Text style={styles.textoCampos3} >
              15/12/1998
            </Text>
          </View>

        </View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalActive}
        >
          <View style={styles.modalView}>
            <View style={styles.modalViewIntern}>
              <Text style={styles.modalTexto1}>
                Atenção
              </Text>
              <Text style={styles.modalTexto2}>
                Deseja mesmo sair?
              </Text>
              <View style={styles.modalBotao}>
                <TouchableOpacity
                  onPress={() => setModalActive(false)}
                >
                  <Text style={styles.modalBotao1}>CANCELAR
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text style={styles.modalBotao2}>SIM
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.subContainerQuatro}>
          <TouchableOpacity
            style={styles.containerEditar}
            onPress={() => navigation.navigate('Perfil')}
          >
            <Text style={styles.botaoTexto1}>EDITAR PERFIL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerSair}
            onPress={() => setModalActive(true)}
          >
            <Text style={styles.botaoTexto2}>SAIR
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View >

  );
};