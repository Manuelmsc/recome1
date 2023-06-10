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
                      style={{ width: '22%', height: '150%' }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700' }}
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
                  icon={{
                    name: 'medkit',
                    type: 'font-awesome',
                    size: 20,
                    color: 'white',
                  }}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700' }}
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
                icon={{
                  name: 'flask',
                  type: 'font-awesome',
                  size: 20,
                  color: 'white',
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
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
                  icon={{
                    name: 'home',
                    type: 'font-awesome',
                    size: 20,
                    color: 'white',
                  }}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700' }}
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
                  icon={{
                    name: 'home',
                    type: 'font-awesome',
                    size: 20,
                    color: 'white',
                  }}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700' }}
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

{/* <IconButton icon="home" iconColor={MD3Colors.error50} title="Notas" size={60}
        onPress={() => navigation.navigate("Notas")}/>

      <IconButton icon="home" iconColor={MD3Colors.error50} title="Receta" size={60}
        onPress={() => navigation.navigate("Receta")}/>

      <IconButton icon="home" iconColor={MD3Colors.error50} title="Estudios" size={60}
        onPress={() => navigation.navigate("Estudios")}/>

      <IconButton icon="home" iconColor={MD3Colors.error50} title="Citas" size={60}
        onPress={() => navigation.navigate("Citas")}/>

      <IconButton icon="home" iconColor={MD3Colors.error50} title="Informacion" size={60}
        onPress={() => navigation.navigate("Informacion")} />  */}

      {/* <Button icon="home" title="Notas" onPress={() => navigation.navigate("Notas")} />
      <Button title="Recetas" onPress={() => navigation.navigate("Receta")} />
      <Button title="Estudios" onPress={() => navigation.navigate("Estudios")} />
      <Button title="Citas Medicas" onPress={() => navigation.navigate('Citas')} />
      <Button title="Informacion Medica" onPress={() => navigation.navigate("Informacion")} />  */}
      

