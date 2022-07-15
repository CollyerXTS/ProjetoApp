import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//navegação
import { useNavigation } from '@react-navigation/native';


export default function ButtonVoltar() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.jumpTo('BottonCenter')}
            style={styles.container}>
            <MaterialCommunityIcons
                name="chevron-left"
                size={22}
                color='#304FFE'



            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: '#ebeeff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 33,
        marginTop: 11
    }
})