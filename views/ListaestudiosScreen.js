import React from "react";
import { View, Text } from "react-native";
import { Icon,List,Item } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "@react-native-material/core";
//import { ListItem } from 'react-native-elements';


export default function ListaestudiosScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Lista de Estudios'  })

    return (
      /*<View tyle={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <ListItem.Content style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text>Nombre.</Text>
          </View>
          <View style={{width: '50%'}}>
            <Text>Este es el segundo campo de texto.</Text>
          </View>
        </ListItem.Content>
      </View>*/

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