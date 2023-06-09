import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text,Image } from "react-native";


export default function InformacionScreen() {
  return (
    <View >

    <Image source={{uri: 'https://www.bbva.ch/wp-content/uploads/2021/07/recurso_-tipos-de-alimentacion.jpg'}}
       style={{width: 300, height: 200}} />
    
    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmLF7RlbEQG5Wqps4bMCaB4LR0iiq6RrIYQ&usqp=CAU'}}
       style={{width: 300, height: 200}} />
    <StatusBar style="auto" />
    </View>
  );
}


