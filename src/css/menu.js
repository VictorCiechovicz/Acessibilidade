import { StyleSheet } from "react-native";
import Cor from './cores.json';

const menu = StyleSheet.create({
 
    menuSuperior: {
        headerStyle: {backgroundColor: `${Cor.menu}`},
        headerTintColor: `${Cor.textoMenu}`,
        headerTitleStyle:
        {fontWeight:'bold',
        alignSelf:'center',       
      }
    },

});
export default menu;