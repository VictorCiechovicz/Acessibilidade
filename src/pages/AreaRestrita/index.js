import React, { useState, useEffect } from 'react';
import { DarkTheme } from '@react-navigation/native';
import { Text, View, Button, BackHandler, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Cadastro from './Cadastro';
import Edicao from './Edicao';
import Profile from './Profile';
import { Entypo, Feather, FontAwesome}  from '@expo/vector-icons';

export default function AreaRestrita({navigation}) {

    const Tab = createMaterialBottomTabNavigator();

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            let user = await AsyncStorage.getItem('@logistica:user');
            setUser(user);
        }
        getUser();
    }, []);

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    navigation.navigate('Home');
                    BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);

    return (

        <Tab.Navigator
        activeColor='#999'
        inactiveColor='#fff'
        barStyle={css.area__tab}
        >
            <Tab.Screen 
                name="Perfil" 
                component={Profile} 
                options={{
                    tabBarIcon: () => (<Entypo name="users" color='#999' size={20} />)
                }}
            />
            <Tab.Screen 
                name="Cadastro" 
                component={Cadastro} 
                options={{
                    tabBarIcon: () => (<Entypo name="archive" color='#999' size={20} />)
                }} 
            />
            <Tab.Screen 
                name="Edição" 
                component={Edicao} 
                options={{
                    tabBarIcon: () => (<Entypo name="edit" color='#999' size={20} />)
                }} 
            />            
        </Tab.Navigator>
    );
}