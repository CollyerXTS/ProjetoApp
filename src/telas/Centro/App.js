import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, } from 'react-native';
import styles from './Style';
//Navegação
import { Tela4 } from '../Home/App';
import { useNavigation } from '@react-navigation/native';
//Pasta Componentes
import coresHumor from '../../componentes/CoresHumor/colors';
import DATA from '../../componentes/Card/App';
//Icones
import Entypo from 'react-native-vector-icons/Entypo';


export default function Centro() {
  const renderItem = ({ item }) => (
    <Item
      image={item.image} data={item.data} humor={item.humor} horario={item.horario} festa={item.festa} festaTexto={item.festaTexto} esporte={item.esporte} esporteTexto={item.esporteTexto} cozinhar={item.cozinhar} cozinharTexto={item.cozinharTexto} texto={item.texto}
    />
  );
  return (
    <SafeAreaView style={styles.containerPrincipal}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={Tela4}
      />
    </SafeAreaView>
  );
}

const Item = ({ image, data, humor, horario, festa, festaTexto, esporte, esporteTexto, cozinhar, cozinharTexto, texto }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.content}
      onPress={() => navigation.navigate('Card', {
        image: image, data: data, humor: humor, horario: horario, festa: festa, festaTexto: festaTexto, esporte: esporte, esporteTexto: esporteTexto, cozinhar: cozinhar, cozinharTexto: cozinharTexto, texto: texto,
      })}>
      <View style={styles.containerSecundario}>
        <Image style={styles.imagemHumor}
          source={image} />
        <View style={styles.subContainerUm}>
          <Text style={styles.data}>
            {data}
          </Text>
          <View style={styles.subContainerDois}>
            <Text style={[styles.humor, { color: coresHumor[humor] }]}>
              {humor}
            </Text>
            <Text style={styles.horario}>
              {horario}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.containerTerciario}>
        <Image style={styles.festa}
          source={festa} />
        <Text style={styles.festaTexto}>
          {festaTexto}
        </Text>
        <Entypo
          name='dot-single'
          color='#000000' />
        <Image style={styles.esporte}
          source={esporte} />
        <Text style={styles.esporteTexto}>
          {esporteTexto}
        </Text>
        <Entypo
          name='dot-single'
          color='#000000' />
        <Image style={styles.cozinhar}
          source={cozinhar} />
        <Text style={styles.cozinharTexto}>
          {cozinharTexto}
        </Text>
        <Entypo
          name='dot-single'
          color='#000000' />
      </View>
      <View>
        <Text style={styles.texto} numberOfLines={1}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity >
  )
};
