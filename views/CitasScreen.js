import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';


const Tab = createBottomTabNavigator();


export default function CitasScreen() {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first')

 

  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Agendar Cita Medica</Text>
      <TextInput style={styles.input} placeholder="Ingrese Nombre del Paciente"/>
      <Text>Nombre Completo del Paciente</Text>
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
      <TextInput style={styles.input} placeholder="Ingrese Genero"/>
      <Text>Genero</Text>
      <TextInput style={styles.input} placeholder="Ingrese la edad del paciente"/>
      <Text>Edad tipo Numerico</Text>
      <TextInput style={styles.input} placeholder="Ingrese la Afecion Principal"/>
      <Text> Ingrese el diagnistico medico</Text>

      <Button radius={'sm'} onPress={() => Alert.alert('Cita Medica','Fue Agendada Correctamente',[{text: '', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
      {text: 'OK', onPress: () => navigation.navigate("Citas")},],{cancelable: false},)} type="solid"> Guardar<Icon name="save" color="white" /></Button>
    </View>  
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",
  },
});