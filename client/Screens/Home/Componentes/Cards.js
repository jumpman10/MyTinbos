import React from "react";
import { Box, Heading, AspectRatio,Text,Image, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";



const Cards = () => {
  const navigation = useNavigation();
  return (
    <Box alignItems="center">

    <TouchableOpacity onPress={() => navigation.navigate("Nike")}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
      bg= "#114F5A" style={styles.move}>
        <Box>
          <AspectRatio w="100%"  ratio={16 / 9}>
            <Image 
            source={require('./assetsLogos/nikelogos.png')}
            width={320}
            height={200}
            alt="image" />
          </AspectRatio>
          <Center bg="#C49450" position="absolute" bottom="0" px="3" py="1.5">
            NIKE
          </Center>
        </Box>
      </Box>
    </TouchableOpacity>
    
    
    <TouchableOpacity onPress={() => navigation.navigate("Adidas")}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
      bg= "#114F5A" style={styles.move}>
        <Box>
          <AspectRatio w="100%"  ratio={16 / 9}>
            <Image 
            source={require('./assetsLogos/adidaslogo.png')}
            width={320}
            height={200}
            alt="image" />
          </AspectRatio>
          <Center bg="#C49450" position="absolute" bottom="0" px="3" py="1.5">
            ADIDAS
          </Center>
        </Box>
      </Box>
    </TouchableOpacity>
    
    
    <TouchableOpacity onPress={() => navigation.navigate("Puma")}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
      bg= "#114F5A" style={styles.move}>
        <Box>
          <AspectRatio w="100%"  ratio={16 / 9}>
            <Image 
            source={require('./assetsLogos/pumalogo.png')}
            width={320}
            height={200}
            alt="image" />
          </AspectRatio>
          <Center bg="#C49450" position="absolute" bottom="0" px="3" py="1.5">
            PUMA
          </Center>
        </Box>
      </Box>
    </TouchableOpacity>
  </Box>
  
  );
};

    export default Cards



    const styles = StyleSheet.create({
        move:{
          marginTop:20
        }
      });
      