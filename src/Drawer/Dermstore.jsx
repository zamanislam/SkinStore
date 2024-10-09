import React, { useState, useEffect } from "react";
import {
  Box, HStack, Link, Icon, Text, Select, VStack, Button, Image, Grid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Divider
} from "@chakra-ui/react";
import { FaShippingFast, FaGift, FaMobileAlt, FaCheckCircle } from "react-icons/fa";
import { Circular_Carousel } from "../Carousel/circular_carousel";
import { Select_sort } from "./Select";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, addToCart } from "../redux/action";
import { useNavigate } from "react-router-dom"; // For navigation

export const Dermstore = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data || []);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate(); // Hook to navigate to cart page

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  const handleQuickBuy = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct)); 
      navigate("/cart");
      onClose(); 
    }
  };

  return (
    <>
      
      <Box bg="#F2F2F2" py={4} px={4}>
        <HStack spacing={8} justify="center">
         
          <HStack>
            <Icon as={FaShippingFast} />
            <Text cursor="pointer" fontSize="sm">
              FREE US Shipping $50+
            </Text>
          </HStack>

          
          <HStack>
            <Icon as={FaGift} />
            <Text cursor="pointer" fontSize="sm">
              Dermstore Rewards
            </Text>
          </HStack>

          
          <HStack>
            <Icon as={FaCheckCircle} />
            <Text cursor="pointer" fontSize="sm">
              Ask an Expert
            </Text>
          </HStack>

          
          <HStack>
            <Icon as={FaMobileAlt} />
            <Text cursor="pointer" fontSize="sm">
              15% off your first App Order
            </Text>
          </HStack>

          
          <HStack>
            <Icon as={FaCheckCircle} />
            <Text cursor="pointer" fontSize="sm">
              Refer a Friend, Get $20
            </Text>
          </HStack>
        </HStack>
      </Box>

      <Box bg="#CCCCCC" p={4}>
        <Text textAlign="center" fontSize="md" cursor="pointer" fontWeight="bold">
          Save with Auto-Replenishment & get Two Free Gifts with any $200+ purchase. SHOP NOW
        </Text>
      </Box>

     
      <Circular_Carousel />

      
      <Select_sort />

      
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {Object.entries(data).map(([id, obj]) => (
          <Box key={id} textAlign="center">
            <Box position="relative" display="inline-block">
              
              <Image
                src={obj.image1}
                alt="Product Image 1"
                className="default-image"
                boxSize="300px"
                objectFit="contain"
                transition="opacity 0.5s ease"
              />

              
              <Image
                src={obj.image2}
                alt="Product Image 2"
                position="absolute"
                top="0"
                left="0"
                boxSize="400px"
                objectFit="contain"
                opacity="0"
                transition="opacity 0.5s ease"
                _hover={{
                  opacity: 1,
                }}
              />
            </Box>

            <VStack mt={4} spacing={2}>
              <Text mt={6} fontWeight="bold" fontSize="lg" textAlign="center">
                {obj.title}
              </Text>
              <Text color="gray.600" fontSize="xl" textAlign="center">
                {obj.price}
              </Text>
              <Text textAlign="center">★★★★★</Text>
              <Text textAlign="center">5131 Reviews</Text>
              <Button
                bg="#222222"
                color="white"
                w="250px"
                borderRadius="none"
                _hover={{
                  bg: "#424143",
                }}
                onClick={() => handleQuickBuy(obj)}
              >
                QUICK BUY
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>

     
      {selectedProduct && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader bg="#CCCCCC">Added to your cart</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Image src={selectedProduct.image1} alt="image" boxSize="240px" />
                <Text fontWeight="bold">{selectedProduct.title}</Text>
                <Text>Quantity: 1</Text>
                <Text fontWeight="bold">${selectedProduct.price}</Text>
                <Divider my={2} colorScheme="red" />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                bg="white"
                onClick={onClose}
                mr={300}
                pl="25px"
                pr="25px"
                borderRadius="none"
                border="2px solid"
                _hover={{
                  bg: "gray.200",
                }}
              >
                Continue Shopping
              </Button>
              <Button
                bg="black"
                color="white"
                onClick={handleAddToCart}
                borderRadius="none"
                _hover={{
                  bg: "#424143",
                }}
              >
                View Cart
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
