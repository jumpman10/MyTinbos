import React from "react";
import { NativeBaseProvider, Box, Text, Icon, HStack, Center, Pressable, View } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
function Footer(){
    const [selected, setSelected] = React.useState(1);
    return(
    <NativeBaseProvider>
<Box flex={1} safeAreaTop width="100%" alignSelf="center" >
        <Center flex={1}></Center>
        <HStack bg="#C49450" alignItems="center" safeAreaBottom shadow={1} >
          <Pressable  opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? "home" : "home-outline"} />} color="#114F5A" size="sm" />
              <Text color="black" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable  opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="#114F5A" size="sm" />
              <Text color="black" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? "cart" : "cart-outline"} />} color="#114F5A" size="sm" />
              <Text color="black" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable  opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? "account" : "account-outline"} />} color="#114F5A" size="sm" />
              <Text color="black" fontSize="12">
                Account
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