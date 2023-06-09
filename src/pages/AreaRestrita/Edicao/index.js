import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Edicao({ navigation }) {

    const [response, setResponse] = useState(null);

    //Envia o formulário com os dados para edição
    async function sendForm() {
        let response = await fetch(config.urlRoot + 'update', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                code: code,
                product: product,
                local: localization
            })
        });
        let json = await response.json();
        setResponse(json);
    }

    return (
        <View style={[css.container, css.containerTop]}>
            <Text>{response}</Text>
            <MenuAreaRestrita title='Edição' navigation={navigation} />
        </View>
    );
}