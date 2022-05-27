import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar,View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Cards from "./Componentes/Cards";

function Home(){
    return(
      <>
      <SafeAreaView style={styles.container}>
      <Navbar/>
      <ScrollView>
      <Cards/>
      </ScrollView>
      </SafeAreaView>
      <View style={{ height: "8%", width: "100%" }} flex={1} >
        <Footer />
      </View>
      </>  
      
    )
}

export default () => {
    return (
      <NativeBaseProvider>
        <Home/>
      </NativeBaseProvider>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 16,
      backgroundColor: "#114F5A",
    },
  });
  