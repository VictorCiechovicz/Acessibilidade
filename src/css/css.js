import { StyleSheet } from "react-native";

const corMenu = "#75f542";
const corBotao = "#485a96";
const corTextoBotao = "#ffffff";
const corTextoMenu = "#000000";

const css = StyleSheet.create({

    tableContainerListar: {
        borderWidth: 2,
        borderColor: '#000',

    },
    tableRowSeparatorListar: {
        borderBottomWidth: 1,
        borderColor: 'black',
    },

    tableHeadListar: {
        height: 30,
        backgroundColor: '#555',
    },
    tableHeadTextListar: {
        color: '#000',
        textAlign: 'left',
        fontWeight: 'bold',
    },

    tableRowTextListar: {
        color: 'black'
    },

    buttonIncluir: {        
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1DA1F2',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
      },

      buttonIncluirText: {
        fontSize: 24,
        color: '#FFF',
      },

      
      content: {
        flex: 1,
      },

      searchInput:{
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginBottom: 5,
      },
    buttonContainerListar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
        paddingRight: 30,
        right: "30%",
    },
    actionContainerListar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
        width: "70%", // Largura desejada para a coluna "Ações"
    },
    buttonListar: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 5,

    },

    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
    },
    modalTitle: {
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    modalMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },

    formContainer: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        elevation: 2,
      },
    
      formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
    
      formInput: {
        backgroundColor: '#F4F4F4',
        height: 40,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
    
      formButton: {
        backgroundColor: '#2980B9',
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      formButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
      },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTop: {
        justifyContent: 'flex-start',
    },


    viewPrincipal:{
        flex: 10,
    },
    viewSecundaria:{
        flex: 1,
    },

    buttonLeft: {
        textAlign: 'left',
        paddingLeft: 40
    },

    buttonRight: {
        textAlign: 'right',
        paddingRight: 40,
    },
    buttonTextGeral: {
        color: corTextoBotao,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    buttonHome: {
        padding: 5,
        alignSelf: "center",
        borderRadius: 5,

    },

    buttonGeral: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: corBotao,
        justifyContent: 'center',
        borderWidth: 0.5,
        width: "40%",
        borderColor: '#fff',
        height: 50,
        borderRadius: 5,
        margin: 10,
        alignSelf: 'center',
    },
    buttonDark: {
        backgroundColor: "#333",
    },
    button: {
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf: "center",
        borderRadius: 5,
    },
    areaTab: {
        backgroundColor: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    areaMenu: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
    },

    areaTitle: {
        width: '80%',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    menuSuperior: {
        headerStyle: { backgroundColor: corMenu },
        headerTintColor: corTextoMenu,
        headerTitleStyle:
        {
            fontWeight: 'bold',
            alignSelf: 'center',
        }
    },

    textPage: {
        backgroundColor: 'orange',
        padding: 20
    },
    msg: (text = 'none') => ({
        fontWeight: 'bold',
        fontSize: 22,
        color: 'red',
        marginTop: 5,
        marginBottom: 15,
        display: text,
    }),
    form: {
        width: "80%",
    },
    logoMarca: {
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#fff',
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
    },

});

export default css;