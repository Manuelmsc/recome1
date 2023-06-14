import React from "react";
import { View, Text,Image } from "react-native";
import { IconButton, MD3Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@rneui/themed';
import { Alert } from 'react-native';
import { IconName } from "react-icons/fa";


import RecetaScreen from "../views/RecetaScreen";
import NotaScreen from "../views/NotaScreen";
import EstudiosScreen from "../views/EstudiosScreen";
import CitasScreen from "../views/CitasScreen";
import InformacionScreen from "../views/InformacionScreen";
import ListanotasScreen from "../views/ListanotasScreen";
import ListaestudiosScreen from "../views/ListaestudiosScreen";
import ListarecetaScreen from "../views/ListarecetaScreen";
import Citascalendario from "../views/Citascalendario";

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <View style={{top: -90}}>
        <Button title="NOTA MEDICA"                
                  icon={
                    <Image
                      source={require('../assets/nota.png')}
                      style={{ width: '22%', height: '150%', left:-10 }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700',left: -1 }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 190,
                    marginHorizontal: 40,
                    marginVertical: 0,
                  }} onPress={() => navigation.navigate("Notas")}
                />
    </View>       
    <View  style={{top: -70}}>
        <Button title="RECETA"
                   icon={
                    <Image
                      source={require('../assets/receta.png')}
                      style={{ width: '22%', height: '150%',left:-30 }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700' ,left: -18}}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 190,
                    marginHorizontal: 40,
                    marginVertical: 0,
                  }} onPress={() => navigation.navigate("Receta")}
          />
    </View>
    <View style={{top: -50}}>
      <Button title="ESTUDIOS"
                 icon={
                  <Image
                    source={require('../assets/observacion.png')}
                    style={{ width: '22%', height: '150%',left:-22 }}
                  />}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700',left: -13 }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 190,
                  marginHorizontal: 40,
                  marginVertical: 0,
                }} onPress={() => navigation.navigate("Estudios")}
        />
    </View>
    <View style={{top: -30}}>
        <Button title="CITA MEDICA"
                   icon={
                    <Image
                      source={require('../assets/cita.png')}
                      style={{ width: '22%', height: '150%',left:-12 }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700',left: -2 }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 190,
                    marginHorizontal: 40,
                    marginVertical: 0,
                  }} onPress={() => navigation.navigate("CCalendario")}
            />
    </View>
    <View style={{top: -10}}>
        <Button title="INFORMACION"
                   icon={
                    <Image
                      source={require('../assets/buscar.png')}
                      style={{ width: '22%', height: '150%',left:-10 }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700' ,left: -0 }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 190,
                    marginHorizontal: 40,
                    marginVertical: 0,
                  }} onPress={() => navigation.navigate("Informacion")}
              /> 
    </View>
    </View>
  );
}
   

