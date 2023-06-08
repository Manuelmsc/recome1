import React, { Component} from "react";
import { View, Text, TextInput, AppRegistry, StyleSheet,Touch,style} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { Icon,Input } from '@rneui/themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


 const Tab = createBottomTabNavigator();

 export default function RecetaScreen() {
   const navigation = useNavigation();
   navigation.setOptions({ title: 'Crear Receta Medica'  })

    return (
    
     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Nombre Completo" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingresar Nombre Completo"
      />

      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Nombre del Medico" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingresar Nombre Completo del Medico"
      />

      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Diagnostico Medico" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese Diagnostico Medico"
      />

      <Input multiline numberOfLines={10} containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Descripcion de Medicamentos" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese la Descripcion de los Medicamentos"
      />


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

