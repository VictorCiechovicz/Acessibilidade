import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import css from '../../css/css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo, Feather, FontAwesome}  from '@expo/vector-icons';

export default function MenuAreaRestrita(props)
{
    async function logout ()
    {
        await AsyncStorage.clear();
        console.log("AsyncStorage Limpo");
        props.navigation.navigate('Login');
    }

    async function home()
    {
        props.navigation.navigate('home');
    }

    return (
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2} onPress={()=>props.navigate('home')}>
                <FontAwesome name="home" color='#999' size={30} />
            </TouchableOpacity> 
            <Text style ={css.area__title}>{props.title}</Text>
            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <FontAwesome name="sign-out" color='#999' size={30} />
            </TouchableOpacity>                      
        </View>
    );
}