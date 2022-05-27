import React from "react";
import { Box, Heading, AspectRatio,Text,Image, Center, HStack, Stack,Button, Modal,FormControl, Input } from "native-base";
import { StyleSheet } from "react-native";
import { useState } from "react";


const MercurialVapor = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" bg= "#114F5A" 
    style={styles.move}>
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/MercurialVapor14EliteFG2.png')}
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
          MERCURIAL VAPOR 14 ELITE
          </Heading>
          <Text fontSize="xs" _light={{
          color:"#C49450"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            Nike
          </Text>
        </Stack>
        <Text fontWeight="400" color="#F7F8FB">
        Descubrí el prototipo de velocidad con los Nike Mercurial Vapor 14 Elite FG. El estilo Color Block en
los laterales y el antepié...
        </Text>
        <Button onPress={() => setShowModal(true)} bg="#C49450">Ver Mas</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='xl' >
        <Modal.Content bg="#C49450">
          <Modal.CloseButton color='white' />
          <Modal.Body>
          <Box  rounded="lg" overflow="hidden"  bg= "#114F5A">
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/MercurialVapor14EliteFG2.png')}
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
          MERCURIAL VAPOR 14 ELITE
          </Heading>
          <Text fontSize="xs" _light={{
          color:"#C49450"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            Nike
          </Text>
        </Stack>
        <Text fontWeight="400" color="#F7F8FB">
        Descubrí el prototipo de velocidad con los Nike Mercurial Vapor 14 Elite FG. El estilo Color Block en
los laterales y el antepié realza las zonas clave para regatear, pasar y patear con precisión. Además, la
textura adherente de la parte superior te permite tener el partido bajo control.
La parte superior Flyknit es ligera, transpirable y se estira con el pie para ofrecer un ajuste personalizable.
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

    export default MercurialVapor


    const styles = StyleSheet.create({
      move:{
        marginTop:20
      }
    });