import React, { useEffect, useState } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import css from '../../../css/css';
import MenuAreaRestrita from '../MenuAreaRestrita';

export default function Sala({navigation}) {

    return (
        <View>
            <MenuAreaRestrita title='Sala' navigation={navigation} />

            <View style={css.login__input}>
               
            <TextInput
                        placeholder='Nome do Produto:' nChangeText={text=>setProduct(text)}
                />
            </View>

            <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                <Text onPress={() => navigation.navigate('Sala')}>Sala</Text>
            </TouchableOpacity>
        </View>
    );
}