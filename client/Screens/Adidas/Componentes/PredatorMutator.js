import React from "react";
import { Box, Heading, AspectRatio,Text,Image, Center, HStack, Stack,Button, Modal,FormControl, Input } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";




const  PredatorMutator = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={styles.move} 
    bg= "#114F5A">
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/predatormulator.png')}
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
           PREDATOR MUTATOR 20.3 
          </Heading>
          <Text fontSize="xs" _light={{
          color:"#C49450"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            Adidas
          </Text>
        </Stack>
        <Text fontWeight="400" color="#F7F8FB">
        Tu confianza consume a tus oponentes. Tu visión de juego deja al descubierto sus debilidades. 
        Aprovechá...
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
          source={require('../assetsCards/predatormulator.png')}
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
          PREDATOR MUTATOR 20.3 
          </Heading>
          <Text fontSize="xs" _light={{
          color:"#C49450"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            Adidas
          </Text>
        </Stack>
        <Text fontWeight="400" color="#F7F8FB">
        Tu confianza consume a tus oponentes. Tu visión de juego deja al descubierto sus debilidades. 
        Aprovechá tu ventaja y controlá el rumbo del partido con estos botines para jóvenes 
        Predator Mutator 20.3. El diseño de corte medio sujeta el tobillo mientras desatas tu magia en la cancha.
         Los detalles en relieve en el antepié sin cordones te permiten maximizar tu dominio de la pelota.
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

    export default PredatorMutator

    const styles = StyleSheet.create({
      move:{
        marginTop:20,
        marginBottom:20
      }
    });


