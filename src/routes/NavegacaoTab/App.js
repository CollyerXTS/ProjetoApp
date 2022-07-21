import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Navegção
import Home from '../../telas/Home/App';
import BottonSettings from '../../telas/SettingsList/App';
import CardPage from '../../telas/CardPage/App';
import Centro from '../../telas/Centro/App';
//Pasta Componentes
import BotttonCenter from '../../componentes/BotttonCenter';
import Bottonhome from '../../componentes/Bottonhome';
import Bottonlist from '../../componentes/Bottonlist';
import AddCard from '../../telas/AddCard/App';



const Tab = createBottomTabNavigator();

function Rotas() {
  return (
    <Tab.Navigator
      screenOptions={{
        //tabBarActiveTintColor: '#304FFE',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1.7,
          borderTopColor: '#C4C4C4',
          height: 90,
        }
      }}
      tabBarStyle
    >
      <Tab.Screen
        name="TelaHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Bottonhome focused={focused}></Bottonhome>
          )
        }}
      />
      <Tab.Screen
        name="Centro"
        component={Centro}
        options={{
          tabBarIcon: () => (
            <BotttonCenter></BotttonCenter>
          )
        }}
      />
      <Tab.Screen
        name="BottonSettings"
        component={BottonSettings}
        options={{
          tabBarIcon: () => (
            <Bottonlist></Bottonlist>
          )
        }}
      />
      <Tab.Screen
        name="Card"
        component={CardPage}
        options={{
          tabBarIcon: () => (
            <Bottonlist></Bottonlist>
          ),
          tabBarItemStyle: {
            display: 'none'
          }
        }}
      />
      <Tab.Screen
        name="AddCard"
        component={AddCard}
        options={{
          tabBarIcon: () => (
            <Bottonlist></Bottonlist>
          )
        }}
      />
    </Tab.Navigator >
  );
}

export default Rotas;
