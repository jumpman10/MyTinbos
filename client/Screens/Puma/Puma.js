import React from "react";
import { Box, NativeBaseProvider, View } from "native-base";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../Home/Componentes/Navbar";
import Footer from "../Home/Componentes/Footer";
import FutureZ from "./Componentes/FutureZ";
import Future from "./Componentes/Future";
import Ultra from "./Componentes/Ultra";




const Puma = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
      <Navbar/>
      <ScrollView>
      <Box alignItems="center">
        <FutureZ/>
        <Future/>
        <Ultra/>
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
      <Puma/>
    </NativeBaseProvider>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 16,
    backgroundColor: "#114F5A",
  },
});