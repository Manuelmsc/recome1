import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../views/HomeScreen";
import RecetaScreen from "../views/RecetaScreen";
import NotaScreen from "../views/NotaScreen";
import EstudiosScreen from "../views/EstudiosScreen";

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-outline" : "home";
            } else if (route.name === "Receta") {
              iconName = focused ? "people-outline" : "people";
            } else if (route.name === "Notas") {
              iconName = focused ? "notes-medical-outline" : "notes-medical";
            } else if (route.name === "Estudios") {
              iconName = focused ? "book-outline" : "book";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Receta" component={RecetaScreen} />
        <Tab.Screen name="Notas" component={NotaScreen} />
        <Tab.Screen name="Estudios" component={EstudiosScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

  