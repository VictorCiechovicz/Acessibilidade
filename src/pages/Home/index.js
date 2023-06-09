import React from 'react';
import { TouchableOpacity, Text, SafeAreaView } from 'react-native';
import {button} from '../../css/index';

export default function Home({ navigation }) {
    return (
        <SafeAreaView styles={button.container}>
            <TouchableOpacity style={button.button} onPress={() => navigation.navigate('Login')}>
                <Text style={button.buttonText}>Logar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button.button} onPress={() => navigation.navigate('Rastreio')}>
                <Text style={button.buttonText}>Navegar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}