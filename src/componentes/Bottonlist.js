import React from "react";
import { View, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Buttonlist() {
    return (
        <View style={styles.container}>
            <FontAwesome5
                name="list-ul"
                size={22}
                color='#304FFE'


            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#ebeeff',
        alignItems: 'center',
        justifyContent: 'center',

    }
})