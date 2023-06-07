 import React from "react";
 import { View, Text } from "react-native";
 import { ListItem,Icon,List,Item } from '@rneui/themed';
 import { AppBar, HStack, IconButton } from "@react-native-material/core";



export default function ListanotasScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Pantalla Lista de Nootas Medicas</Text>
       
    
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
