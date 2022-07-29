import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Navegação
import Login from '../../telas/Login/App';
import Rotas from '../NavegacaoTab/App';
import Splash from '../../telas/Login/Splash/Splash';
import BottonSettings from '../../telas/SettingsList/App';
import Perfil from '../../telas/SettingsList/Perfil/App';

const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Home"
                component={Rotas}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="CardPage"
                component={Rotas}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}