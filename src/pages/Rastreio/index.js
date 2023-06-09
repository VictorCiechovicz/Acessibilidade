import React from 'react';
import { TouchableOpacity, Text, SafeAreaView } from 'react-native';
import {button, menu} from '../../css/index';

export default function Rastreio({ navigation }) {

    return (
        <SafeAreaView style={menu.menuSuperior}>
            <Text>Aqui vai a regra para navegação</Text>
            <TouchableOpacity style={button.button} onPress={() => navigation.navigate('Home')}>
                <Text style={button.buttonText}>Home</Text>                    
            </TouchableOpacity>
        </SafeAreaView>
    );
}