import React from "react";
import {  HamburgerIcon, HStack,Pressable, IconButton, Icon, Text,Menu, Box, StatusBar,View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function Navbar(){
  const navigation = useNavigation();
    return(
<View>
<StatusBar bg="#114F5A" barStyle="light-content" />
      <Box safeAreaTop bg="#114F5A" />
      <HStack bg="#114F5A" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
      <Menu  w="240" h="130"bg="#C49450" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon size="xl"/>
            </Pressable>;
    }}>
        <Menu.Item onPress={() => navigation.navigate("Nike")} >Nike</Menu.Item>
        <Menu.Item onPress={() => navigation.navigate("Adidas")}>Adidas</Menu.Item>
        <Menu.Item onPress={() => navigation.navigate("Puma")} >Puma</Menu.Item>
        
      </Menu>
          <Text color="#C49450" fontSize="22" fontWeight="bold">
            MyTinbos
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="#C49450" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="#C49450" />} />
        </HStack>
      </HStack>
</View>
    )
}

export default Navbar
