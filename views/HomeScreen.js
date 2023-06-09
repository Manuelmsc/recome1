import React from "react";
import { View, Text } from "react-native";
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
     
      <Button title="NOTA MEDICA"
              icon={{
                name: '',
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
              }} onPress={() => navigation.navigate("Notas")}
            />

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

        <Button title="CITA MEDICA"
              icon={{
                name: 'AiFillAmazonCircle',
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
      
    </View>
  );
}



