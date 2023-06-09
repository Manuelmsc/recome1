 import React from "react";
 import { View, Text } from "react-native";
 //import { List } from '@rneui/themed';
 import { AppBar, HStack, IconButton } from "@react-native-material/core";
 import { ListItem } from "@react-native-material/core";
 import { useNavigation } from '@react-navigation/native';
 import { List } from 'react-native-paper';


export default function ListanotasScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Pantalla Lista de Notas Medicas'  })
  return (
    <View >
        <ListItem
          title="Jaime Eliazar Esparza"
          secondaryText="Paciente femenino de 36.4 semanas de gestacion cuenta con embarazo..."
        />
        <List.Item
             title="Jaime Eliazar Esparza"
             description="Paciente femenino de 36.4 semanas de gestacion cuenta con embarazo..."
             left={props => <List.Icon {...props} icon="folder" />}
  />
        <ListItem
          title="Jaime Eliazar Esparza"
          secondaryText="Paciente masculino tiene una fractura de perone expuesta..."
        />
        <ListItem
            title="Jaime Eliazar Esparza"
            secondaryText="Paciente vino a consulta con molestia en el ojo derecho...."
        />
    
    </View>
    );
  }

          {/* <AppBar
            title="Title"
            leading={props => (
              <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
            )}
            trailing={props => (
              <HStack>
                <IconButton
                  icon={props => <Icon name="magnify" {...props} />}
                  {...props}
                />
                <IconButton
                  icon={props => <Icon name="dots-vertical" {...props} />}
                  {...props}
                />
              </HStack>
    )}
  /> */}
