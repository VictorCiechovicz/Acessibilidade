import React  from 'react';
import { Text, View, Button } from 'react-native';
import css from '../../../css/css';
import MenuAreaRestrita from '../MenuAreaRestrita';

export default function Predios({ navigation }) {

     return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Predios' navigation={navigation} />
            <Text>Predios</Text>
        </View>
    );
}