import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Navegação
import CardPage from '../../telas/CardPage/App';
import BottonCenter from '../../telas/BottonCenter/App';

const Stack = createNativeStackNavigator();

export default function voltar() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottonCenter"
                component={BottonCenter}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CardPage"
                component={CardPage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}