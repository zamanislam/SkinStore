import React from "react";
import Slider from "react-slick";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "The Ordinary Lactic Acid 5% + HA 2% Superficial Peeling Formulation 30ml",
    price: "$8.10",
    discount: " SS15",
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11363397-7454901836926420.jpg",
    rating: 4.7,
    reviews: 3,
  },
  {
    name: "The Ordinary  Serum 0.1% 30ml formulated in extreme high concentration of EUK 134",
    price: "$11.50",
    discount: " SS15",
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11638499-1495023395939780.jpg",
    rating: 3.0,
    reviews: 2,
  },
  {
    name: "The Ordinary Hyaluronic Acid 2% + B5 Hydration Support 30ml",
    price: "$6.80",
    discount: " SS15",
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11363397-7454901836926420.jpg",
    rating: 4.5,
    reviews: 6,
  },
  {
    name: "The Ordinary Lactic Acid 5% + HA 2% Superficial Peeling Formulation 30ml",
    price: "$8.10",
    discount: " SS15",
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11363397-7454901836926420.jpg",
    rating: 4.7,
    reviews: 3,
  },
  {
    name: "The Ordinary  Serum 0.1% 30ml  formulated with an extremely high concentration of EUK 134 ",
    price: "$11.50",
    discount: " SS15",
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11638499-1495023395939780.jpg",
    rating: 3.0,
    reviews: 2,
  },
  {
    name: "The Ordinary Hyaluronic Acid 2% + B5 Hydration Support 30ml",
    price: "$6.80",
    discount: " SS15",
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11363397-7454901836926420.jpg",
    rating: 4.5,
    reviews: 6,
  },
 
];

const ImageCarousel4 = () => {
  const visibleSlides = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: visibleSlides,
    slidesToScroll: 1,
  };

  return (
    <Box maxW="1200px" mx="auto" py={10}>
     
      <Image
        src="https://static.thcdn.com/images/large/webp/widgets/121-us/56/original-original-original-APP_DL_Banners_-_Untitled_Page_%2810%29-024609-035814-040256.png"
        mb={4}
        width="100%"
        height="auto"
        objectFit="cover"
      />

      
      <Heading textAlign="center" mb={5}>
        15% off The Ordinary
      </Heading>

      <Slider {...settings}>
        {products.map((product, index) => (
          <Box key={index} px={3}>
            <VStack spacing={3} textAlign="center">
              
              <Image
                cursor="pointer"
                boxSize="200px"
                objectFit="contain"
                src={product.image}
                alt={product.name}
              />

             
              <Text fontWeight="bold">{product.name}</Text>
              <Text style={{ border: "1px solid brown" }}>
                15% off with code :
                <b style={{ color: "maroon", fontSize: "14px" }}>
                  {product.discount}
                </b>
              </Text>

              <Text>
                {product.rating} ★ ({product.reviews} Reviews)
              </Text>
              <Text>{product.price}</Text>

             
              <Button
                width="200px"
                borderRadius="none"
                bg="gray.600"
                color="white"
                _hover={{ bg: "teal.500", color: "white" }}
              >
                Quick Buy
              </Button>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel4;