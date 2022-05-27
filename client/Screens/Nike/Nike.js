import React from "react";
import { Box, NativeBaseProvider, View } from "native-base";
import { ScrollView, StyleSheet } from "react-native";
import MercurialVapor from "./Componentes/MercurialVapor";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../Home/Componentes/Navbar";
import Footer from "../Home/Componentes/Footer";
import Tiempo from "./Componentes/Tiempo";
import TiempoPro from "./Componentes/TiempoPro";



const Nike = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
      <Navbar/>
      <ScrollView>
      <Box alignItems="center" >
        <MercurialVapor />
        <Tiempo/>
        <TiempoPro />
      </Box>
      </ScrollView>
      </SafeAreaView>
      <View style={{ height: "8%", width: "100%" }} flex={1}>
        <Footer/>
      </View>
  </>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Nike/>
    </NativeBaseProvider>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 16,
    backgroundColor: "#114F5A",
  },
});