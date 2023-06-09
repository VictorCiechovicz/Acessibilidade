import { StyleSheet } from "react-native";
import Cor from './cores.json';

const button = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: `${Cor.botao}`,
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        color: `${Cor.textoBotao}`,
        textAlign: 'center',
    },
    button__home: {
        marginRight: 40
    },
    darkbg: {
        backgroundColor: "#333",
    },
    login__button: {
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf: "center",
        borderRadius: 5,
    },
    login__buttonText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#333',
    },
    button__home2: {
        textAlign: 'left',
    },

    button__logout: {
        textAlign: 'right',
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
});
export default button;