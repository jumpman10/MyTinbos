import React from "react";
import { Box, Heading, AspectRatio,Text,Image, Center, HStack, Stack,Button, Modal,FormControl, Input } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";



const TiempoPro = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  return (
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={styles.move} 
   bg = "#114F5A"
 >
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/tiempopro.png')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
        <Button bg="#C49450"  _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} borderRadius="0" position="absolute" bottom="0" px="3" py="1.5" onPress={() => setShowPhotos(true)}>
           PHOTOS 
        </Button>
        
      </Box>
      <Modal isOpen={showPhotos} onClose={() => setShowPhotos(false)} size='full' >
        <Modal.Content bg="#C49450">
          <Modal.CloseButton color='white' />
          <Modal.Body>
          <Box  rounded="lg" overflow="hidden"  bg= "#114F5A">
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/tiempopro.png')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
      </Box>
      <Box>
    
        <AspectRatio w="280" h="280" ratio={16 / 9} >
          <Image 
          source={require('../assetsCards/tiempo91.jpg')}
          width={280}
          height={280}
          alt="image" />
        </AspectRatio>
        
      </Box>
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/tiempo92.jpg')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
      </Box>
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/tiempo93.jpg')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
      </Box>
    </Box>
          </Modal.Body>
          <Modal.Footer bg="#C49450">
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Stack p="4" space={3} bg="#114F5A">
        <Stack space={2}>
          <Heading size="md" ml="-1" color="#F7F8FB">
          TIEMPO LLEGEND 9 PRO 
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
        Los Nike Tiempo Legend 9 Pro FG, uno de nuestros Tiempo más rápidos hasta la fecha, permiten atacar...
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
          source={require('../assetsCards/tiempopro.png')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
        <Button bg="#C49450"  _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} borderRadius="0" position="absolute" bottom="0" px="3" py="1.5" onPress={() => setShowPhotos(true)}>
           PHOTOS 
        </Button>
      </Box>
      <Stack p="4" space={3} bg="#114F5A">
        <Stack space={2}>
          <Heading size="md" ml="-1" color="#F7F8FB">
          TIEMPO LLEGEND 9 PRO 
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
        Los Nike Tiempo Legend 9 Pro FG, uno de nuestros Tiempo más rápidos hasta la fecha, permiten atacar
con un diseño de perfil bajo renovado. La parte superior cuenta con texturas en relieve y almohadillas
de espuma suave para regatear, pasar y patear al arco con precisión, al tiempo que los tapones de la
parte inferior ofrecen tracción para realizar recortes rápidos y frenadas bruscas.
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

    export default TiempoPro



    const styles = StyleSheet.create({
      move:{
        marginTop:20,
        marginBottom:20
      }
    });