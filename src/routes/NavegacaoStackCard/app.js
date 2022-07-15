import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Navegação
import CardPage from '../../telas/CardPage/App';
import Centro from '../../telas/Centro/App';

const Stack = createNativeStackNavigator();

export default function voltar() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Centro"
                component={Centro}
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