import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import css from '../../../css/css.js';

export default function form({ onAddLocal, onEditLocal, localData, onClose, errorResponse }) {
  const [local, setLocal] = useState(localData?.local || '');
  const [mensagem1, setMensagem1] = useState(localData?.mensagem1 || '');
  const [mensagem2, setMensagem2] = useState(localData?.mensagem2 || '');
  const [audio, setAudio] = useState(localData?.audio || '');
  const [imagem, setImagem] = useState(localData?.imagem || '');
  const [qr, setQr] = useState(localData?.qr || '');

  //console.log("Aqui");
  //console.log('errorResponse:', errorResponse);
  //console.log(JSON.parse(errorResponse));

 
  useEffect(() => {
    if (errorResponse) {
      const errorMessages = Object.values(errorResponse);
      errorMessages.forEach((errorMessage) => {
        console.log(errorMessage);
      });
    }
  }, [errorResponse]);
  
     

  useEffect(() => {
    if (localData) {
      setLocal(localData.local || '');
      setMensagem1(localData.mensagem1 || '');
      setMensagem2(localData.mensagem2 || '');
      setAudio(localData.audio || '');
      setImagem(localData.imagem || '');
      setQr(localData.qr || '');
    }
  }, [localData]);


  const handleSave = () => {
    const newLocal = {
      local,
      mensagem1,
      mensagem2,
      audio,
      imagem,
      qr,
    };

    if (localData) {
      //(localData.local);// Se existir localData, significa que estamos em modo de edição
      newLocal.id = localData.id;
      onEditLocal(newLocal);
    } else {
      // Caso contrário, estamos em modo de inclusão
      onAddLocal(newLocal);
    }

    if (!localData) {
      limparDados();

    }

    onClose();

  };

  const limparDados = () => {
    setLocal('');
    setMensagem1('');
    setMensagem2('');
    setAudio('');
    setImagem('');
    setQr('');
  };

  const cancelar = () => {
    limparDados();
    onClose();
    // Chama a função onClose para fechar o formulário
  };

  return (
    <View style={css.formContainer}>

      <Text style={css.formLabel}>Local:</Text>
      <TextInput
        style={css.formInput}
        value={local}
        onChangeText={setLocal}
        placeholder="Digite o local"
      />
      {errorResponse.local && (
        <Text style={css.errorText}>{errorResponse.local}</Text>
      )}
      <Text style={css.formLabel}>Mensagem 1:</Text>
      <TextInput
        style={css.formInput}
        value={mensagem1}
        onChangeText={setMensagem1}
        placeholder="Digite a mensagem 1"
      />
      {errorResponse && errorResponse.mensagem1 && (
        <>         
          <Text style={css.errorText}>{errorResponse.mensagem1}</Text>
        </>
      )}

      <Text style={css.formLabel}>Mensagem 2:</Text>
      <TextInput
        style={css.formInput}
        value={mensagem2}
        onChangeText={setMensagem2}
        placeholder="Digite a mensagem 2"
      />

      <Text style={css.formLabel}>Áudio:</Text>
      <TextInput
        style={css.formInput}
        value={audio}
        onChangeText={setAudio}
        placeholder="Digite o áudio"
      />

      <Text style={css.formLabel}>Imagem:</Text>
      <TextInput
        style={css.formInput}
        value={imagem}
        onChangeText={setImagem}
        placeholder="Digite a imagem"
      />

      <Text style={css.formLabel}>QR:</Text>
      <TextInput
        style={css.formInput}
        value={qr}
        onChangeText={setQr}
        placeholder="Digite o QR"
      />
      <TouchableOpacity style={css.formButton} onPress={handleSave}>
        <Text style={css.formButtonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={css.formButton} onPress={cancelar}>
        <Text style={css.formButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}