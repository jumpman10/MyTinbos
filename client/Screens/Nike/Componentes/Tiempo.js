import React from "react";
import { Box, Heading, AspectRatio,Text,Image, Center, HStack, Stack,Button, Modal,FormControl, Input } from "native-base";
import { useState } from "react";
import { StyleSheet, View, Dimensions,Animated} from "react-native";
import {
  PinchGestureHandler,PanGestureHandler,TouchableOpacity
  } from "react-native-gesture-handler";
  
  
const {width} = Dimensions.get("window");

const Tiempo = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const[dialog, setDialog] =React.useState(false);

   

  const scale= React.useRef(new Animated.Value(1)).current

 const handlePitch = Animated.event(
      [{
          nativeEvent:{scale}
      }],
      {useNativeDriver: false}
  )

  return (
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" style={styles.move} 
    bg= "#114F5A"
    >
      <Box>
      <TouchableOpacity onPress={() => setDialog(true)}>
        <View>
        <AspectRatio w='100%' ratio={16 / 9}>
          <Image
            source={require('../assetsCards/niketiempolegend9elitefg.png')}
            width={320}
            height={200}
            alt="image" 
          />
          </AspectRatio>
        </View>
        </TouchableOpacity>
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
          source={require('../assetsCards/niketiempolegend9elitefg.png')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
      </Box>
      <Box>
    
        <AspectRatio w="280" h="280" ratio={16 / 9} >
          <Image 
          source={require('../assetsCards/tempolegendelite2.jpg')}
          width={280}
          height={280}
          alt="image" />
        </AspectRatio>
        
      </Box>
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/tempolegenelite1.jpg')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
      </Box>
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/tempolegendelite3.jpg')}
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
          NIKE TIEMPO LEGEND 9 ELITE 
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
        Los Nike Tiempo Legend 9 Elite FG, uno de nuestros Tiempos más livianos hasta ahora,
         te permiten ir para adelante...
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
          source={require('../assetsCards/niketiempolegend9elitefg.png')}
          width={320}
          height={200}
          alt="image" />
        </AspectRatio>
        <Button bg="#C49450" _dark={{
        bg: "violet.400"
      }} _text={{
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
          NIKE TIEMPO LEGEND 9 ELITE 
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
        Los Nike Tiempo Legend 9 Elite FG, uno de nuestros Tiempos más livianos hasta ahora,
         te permiten ir para adelante con un diseño de perfil bajo que se reinventa para ir 
         al ataque. La parte superior tiene texturas en relieve con suaves almohadillas de 
         espuma que brindan precisión para los amagues, pases y tiros,
         mientras que los tapones en la base aportan tracción para los cortes rápidos y 
         las frenadas repentinas.
        </Text>
      </Stack>
    </Box>
          </Modal.Body>
          <Modal.Footer bg="#C49450">
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </Stack>

      <View >
      <Modal  isOpen={dialog} onClose={() => setDialog(false)} size='full' style={[styles.container]} animationType="slide">
      
          <Modal.CloseButton color='white' />
          <Modal.Content maxWidth="100%" maxH="100%">
          <Modal.Body padding="0" style={[styles.container]}>
          <View>
            <PinchGestureHandler onGestureEvent={handlePitch} >
             <Animated.Image
            source={require('../assetsCards/niketiempolegend9elitefg.png')}
            style={[{width:width, transform:[{scale}]} ,styles.img]}
            alt="image" 
            />
           </PinchGestureHandler>
          </View>

     
     
          </Modal.Body>
          </Modal.Content>
        
      </Modal>
      </View>
    </Box>
  
  
  );
};

    export default Tiempo


    const styles = StyleSheet.create({
      move:{
        marginTop:20
      }
    });