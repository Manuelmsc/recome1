import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from "../views/HomeScreen";
import RecetaScreen from "../views/RecetaScreen";
import NotaScreen from "../views/NotaScreen";
import EstudiosScreen from "../views/EstudiosScreen";
import CitasScreen from "../views/CitasScreen";
import InformacionScreen from "../views/InformacionScreen";
import ListanotasScreen from "../views/ListanotasScreen";
import ListaestudiosScreen from "../views/ListaestudiosScreen";
import ListarecetaScreen from "../views/ListarecetaScreen";
import Citascalendario from "../views/Citascalendario";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Route() {
  return (
    
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;

    //         if (route.name === "Home") {
    //           iconName = focused ? "home-outline" : "home";
    //         } else if (route.name === "Receta") {
    //           iconName = focused ? "medkit-outline" : "medkit";
    //         } else if (route.name === "Notas") {
    //           iconName = focused ? "library-outline" : "library";
    //         } else if (route.name === "Estudios") {
    //           iconName = focused ? "flask-outline" : "flask";
    //         }

    //         // You can return any component that you like here!
    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //       tabBarActiveTintColor: "blue",
    //       tabBarInactiveTintColor: "gray",
    //     })}
    //   >
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Receta" component={RecetaScreen} />
    //     <Tab.Screen name="Notas" component={NotaScreen} />
    //     <Tab.Screen name="Estudios" component={EstudiosScreen} />
    //     <Tab.Screen name="Citas" component={CitasScreen} />
    //     <Tab.Screen name="Informacion" component={InformacionScreen} />
    //     <Tab.Screen name="Listanotas" component={ListanotasScreen} />
    //     <Tab.Screen name="Listaestudios" component={ListaestudiosScreen} />
    //     <Tab.Screen name="Listareceta" component={ListarecetaScreen} />


    //   </Tab.Navigator>
    // </NavigationContainer>
     <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              
                 <Stack.Screen
                     name="Pantalla Principal"
                     component={HomeScreen}
                 />
                 <Stack.Screen name="Receta" component={RecetaScreen} />
                 <Stack.Screen name="Notas" component={NotaScreen} />
                 <Stack.Screen name="Estudios" component={EstudiosScreen} />
                 <Stack.Screen name="Citas" component={CitasScreen} />
                 <Stack.Screen name="Informacion" component={InformacionScreen} />
                 <Stack.Screen name="Listanotas" component={ListanotasScreen} />
                 <Stack.Screen name="Listaestudios" component={ListaestudiosScreen} />
                 <Stack.Screen name="Listareceta" component={ListarecetaScreen} />
                 <Stack.Screen name="CCalendario" component={Citascalendario} />

             </Stack.Navigator>
         </NavigationContainer>


  );
}

  