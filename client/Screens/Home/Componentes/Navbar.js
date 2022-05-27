import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar,View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function Navbar(){
    return(
<View>
<StatusBar bg="#114F5A" barStyle="light-content" />
      <Box safeAreaTop bg="#114F5A" />
      <HStack bg="#114F5A" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="#C49450" />} />
          <Text color="#C49450" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="#C49450" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="#C49450" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="#C49450" />} />
        </HStack>
      </HStack>
</View>
    )
}

export default Navbar
