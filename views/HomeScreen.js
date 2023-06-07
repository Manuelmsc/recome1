import React from "react";
import { Button, View, Text } from "react-native";


import RecetaScreen from "../views/RecetaScreen";
import NotaScreen from "../views/NotaScreen";
import EstudiosScreen from "../views/EstudiosScreen";
import CitasScreen from "../views/CitasScreen";
import InformacionScreen from "../views/InformacionScreen";
import ListanotasScreen from "../views/ListanotasScreen";
import ListaestudiosScreen from "../views/ListaestudiosScreen";
import ListarecetaScreen from "../views/ListarecetaScreen";


export default function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pantalla principal</Text>

      <Button title="Notas" onPress={() => navigation.navigate("Notas")} />
      <Button title="Recetas" onPress={() => navigation.navigate("Receta")} />
      <Button title="Estudios" onPress={() => navigation.navigate("Estudios")} />
      <Button title="Citas Medicas" onPress={() => navigation.navigate('Citas')} />
      <Button title="Informacion Medica" onPress={() => navigation.navigate("Informacion")} />
      
    </View>
  );
}



