import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Picker, Modal, Alert, Image } from "react-native";
import TakePicture from '../Camera';
import { estilos } from '../Style/index';


export default function Form() {

    const [matricula, setMatricula] = useState(null);
    const [codigo, setCodigo] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("default");

  
    function validar() {
        if(matricula != null && selectedValue != "default" && codigo != null) {
            setIsOpen(true)
        } else {
            Alert.alert('Todos campos precisam ser preenchidos!')
        }
    }
    function confirmarEnvio() {
        setIsOpen(false)
        setMatricula(null)
        setCodigo(null)
        setSelectedValue("default")
    }


    return (
        <View>
            <View style={estilos.form}>
                <Text style={estilos.label}>Digite sua Matricula</Text>
                <TextInput 
                style={estilos.input}
                keyboardType="numeric" 
                onChangeText={setMatricula} 
                value={matricula} 
                />
                <Text style={estilos.label}>Digite seu Código</Text>
                <TextInput 
                onChangeText={setCodigo} 
                value={codigo}
                style={estilos.input} />
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >   
                    <Picker.Item label="Escolha uma opção:" value="default" />
                    <Picker.Item label="Leitura implausível" value="Leitura implausível" />
                    <Picker.Item label="Releitura" value="Releitura" />
                    <Picker.Item label="Situação de risco" value="Situação de risco" />
                    <Picker.Item label="Suspeita de fraude" value="Suspeita de fraude" />
                    <Picker.Item label="Impedimento de leitura" value="Impedimento de leitura" />
                </Picker>
                <TouchableOpacity style={estilos.botao} 
                onPress={() => validar()} >
                <Text style={estilos.botaoTexto}>
                    Foto
                </Text>
                </TouchableOpacity>
                
            </View>
            <Modal transparent={true} visible={isOpen}>
                <TakePicture 
                    matricula={matricula}
                    codigo={codigo}
                    situacao={selectedValue}
                    confirmarEnvio={confirmarEnvio}
                    
                />
                  
            </Modal> 

        </View>
    );
}

