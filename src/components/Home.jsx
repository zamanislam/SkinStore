import { Flex,Text,Box } from '@chakra-ui/react';
  
import { ImageCarousel } from '../Carousel/Image_carouse1';
import { Circular_Carousel } from '../Carousel/circular_carousel';
import { ImageCarousel2 } from '../Carousel/Image_carousel2';
import ImageCarousel3 from '../Carousel/Image_carousel3';
import ImageCarousel4 from '../Carousel/Image_carousel4';
export const Home=()=>{
    return(
        <>
       
        <Flex justifyContent="center" bg="#2E3337" color="white" p={4} mt={5} mr={2} ml={7}
        _hover={{ bg: "white", color:'black',cursor:"pointer" }}
        >
            <h1>Shop 20% off RevitaLash at Dermstore. Ends 9/28.SHOP NOW</h1>
        </Flex>
        <ImageCarousel/>
        <Circular_Carousel/>
        <ImageCarousel2/>
        <ImageCarousel3/>
        <ImageCarousel4/>
        </>
    )
}