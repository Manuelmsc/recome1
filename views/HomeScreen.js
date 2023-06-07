import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pantalla principal</Text>
      <Button title="Notas" onPress={() => navigation.navigate("Notas")} />
      <Button title="Recetas" onPress={() => navigation.navigate("Receta")} />
      <Button title="Estudios" onPress={() => navigation.navigate("Estudios")} />
    </View>
  );
}