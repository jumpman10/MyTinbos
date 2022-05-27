import React from "react";
import { Box, Heading, AspectRatio,Text,Image, Center, HStack, Stack,Button, Modal,FormControl, Input } from "native-base";
import { useState } from "react";

import { StyleSheet } from "react-native";


const FutureZ = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={styles.move} 
    bg= "#114F5A" >
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/futurez1.3.png')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
        <Center bg="#C49450" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3} bg="#114F5A">
        <Stack space={2}>
          <Heading size="md" ml="-1" color="#F7F8FB">
         FUTURE Z 1.3
          </Heading>
          <Text fontSize="xs" _light={{
          color:"#C49450"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            Puma
          </Text>
        </Stack>
        <Text fontWeight="400" color="#F7F8FB">
        Los FUTURE Z son unos Botinesincreíblemente livianos y cómodos diseñados para 
        los jugadores que...
        </Text>
        
        
        
        
        <Button onPress={() => setShowModal(true)} bg="#C49450">Ver Mas</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='xl' >
        <Modal.Content bg="#C49450">
        <Modal.CloseButton />
          <Modal.Body>
          <Box  rounded="lg" overflow="hidden"  bg= "#114F5A">
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/futurez1.3.png')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
        <Center bg="#C49450" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3} bg="#114F5A">
        <Stack space={2}>
          <Heading size="md" ml="-1" color="#F7F8FB">
          FUTURE Z 1.3 
          </Heading>
          <Text fontSize="xs" _light={{
          color:"#C49450"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
           Puma
          </Text>
        </Stack>
        <Text fontWeight="400" color="#F7F8FB">
        Los FUTURE Z son unos Botinesincreíblemente livianos y cómodos diseñados para 
        los jugadores que dominan la cancha con visión y habilidad. 
        Cada zapato cuenta con la tecnología FUZIONFIT+ de segunda generación y 
        se adapta a la forma del pie, garantizando un ajuste óptimo y el equilibrio
        perfecto entre sujeción y flexibilidad con o sin cordones. Las zonas Advanced 
        Creator en el antepié permiten un control y un pase excepcionales de la pelota a
        alta velocidad, mientras que la suela exterior liviana y altamente reactiva con remaches 
        para pasto natural y artificial aporta una tracción superior. Este refinado modelo 
        es un triunfo de la innovación futbolística que incluye un detalle de marca PUMA Llamátivo, 
        una moderna combinación de colores y una silueta elegante. Están listos para la acción.
        </Text>
      </Stack>
    </Box>
          </Modal.Body>
          <Modal.Footer bg="#C49450">
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </Stack>
    </Box>
  
  
  );
};

    export default FutureZ



    const styles = StyleSheet.create({
      move:{
        marginTop:20
      }
    });