import { Box, Heading, Text } from "@chakra-ui/react";

export const AuthNavbar = () => {
  return (
    <Box
      w="100%"
      p={4}
      bg="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
    >
      <Box textAlign="center">
        <Heading as="h1" size="lg" fontWeight="bold">
          SkinStore
        </Heading>
        <Text fontSize="10px" color="gray.600" mt={-1}>
          part of the LOOKFANTASTIC group
        </Text>
      </Box>
    </Box>
  );
};