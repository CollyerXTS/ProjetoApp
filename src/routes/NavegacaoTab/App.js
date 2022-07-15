import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Navegção
import Home from '../../telas/Home/App';
import BottonCenter from '../../telas/BottonCenter/App';
import BottonSettings from '../../telas/SettingsList/App';
import CardPage from '../../telas/CardPage/App';
//Pasta Componentes
import Botton from '../../componentes/BotttonCenter';
import Bottonhome from '../../componentes/Bottonhome';
import Bottonlist from '../../componentes/Bottonlist';



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
        name="BottonCenters"
        component={BottonCenter}
        options={{
          tabBarIcon: () => (
            <Botton></Botton>
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
    </Tab.Navigator >
  );
}

export default Rotas;
