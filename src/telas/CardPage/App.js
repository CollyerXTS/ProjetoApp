import React from 'react';
import { View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Style';
//pasta Rotas
import ButtonVoltar from '../../componentes/BottonVoltar';
import { useRoute } from '@react-navigation/native';
//componente na pasta componente
import coresHumor from '../../componentes/CoresHumor/colors';

export default function CardPage() {
    const route = useRoute();
    const { image, data, humor, horario, festa, festaTexto, esporte, esporteTexto, cozinhar, cozinharTexto, texto } = route.params;
    return (
        < View style={styles.containerPrincipal}>
            <View style={styles.ButtonVoltar}>
                <ButtonVoltar />
            </View >
            <View style={styles.horario}>
                <MaterialCommunityIcons
                    name='clock-time-three-outline'
                    size={12} />
                <Text>
                    {horario}
                </Text>
            </View>
            <View style={styles.data}>
                <MaterialCommunityIcons
                    name='calendar-month-outline'
                    size={12} />
                <Text>
                    {data}
                </Text>
            </View>
            <View style={styles.containerImageHumor}>
                <Image style={styles.imageHumor}
                    source={image}>
                </Image>
                <Text style={[styles.humorTexto, { color: coresHumor[humor] }]}>
                    {humor}
                </Text>
            </View>
            <View style={styles.containerSecundario}>
                <View style={styles.subContainerUm}>

                    <View style={styles.elipseUm}>
                        <Image style={styles.festa}
                            source={festa} />
                    </View>
                    <View style={styles.elipseDois}>
                        <Image style={styles.esporte}
                            source={esporte} />
                    </View>
                    <View style={styles.elipseTres}>
                        <Image style={styles.cozinhar}
                            source={cozinhar} />
                    </View>
                </View>
                <View style={styles.subContainerDois}>
                    <Text style={styles.festaTexto}>
                        {festaTexto}
                    </Text>
                    <Text style={styles.esporteTexto}>
                        {esporteTexto}
                    </Text>
                    <Text style={styles.cozinharTexto}>
                        {cozinharTexto}
                    </Text>
                </View>
            </View>
            <View style={styles.container3}>
                <Text style={styles.texto} >
                    {texto}
                </Text>
            </View>
        </View >
    );
};