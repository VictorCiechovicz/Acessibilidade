import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, SafeAreaView } from 'react-native';
import css from '../../../css/css.js';
import { Feather as Icon } from '@expo/vector-icons';
import MenuAreaRestrita from '../MenuAreaRestrita/index.js';
import config from '../../../config/config.json';
import { Table, Row, Rows } from 'react-native-table-component';
import Modal from 'react-native-modal';
import Form from './form.js';

export default function Locais({ navigation }) {
    const [data, setData] = useState([]);
    const [isModalVisibleMensage, setIsModalVisibleMensage] = useState(false);
    const [modalMesage, setModalMesage] = useState('');
    const [isModalVisibleQr, setIsModalVisibleQr] = useState(false);
    const [modalQr, setModalQr] = useState('');
    const [searchText, setSearchText] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [localData, setLocalData] = useState(null);
    const [errorResponse, setErrorResponse] = useState('');

    useEffect(() => {
        buscaDados();
    }, []);

    const buscaDados = async () => {
        try {
            const response = await fetch(`${config.urlRoot}locais/`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    const filtrarDados = () => {
        if (searchText === '') {
            return data;
        }
        return data.filter(item => item.local.toLowerCase().includes(searchText.toLowerCase()));
    };

    const Deletar = async (item) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza de que deseja excluir este item?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    onPress: async () => {
                        try {
                            const response = await fetch(`${config.urlRoot}locais/${item.id}`, {
                                method: 'Delete',
                            });

                            if (response.ok) {
                                // A exclusão foi bem-sucedida
                                buscaDados();
                            } else {
                                console.error('Erro ao excluir o item:', response.status);
                            }
                        } catch (error) {
                            console.error('Erro ao excluir o item:', error);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const Msg = (item) => {
        setModalMesage(item.mensagem1);
        setIsModalVisibleMensage(true);
    };

    const Audio = (item) => {
        console.log('O audio é:', item.audio);
    };

    const QrCode = (item) => {
        setModalQr(item.qr);
        setIsModalVisibleQr(true);
    };

    const Imagem = (item) => {
        console.log('A imagem é:', item.imagem);
    };

    const handleAddLocal = async (form) => {
        try {
            const response = await fetch(`${config.urlRoot}locais/`, {
                method: 'POST',
                body: JSON.stringify({
                    local: form.local,
                    mensagem1: form.mensagem1,
                    mensagem2: form.mensagem2,
                    audio: form.audio,
                    imagem: form.imagem,
                    qr: form.qr
                }),
                headers: { 'Content-Type': 'application/json' },
            });
            const errorResponse = await response.json();
            setErrorResponse(errorResponse);
            if (response.ok) {
                //setIsFormVisible(false);
                buscaDados();
                console.log("if");
            } else if (response.status === 400) {
                // A resposta contém erros de validação                
                console.log("else if", JSON.stringify(errorResponse));

                //setErrorMessages(errorResponse.errors);
            } else {
                console.error('Erro ao adicionar o novo local:', data.error);
                console.log("else");
            }
        } catch (error) {
            console.error('Erro ao adicionar o novo local:', error);
            console.log("catch");
        }
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
        setLocalData(null);
    };

    const handleEditLocal = async (form) => {
        setIsFormVisible(true);
        setLocalData(form);
        try {
            const response = await fetch(`${config.urlRoot}locais/${form.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    local: form.local,
                    mensagem1: form.mensagem1,
                    mensagem2: form.mensagem2,
                    audio: form.audio,
                    imagem: form.imagem,
                    qr: form.qr
                }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                buscaDados();
                //setIsFormVisible(false);          
            } else { console.error('Erro ao editar o local:', response.status); }
        } catch (error) { console.error('Erro ao editar o local:', error); }
    };

    return (
        <SafeAreaView style={css.container}>
            <View>
                <MenuAreaRestrita title='Locais' navigation={navigation} />

                <TextInput
                    style={css.searchInput}
                    placeholder="Digite aqui o nome do local..."
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                />


                <Table style={css.tableContainerListar}>
                    <Row
                        data={['Local', 'Msg', 'Audio', 'Imagem', ' QR', 'Ações']}
                        style={css.tableHeadListar}
                    />

                    <Rows
                        data={filtrarDados().map(item => [
                            item.local,
                            item.mensagem1 ? <View style={[css.actionContainerListar]}>
                                <TouchableOpacity style={css.buttonListar} onPress={() => Msg(item)}>
                                    <Icon name="list" color="black" size={15} />
                                </TouchableOpacity>
                            </View> : "",
                            item.audio ? <View style={[css.actionContainerListar]}>
                                <TouchableOpacity style={css.buttonListar} onPress={() => Audio(item)}>
                                    <Icon name="mic" color="black" size={15} />
                                </TouchableOpacity>
                            </View> : "",
                            item.imagem ? <View style={[css.actionContainerListar]}>
                                <TouchableOpacity style={css.buttonListar} onPress={() => Imagem(item)}>
                                    <Icon name="image" color="black" size={15} />
                                </TouchableOpacity>
                            </View> : "",
                            item.qr ? <View style={[css.actionContainerListar]}>
                                <TouchableOpacity style={css.buttonListar} onPress={() => QrCode(item)}>
                                    <Icon name="grid" color="black" size={15} />
                                </TouchableOpacity>
                            </View> : "",
                            (
                                <View style={[css.actionContainerListar]}>
                                    <TouchableOpacity style={css.buttonListar} onPress={() => handleEditLocal(item)}>
                                        <Icon name="edit" color="black" size={15} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={css.buttonListar} onPress={() => Deletar(item)}>
                                        <Icon name="trash" color="black" size={15} />
                                    </TouchableOpacity>
                                </View>
                            ),
                        ])}
                        style={css.tableRowSeparatorListar}
                    />
                </Table>

                <Modal isVisible={isModalVisibleMensage}>
                    <View style={css.modalContainer}>
                        <Text style={css.modalTitle}>Mensagem:</Text>
                        <Text style={css.modalMesage}>{modalMesage}</Text>
                        <TouchableOpacity style={css.modalButton} onPress={() => setIsModalVisibleMensage(false)}>
                            <Text style={css.modalButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={isModalVisibleQr}>
                    <View style={css.modalContainer}>
                        <Text style={css.modalTitle}>O QrCode Informado foi:</Text>
                        <Text style={css.modalMesage}>{modalQr}</Text>
                        <TouchableOpacity style={css.modalButton} onPress={() => setIsModalVisibleQr(false)}>
                            <Text style={css.modalButtonText}>Fechar</Text>
                        </TouchableOpacity>

                    </View>

                </Modal>

                <Modal isVisible={isFormVisible}>
                    <View style={css.modalContainer}>

                        {isFormVisible && (
                            <Form
                                onAddLocal={handleAddLocal}
                                onEditLocal={handleEditLocal}
                                localData={localData}
                                onClose={handleCloseForm}
                                errorResponse={errorResponse}
                            />
                        )}
                    </View>
                </Modal>
            </View>
            <View style={css.buttonIncluir}>
                <TouchableOpacity onPress={() => setIsFormVisible(true)}>
                    <Text style={css.buttonIncluirText}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
