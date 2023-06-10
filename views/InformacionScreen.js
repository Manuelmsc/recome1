import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Image} from "react-native";
import { Text, Card, Button, Icon } from '@rneui/themed';


export default function InformacionScreen() {
  return (
    <View >
    {/* <Image source={{uri: 'https://www.bbva.ch/wp-content/uploads/2021/07/recurso_-tipos-de-alimentacion.jpg'}}
       style={{width: 300, height: 200}} />
    
    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmLF7RlbEQG5Wqps4bMCaB4LR0iiq6RrIYQ&usqp=CAU'}}
       style={{width: 300, height: 200}} /> */}
    <StatusBar style="auto" />
    <Card>
          <Card.Title>ALIMENTACION</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://www.bbva.ch/wp-content/uploads/2021/07/recurso_-tipos-de-alimentacion.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Mejora tus habitos alimenticios los cuales ayudan a la mejora de  tu salud y tu cuerpo
          </Text>
        </Card>
    <Card>
          <Card.Title>EJERCICIO DIARIO</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmLF7RlbEQG5Wqps4bMCaB4LR0iiq6RrIYQ&usqp=CAU',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Ejercitar tu cuerpo te ayuda en un amejora de tu cuerpo ademas de tu sueño etc.. 
          </Text>
      </Card>
    </View>
  );
}


