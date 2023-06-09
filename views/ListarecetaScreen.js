import React from "react";
import { View, Text } from "react-native";
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "@react-native-material/core";

export default function ListarecetaScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Lista de Recetas Medicas'  })

    return (
      <View >
        <ListItem
            title="Jaime Eliazar Esparza"
            secondaryText="Omeprazol de 40 mg tomar 1 cada 8 horas.... 
            paracetamol de 500mg 1 cada 12 horas ."
        />
        <ListItem
          title="Manuel Alejandro Ortega Magdaleno"
          secondaryText="Omeprazol de 40 mg tomar 1 cada 8 horas.... 
          paracetamol de 500mg 1 cada 12 horas ."
        />
        <ListItem
            title="Maria del Rosario Perez"
            secondaryText="imipramina de 100 tomar cada 8 horas....
            cinitaprida 1 cada 8 horas"
        />
          {/* {<List.Item
              title="Manuel Alejandro Ortega Magdaleno"
              description="Item description"
              
              left={props => <List.Icon {...props} icon="folder" />}
          />
         } */}
      
      </View>
      );
    }