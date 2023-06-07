import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function RecetaScreen() {
  const navigation = useNavigation();

  return (
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Crear Receta Medica</Text>
      <TextInput style={styles.input} placeholder="Ingrese Nombre del Paciente"/>
      <Text>Nombre Completo del Paciente</Text>
      <TextInput style={styles.input} placeholder="Ingrese Nombre del Medico"/>
      <Text>Nombre Completo del Medico</Text>
      <TextInput style={styles.input} placeholder="Ingrese Diagnostico Medico"/>
      <Text>Diagnostico Principal</Text>
      <TextInput style={styles.input} placeholder="Descripcion de Medicamentos"/>
      <Text> Ingrese la descripcion de los medicamentos a surtir</Text>

      <Button radius={'sm'} onPress={() => Alert.alert('Receta Medica','Fue Guardada Correctamente',[{text: '', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
      {text: 'OK', onPress: () => navigation.navigate("Listareceta")},],{cancelable: false},)} type="solid"> Guardar<Icon name="save" color="white" /></Button>
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

