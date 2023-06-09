import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pages from './src/pages';
import Cor from './src/css/cores.json';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Pages.Home}
          options={{
            title: "Acessibilidade",
            headerStyle: { backgroundColor: `${Cor.menu}` },
            headerTintColor: `${Cor.textoMenu}`,
            headerTitleStyle:
            {
              fontWeight: 'bold',
              alignSelf: 'center'
            }
          }}
        />
        <Stack.Screen 
        name="Login" 
        component={Pages.Login} 
        options={{
          //headerShown: false,
          title: "Logar",
          headerStyle: { backgroundColor: `${Cor.menu}` },
          headerTintColor: `${Cor.textoMenu}`,
          headerTitleStyle:
          {
            fontWeight: 'bold',
            alignSelf: 'center'
          }
        }} />
        <Stack.Screen
          name="Rastreio"
          component={Pages.Rastreio}
          options={{
            title: "Navegar",
            headerStyle: { backgroundColor: `${Cor.menu}` },
            headerTintColor: `${Cor.textoMenu}`,
            headerTitleStyle:
            {
              fontWeight: 'bold',
              alignSelf: 'center'
            }
          }} />
        <Stack.Screen 
        name="Area Administrativa"
        component={Pages.AreaRestrita}
        options={{
          title: "Area Administrativa",
          headerStyle: { backgroundColor: `${Cor.menu}` },
          headerTintColor: `${Cor.textoMenu}`,
          headerTitleStyle:
          {
            fontWeight: 'bold',
            alignSelf: 'center'
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}