import { Flex, Text, IconButton, Select,Image, Link } from '@chakra-ui/react';


export const Header = () => {
  return (
    <Flex justify="flex-end" align="center" p={0} bg="#F2F2F2">
      <Flex align="center" mr={4}>
       <Image src="https://i.postimg.cc/3NW6cwC8/Screenshot-Capture-2024-09-29-10-21-12.png" alt="image"/>
       <Text>us-USD</Text>
      </Flex>

      <Text mr={5}>Help   </Text>
    </Flex>
  );
};


