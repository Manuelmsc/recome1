import React from "react";
import { ScrollView, Text, TextInput, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { Icon,Input } from '@rneui/themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import { Appbar } from 'react-native-paper';



const Tab = createBottomTabNavigator();

export default function NotaScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Crear Nota Medica'  })

  return (
    
    <ScrollView >

      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Nombre Completo del Paciente" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese Nombre Completo del Paciente"
      />
      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Nombre Completo del Medico" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese Nombre Completo del Medico"
      />
      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Frecuencia Cardiaca" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese la Frecuencia Cardiaca"
      />
      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Frecuencia Respiratoria" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese la Frecuencia Respiratoria"
      />
      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Talla" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese la Talla del Paciente"
      />
      <Input containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Temperatura" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese la Temperatura del Paciente"
      />
      <Input multiline numberOfLines={10} containerStyle={{}} disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}} errorStyle={{}} errorProps={{}} inputStyle={{}} label="Afeccion principal" labelStyle={{}}
        labelProps={{}} leftIconContainerStyle={{}} rightIconContainerStyle={{}} placeholder="Ingrese la descripcion de la afeccion principal"
      />

      <Button radius={'sm'} onPress={() => Alert.alert('Nota Medica','Fue Guardada Correctamente',[{text: '', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
      {text: 'OK', onPress: () => navigation.navigate("Listanotas")},],{cancelable: false},)} type="solid"> Guardar<Icon name="save" color="white" /></Button>
      
 

    {/* <AppBar
          variant="bottom"
          trailing={props => (
      
      <IconButton
          onPress={() => navigation.navigate("Home")}
          icon={props => <Icon name="home" {...props} />}
          {...props}
      />
      )}
          style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}
      >
      <FAB
          onPress={() => navigation.navigate("Listanotas")}
          icon={props => <Icon name="add" {...props} />}
          style={{ position: "absolute", top: -28, alignSelf: "center" }}
      />
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
    </ScrollView>  

  );
}



/*const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",
  },
});*/


