import React from "react";
import { Box, Heading, AspectRatio,Text,Image, Center, HStack, Stack,Button, Modal,FormControl, Input } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";


const Predator = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={styles.move} 
    bg= "#114F5A">
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/predator.png')}
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
          PREDATOR EDGE.2
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
        Amague. Potencia. Control. Cuando tenés ventaja, la cancha está 
        llena de posibilidades. Descubrí ...
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
          source={require('../assetsCards/predator.png')}
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
          PREDATOR EDGE.2
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
        Amague. Potencia. Control. Cuando tenés ventaja, la cancha está 
        llena de posibilidades. Descubrí el deporte rey desde un nuevo 
        ángulo con los adidas Predator. Estos botines de fútbol incorporan 
        un exterior Zone Skin con secciones acanaladas discretas que permiten
        diferentes tipos de contacto con la pelota. El cuello elástico te
        permite moverte con total libertad y la llamativa suela le muestra al terreno firme quién manda.
        Hechos parcialmente con contenido reciclado generado a partir de desechos
         de producción, tales como, recortes de tela y los desechos domésticos 
         postconsumo, para evitar un mayor impacto ambiental al producir contenido virgen.
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

    export default Predator



    const styles = StyleSheet.create({
      move:{
        marginTop:20
      }
    });