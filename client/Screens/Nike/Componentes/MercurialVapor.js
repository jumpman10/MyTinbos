import React from "react";
import { Box, Heading, AspectRatio,Text,Image,Center,Stack,Button, Modal, Icon,Pressable} from "native-base";
import { StyleSheet, View, Dimensions,Animated} from "react-native";
import { useState, useRef   }  from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  PinchGestureHandler,PanGestureHandler,TouchableOpacity
  } from "react-native-gesture-handler";
  const {width} = Dimensions.get("window");
const MercurialVapor = () => {
  const [selected, setSelected] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const navigation = useNavigation();
  const[photo1, setPhoto1] =React.useState(false);
  const[photo2, setPhoto2] =React.useState(false);
  const[dialog, setDialog] =React.useState(false);
  const scale= React.useRef(new Animated.Value(1)).current

 const handlePitch = Animated.event(
      [{
          nativeEvent:{scale}
      }],
      {useNativeDriver: false}
  )

  return (
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" bg= "#114F5A" 
    style={styles.move}>
      
      <Box>
      <TouchableOpacity onPress={() => setDialog(true)}>
        <View>
        <AspectRatio w='100%' ratio={16 / 9}>
          <Image
            source={require('../assetsCards/MercurialVapor14EliteFG2.png')}
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
      <Pressable py="2" onPress={() => setDialog(true)}>
        <View>
        <AspectRatio w='100%' ratio={16 / 9}>
          <Image
            source={require('../assetsCards/MercurialVapor14EliteFG2.png')}
            width={320}
            height={200}
            alt="image" 
          />
          </AspectRatio>
        </View>
        </Pressable>
      </Box>
      <Box>
        <Pressable py="2" onPress={() => setPhoto1(true)}>
        <View>
        <AspectRatio w="280" h="280" ratio={16 / 9}>
          <Image
            source={require('../assetsCards/mercurialvapor1.jpg')}
            width={280}
          height={280}
            alt="image" 
          />
          </AspectRatio>
        </View>
        </Pressable>
      </Box>
      <Box>
      <Pressable py="2" onPress={() => setPhoto2(true)}>
        <View>
        <AspectRatio w='100%' ratio={16 / 9}>
          <Image
            source={require('../assetsCards/mercurialvapor2.jpg')}
            width={320}
            height={200}
            alt="image" 
          />
          </AspectRatio>
        </View>
        </Pressable>
      </Box>
      <Box>
        <AspectRatio w="100%"  ratio={16 / 9}>
          <Image 
          source={require('../assetsCards/mercurailvapor3.jpg')}
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
        <Pressable opacity={selected === 0 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(0)}>
        <Icon mb="1" as={<MaterialIcons name="favorite" />} color="#F7F8FB" size="xl" />
        </Pressable>
        <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
        <Icon mb="1" as={<MaterialCommunityIcons name="cart" />}
         color="#F7F8FB" size="xl" />
         </Pressable>
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
            source={require('../assetsCards/MercurialVapor14EliteFG2.png')}
            style={[{width:width, transform:[{scale}]} ,styles.img]}
            alt="image" 
            />
           </PinchGestureHandler>
          </View>
          </Modal.Body>
          </Modal.Content>
      </Modal>
      </View>

      <View >
      <Modal  isOpen={photo1} onClose={() => setPhoto1(false)} size='full' style={[styles.container]} animationType="slide">
      
          <Modal.CloseButton color='white' />
          <Modal.Content maxWidth="100%" maxH="100%">
          <Modal.Body padding="0" style={[styles.container]}>
          <View>
            <PinchGestureHandler onGestureEvent={handlePitch} >
             <Animated.Image
            source={require('../assetsCards/mercurialvapor1.jpg')}
            style={[{width:width, transform:[{scale}]} ,styles.img]}
            alt="image" 
            />
           </PinchGestureHandler>
          </View>
          </Modal.Body>
          </Modal.Content>
      </Modal>
      </View>
      <View >
      <Modal  isOpen={photo2} onClose={() => setPhoto2(false)} size='full' style={[styles.container]} animationType="slide">
      
          <Modal.CloseButton color='white' />
          <Modal.Content w="100%" maxH="100%">
          <Modal.Body padding="0" style={[styles.container]}>
          <View>
            <PinchGestureHandler onGestureEvent={handlePitch} >
             <Animated.Image
            source={require('../assetsCards/mercurialvapor2.jpg')}
            style={[{width:width, transform:[{scale}]} ]}
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

    export default MercurialVapor


    const styles = StyleSheet.create({
      move:{
        marginTop:20
      },
      img:{
        justifyContent: "center",
        alignItems: "center",
      },
      container:{
        justifyContent: "center",
        alignItems: "center",
      }
      
    });