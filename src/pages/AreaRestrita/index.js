import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Salas from './Salas';
import Predios from './Predios';
import Locais from './Locais';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import css from '../../css/css';

export default function AreaRestrita({ navigation }) {

    const Tab = createMaterialBottomTabNavigator();

    return (

        <Tab.Navigator
            activeColor='#999'
            inactiveColor='#fff'
            barStyle={css.areaTab}
        >
            <Tab.Screen
                name="Locais"
                component={Locais}
                options={{
                    tabBarIcon: () => (<Entypo name="users" color='#999' size={20} />)
                }}
            />
            <Tab.Screen
                name="Salas"
                component={Salas}
                options={{
                    tabBarIcon: () => (<Entypo name="archive" color='#999' size={20} />)
                }}
            />
            <Tab.Screen
                name="Predios"
                component={Predios}
                options={{
                    tabBarIcon: () => (<Entypo name="edit" color='#999' size={20} />)
                }}
            />
        </Tab.Navigator>
    );
}