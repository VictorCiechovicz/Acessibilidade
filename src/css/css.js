import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTop:{
        justifyContent: 'flex-start',
    },
    textPage:{
        backgroundColor:'orange',
        padding: 20
    },
    container2: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button__home:{
        marginRight: 40
    },
    darkbg: {
        backgroundColor: "#333",
    },
    login__msg:(text='none')=>({
        fontWeight: 'bold',
        fontSize: 22,
        color: 'red',
        marginTop: 5,
        marginBottom: 15,
        display: text,
    }),
    login__form:{
        width: "80%",        
    },
    login__logomarca:{
        marginBottom: 10,
    },
    login__input:{
        backgroundColor: '#fff',
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
    },
    login__button:{
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf: "center",
        borderRadius: 5,
    },
    login__buttonText:{
        fontWeight: 'bold',
        fontSize: 22,
        color: '#333',
    },
    area__tab:{
        backgroundColor: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    area__menu:{
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button__home2:{
        textAlign: 'left',
    },
    area__title:{
        width: '80%',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button__logout:{
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
export default css;