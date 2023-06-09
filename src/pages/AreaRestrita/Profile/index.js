import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import css from '../../../css/css.js';
import MenuAreaRestrita from '../../MenuAreaRestrita';
import { TextInput } from 'react-native-paper';

export default function Profile({ navigation }) {


    const [user, setUser] = useState(null);
    const [idUser, setIdUser] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confirmaSenha, setConfirmaSenha] = useState(null);
    /*
       useEffect(()=>{
           async function getUser()
           {
               let response = await AsyncStorage.getItem('userData');
               let json = JSON.parse(response);
               setUser(json.name);
               console.log(user);
           } 
           getUser();
       })
   */
    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />
            <View>
                <Text>{user}</Text>
                <TextInput placeholder='Senha Antiga:' onChangeText={text => setSenhaAntiga(text)} />
                <TextInput placeholder='Nova Senha:' onChangeText={text => setNovaSenha(text)} />
                <TextInput placeholder='Confirmar Senha:' onChangeText={text => setConfirmaSenha(text)} />
                <TouchableOpacity>
                    <Text>Salvar</Text>
                </TouchableOpacity>

            </View>

        </View>

    );
}
