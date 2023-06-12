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

    useEffect(() => {
        buscaDados();
        console.log(data);
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
                headers: {
                    //Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            //const data = await response.json();
            //console.log(data);

            if (response.ok) {
                // O novo local foi adicionado com sucesso
                setIsFormVisible(false);
                buscaDados();
            } else {
                console.error('Erro ao adicionar o novo local:', data.error);
            }
        } catch (error) {
            console.error('Erro ao adicionar o novo local:', error);
        }
        console.log('Novo local:', form);
    };


    const handleEditLocal = (editedLocal) => {
        // Lógica para editar o local
        console.log('Local editado:', editedLocal);
        setIsFormVisible(false);
        buscaDados();
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
                                    <TouchableOpacity style={css.buttonListar} onPress={() => Editar(item)}>
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
                        <Text style={css.modalMessage}>{modalQr}</Text>
                        <TouchableOpacity style={css.modalButton} onPress={() => setIsModalVisibleQr(false)}>
                            <Text style={css.modalButtonText}>Fechar</Text>
                        </TouchableOpacity>

                    </View>

                </Modal>

                <Modal isVisible={isFormVisible}>
                    <View style={css.modalContainer}>
                        <Form
                            onAddLocal={handleAddLocal}
                            onEditLocal={handleEditLocal}
                        />
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
