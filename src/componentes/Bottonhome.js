import React from "react";
import { View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Buttonhome({ focused }) {
    return (
        <View style={[styles.container, { backgroundColor: focused ? '#304FFE' : '#ebeeff' }]}>
            <Ionicons
                name="ios-home"
                size={24}
                color={focused ? '#FFFFFF' : '#304FFE'}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    }
})