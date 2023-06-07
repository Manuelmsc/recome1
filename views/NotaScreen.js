import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function NotaScreen() {
  const navigation = useNavigation();

  return (
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Crear Nota Medica</Text>
      <TextInput style={styles.input} placeholder="Ingrese Nombre  Paciente"/>
      <Text>Nombre Completo del Paciente</Text>
      <TextInput style={styles.input} placeholder="Ingrese Nombre Medico"/>
      <Text>Nombre Completo del Medico</Text>
      <TextInput style={styles.input} placeholder="Ingrese la Frecuencia Cardiaca"/>
      <Text>Solo valores Numericos</Text>
      <TextInput style={styles.input} placeholder="Ingrese la Frecuencia Respiratoria"/>
      <Text>Solo valores Numericos</Text>
      <TextInput style={styles.input} placeholder="Ingrese la Talla"/>
      <Text> solo valores Numericos</Text>
      <TextInput style={styles.input} placeholder="Ingrese la Temperatura"/>
      <Text> solo valores Numericos</Text>
      <TextInput style={styles.input} placeholder="Descripcion de la afeccion Principal"/>
      <Text> Ingrese la descripcion de la afeccion principal</Text>

      <Button radius={'sm'} onPress={() => Alert.alert('Nota Medica','Fue Guardada Correctamente',[{text: '', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
      {text: 'OK', onPress: () => navigation.navigate("Listanotas")},],{cancelable: false},)} type="solid"> Guardar<Icon name="save" color="white" /></Button>
      
    {/* <AppBar variant="bottom" leading={props => (
        <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />)} trailing={props => (
        <IconButton icon={props => <Icon name="magnify" {...props} />}{...props}/> )}
        style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}>
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        style={{ position: "absolute", top: -28, alignSelf: "center" }}/>
    </AppBar> */}


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


