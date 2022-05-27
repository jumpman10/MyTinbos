import React from "react";
import { NativeBaseProvider, Text, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./Screens/Home/Home";
import Nike from "./Screens/Nike/Nike";
import Adidas from "./Screens/Adidas/Adidas";
import Puma from "./Screens/Puma/Puma";



function App() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Nike" component={Nike}/>
    <Stack.Screen name="Adidas" component={Adidas}/>
    <Stack.Screen name="Puma" component={Puma}/>
    </Stack.Navigator>
  )
}

    export default () => {
        return (
          <NativeBaseProvider>
              <SafeAreaProvider>
                <NavigationContainer>
                  <App/>
                </NavigationContainer>
              </SafeAreaProvider>
          </NativeBaseProvider>
        );
    };
    