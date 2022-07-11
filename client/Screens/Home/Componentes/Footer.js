import React from "react";
import { NativeBaseProvider, Box, Text, Icon, HStack, Center, Pressable, View } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


function Footer(){
    const [selected, setSelected] = React.useState(1);
      const navigation = useNavigation();
    function home(){
      setSelected(0)
      navigation.navigate("Home")
    }
    return(
    <NativeBaseProvider>
<Box flex={1} safeAreaTop width="100%" alignSelf="center" >
        <Center flex={1}></Center>
        <HStack bg="#C49450" alignItems="center" safeAreaBottom shadow={1} >
          <Pressable  opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() =>home()}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? "home" : "home-outline"} />} color="#114F5A" size="sm" />
              <Text color="black" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>

</NativeBaseProvider>
    )
}

export default Footer


const styles = StyleSheet.create({
  move:{
    marginTop:20
  }
});