import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Stack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     
      const response = await fetch(
        `https://skinstore-14d13-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`
      );

      const data = await response.json();
      const user = Object.values(data).find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log("Login successful:", user);
        alert("Login successful!");

        
        navigate("/account"); 

        
        setEmail("");
        setPassword("");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <Box
        bg="white"
        p="10"
        boxShadow="md"
        borderRadius="md"
        w="450px"
        mr="5"
        h="500px"
      >
        <Heading as="h2" size="md" mb="4">
          Existing Customers
        </Heading>
        <form onSubmit={handleLogin}>
          <FormControl mb="4">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Link color="orange.400" fontSize="sm" mb="4" display="block">
            FORGOT YOUR PASSWORD?
          </Link>
          <Button
            type="submit"
            backgroundColor="#2E3337"
            color="white"
            w="full"
            mb="6"
            _hover={{ bg: "skyblue", color: "black" }}
          >
            SIGN IN
          </Button>
        </form>

        <Text textAlign="center" mb="4">
          Or, Continue with
        </Text>
        <HStack spacing="4">
          <Button colorScheme="facebook" w="full">
            Facebook
          </Button>
          <Button colorScheme="red" w="full">
            Google
          </Button>
        </HStack>
      </Box>

      {/* New Customers Section */}
      <Box bg="white" p="6" mt="0" boxShadow="md" borderRadius="md" w="400px">
        <Heading as="h2" size="md" mb="4">
          New Customers
        </Heading>
        <Button
          backgroundColor="#2E3337"
          color="white"
          w="full"
          _hover={{ bg: "skyblue", color: "black" }}
          onClick={() => navigate("/signup")} 
        >
          CONTINUE
        </Button>
      </Box>
    </Box>
  );
};