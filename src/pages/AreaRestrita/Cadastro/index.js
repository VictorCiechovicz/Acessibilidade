import React, { useEffect, useState } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config/config.json';

export default function Cadastro({navigation}) {

    const address=config.origen;
    const [code, setCode] = useState(null);
    const [user, setUser]=useState(null);
    const [product, setProduct] = useState(null);
    const [productName, setProductName] = useState(null);

    useEffect(()=>{
        randomCode();
    },[]);

    //console.log(code);

     //Pegar o id do usuário
     async function getUser()
     {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUser(json.name);
        console.log(user);
     }
 
    //Gerar um código randômico
    async function randomCode()
    {
        let result = '';
        let length=20;
        let chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        setCode(result);
    }

    //Envio do formulário
    async function sendForm()
    {
        let response=await fetch(config.urlRoot+'create',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user,
                code: code,
                product: product,
                local: address
            })
        });
    }

    return (
        <View>
            <MenuAreaRestrita title='Cadastro' navigation={navigation} />

            <View style={css.login__input}>
               
            <TextInput
                        placeholder='Nome do Produto:'
                        onChangeText={text=>setProduct(text)}
                />
            </View>

            <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                <Text onPress={() => navigation.navigate('Cadastro')}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}