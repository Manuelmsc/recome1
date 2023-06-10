import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from '@rneui/themed';
import { Icon,Input } from '@rneui/themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton,Appbar } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


const Tab = createBottomTabNavigator();


export default function CitasScreen() {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first')
  navigation.setOptions({ title: 'Agendar Cita Medica'  })


  return (

    <View>
      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Nombre Completo" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingresar Nombre del Paciente"
      />
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Edad" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese la edad del paciente"
      />
      <Input multiline numberOfLines={10} containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Diagnostico Medico" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese la Afecion Principal"
      />
      <Button radius={'sm'} onPress={() => Alert.alert('Cita Medica','Fue Agendada Correctamente',[{text: '', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
      {text: 'OK', onPress: () => navigation.navigate("Pantalla Principal")},],{cancelable: false},)} type="solid"> Guardar<Icon name="save" color="white" /></Button>
    </View>  
  );
}

//  const styles = StyleSheet.create({
//    input: {
//     height: 40,
//      margin: 12,
//      borderWidth: 1,
//      padding: 10,
//      //width: "50%",
//    },
//  });