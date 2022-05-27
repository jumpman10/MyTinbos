import React from "react";
import { Box, NativeBaseProvider, View } from "native-base";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../Home/Componentes/Navbar";
import Footer from "../Home/Componentes/Footer";
import Sense from "./Componentes/Sense";
import Predator from "./Componentes/Predator";
import PredatorMutator from "./Componentes/PredatorMutator";




const Adidas = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
      <Navbar/>
      <ScrollView>
      <Box alignItems="center">
          <Sense/>
          <Predator/>
          <PredatorMutator/>
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
      <Adidas/>
    </NativeBaseProvider>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 16,
    backgroundColor: "#114F5A",
  },
});