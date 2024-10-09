import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    
    fetch(
      "https://skinstore-14d13-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
    )
      .then((response) => response.json())
      .then((data) => {
       
        const currentUser = data && Object.values(data)[0]; 
        setUserData(currentUser);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleLogout = () => {
   
    alert("Logged out!");
    navigate("/"); 
  };

  return (
    <Box p={6} bg="gray.50" minHeight="100vh">
      <Heading as="h1" mb={4}>
        My Account
      </Heading>

      
      <Text fontSize="xl" mb={6}>
        Welcome to SkinStore
      </Text>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem
          bg="white"
          p={5}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
        >
          <Heading as="h2" size="md" mb={2}>
            Your Referrals
          </Heading>
          <Text fontSize="2xl">$0.00</Text>
          <Text>Total Account Credit</Text>
          <Text fontSize="2xl">0</Text>
          <Text>Friends Referred</Text>
          <Button
            mt={4}
            backgroundColor="gray.600"
            color="white"
            _hover={{ backgroundColor: "teal.500" }}
          >
            VIEW DETAILS
          </Button>
        </GridItem>

        <GridItem
          bg="white"
          p={5}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
        >
          <Heading as="h2" size="md" mb={2}>
            My Beauty Profile
          </Heading>
          <Text mb={4}>Tell us about you!</Text>
          <Button
            mt={4}
            backgroundColor="gray.600"
            color="white"
            onClick={() => alert("Edit profile clicked!")}
            _hover={{ backgroundColor: "teal.500" }}
          >
            EDIT
          </Button>
        </GridItem>

        <GridItem
          bg="white"
          p={5}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
        >
          <Heading as="h2" size="md" mb={2}>
            My Wishlist
          </Heading>
          <Text mb={4}>View your favorite products</Text>
          <Button
            mt={4}
            backgroundColor="gray.600"
            color="white"
            onClick={() => alert("View wishlist clicked!")}
            _hover={{ backgroundColor: "teal.500" }}
          >
            VIEW WISHLIST
          </Button>
        </GridItem>
      </Grid>

      <VStack mt={8} spacing={4}>
        <Button
          onClick={handleLogout}
          backgroundColor="gray.600"
          color="white"
          width="full"
          _hover={{ backgroundColor: "teal.500" }}
        >
          LOG OUT
        </Button>
      </VStack>
    </Box>
  );
};