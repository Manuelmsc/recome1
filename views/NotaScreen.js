import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from '@rneui/themed';

import HomeScreen from "../views/HomeScreen";
import RecetaScreen from "../views/RecetaScreen";
import EstudiosScreen from "../views/EstudiosScreen";
import CitasScreen from "../views/CitasScreen";
import InformacionScreen from "../views/InformacionScreen";

const Tab = createBottomTabNavigator();


export default function NotaScreen() {
  return (
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pantalla Notas Medicas</Text>
      <Text>Contenido</Text>
      <TextInput style={styles.input} placeholder="Ingrese los datos"/>
      <Text>Ingresa el nombre del doctor</Text>
      <TextInput style={styles.input} placeholder="Ingrese los datos"/>
      <Button radius={'sm'} type="solid"> Guargar<Icon name="save" color="white" /></Button>

      
      {/* <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home-outline" : "home";
              } else if (route.name === "Receta") {
                iconName = focused ? "medkit-outline" : "medkit";
              } else if (route.name === "Citas") {
                iconName = focused ? "library-outline" : "library";
              } else if (route.name === "Estudios") {
                iconName = focused ? "flask-outline" : "flask";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
            //tabBarStyle: { width: 400 },
          })}
      >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Receta" component={RecetaScreen} />
          <Tab.Screen name="Citas" component={CitasScreen} />
          <Tab.Screen name="Estudios" component={EstudiosScreen} />
      </Tab.Navigator> */}
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
