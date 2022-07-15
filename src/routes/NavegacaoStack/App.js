import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Navegação
import Login from '../../telas/Login/App';
import Rotas from '../NavegacaoTab/App';
import Splash from '../../telas/Login/Splash/Splash';

const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Home"
                component={Rotas}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Tela4"
                component={Rotas}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    );
}