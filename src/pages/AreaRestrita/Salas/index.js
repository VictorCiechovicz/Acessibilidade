import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import css from '../../../css/css';
import MenuAreaRestrita from '../MenuAreaRestrita';
import Voice from '@react-native-voice/voice';

export default function Sala({ navigation }) {

    const recordVoice = async () => {
        if (await Voice.isRecognizing()) {
            Voice.stop();
        }
        else { Voice.start('pt-Br') }
    }

    useEffect( () => {
            Voice.onSpeechResults = (e) => {
                if(!e.value) return;
               const formatedeResustados = e.value[0].toLowerCase()
               console.log.log(formatedeResustados);
            }
            
        }, []
    );

    return (
        <View>
            <MenuAreaRestrita title='Sala' navigation={navigation} />

            <View style={css.login__input}>

                <TextInput
                    placeholder='Nome do Produto:' nChangeText={text => setProduct(text)}
                />
            </View>

            <TouchableOpacity style={css.login__button} onPress={() => recordVoice()}>
                <Text>PLAY</Text>
            </TouchableOpacity>
        </View>
    );
}