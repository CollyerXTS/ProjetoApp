import React from "react";
import { View, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Buttonlist({ focused }) {
    return (
        <View style={[styles.container, { backgroundColor: focused ? '#304FFE' : '#ebeeff' }]}>
            <FontAwesome5
                name="list-ul"
                size={22}
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