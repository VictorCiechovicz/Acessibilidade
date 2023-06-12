import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pages from './src/pages';

const corMenu = "#75f542";
const corTextoMenu = "#000000";

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="AreaRestrita"
          component={Pages.AreaRestrita}
          options={{
            title: "Area Administrativa",
            headerStyle: { backgroundColor: corMenu },
            headerTintColor: corTextoMenu,
            headerTitleStyle:
            {
              fontWeight: 'bold',
              alignSelf: 'center'
            }
          }} />
        <Stack.Screen
          name="Home"
          component={Pages.Home}
          options={{
            title: "Acessibilidade",
            headerStyle: { backgroundColor: corMenu },
            headerTintColor: corTextoMenu,
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
            headerStyle: { backgroundColor: corMenu },
            headerTintColor: corTextoMenu,
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
            headerStyle: { backgroundColor: corMenu },
            headerTintColor: corTextoMenu,
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