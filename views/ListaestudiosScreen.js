import React from "react";
import { View, Text } from "react-native";
import { Icon,List,Item } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "@react-native-material/core";


export default function ListaestudiosScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Lista de Estudios'  })

    return (
      <View >
          <ListItem
            title="Jaime Eliazar Esparza"
            secondaryText="t torasx, radiografia de pie cabo, brazo derecho"
        />
        <ListItem
          title="Manuel Alejandro Ortega Magdaleno"
          secondaryText="hb,grupos,quimica sanguinea....."
        />
        <ListItem
            title="Maria del Rosario Perez"
            secondaryText="colesterol, trigliceridos....."
        />
      </View>
      );
    }