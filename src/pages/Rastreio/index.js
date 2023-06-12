import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, SafeAreaView } from 'react-native';
import css from '../../css/css';

export default function Rastreio({ navigation }) {

    return (
        <SafeAreaView style={css.menuSuperior}>
            <StatusBar style="light" />
            <Text>Aqui vai a regra para navegação</Text>
            <TouchableOpacity style={css.buttonGeral} onPress={() => navigation.navigate('Home')}>
                <Text style={css.buttonTextGeral}>Home</Text>                    
            </TouchableOpacity>
        </SafeAreaView>
    );
}