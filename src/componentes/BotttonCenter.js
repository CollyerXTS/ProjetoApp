import React from "react";
import { View, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';

export default function Button() {
    return (
        <View style={styles.container}>
            <Entypo
                name="plus"
                size={35}
                color='#FFFFFF'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 52,
        height: 52,
        borderRadius: 30,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center',

    }
})