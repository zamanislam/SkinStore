import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    IconButton,
    Image,
    Link,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import {
    FaInstagram,
    FaTiktok,
    FaFacebookF,
    FaPinterest,
    FaSnapchat,
    FaTwitter as FaXTwitter,
  } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";
  
  export const Footer = () => {
    const navigate = useNavigate();
  
    return (
      <Box bg="gray.100" p={8} mt={10}>
        {/* Sign Up Section */}
        <Flex
          direction="column"
          align="flex-start" // Align text to the left
          borderBottom="1px solid gray"
          pb={6}
          mb={6}
        >
          <Text fontSize="lg" mb={4}>
            Sign up to our email list and receive 20% off your next order
          </Text>
          <Flex justify="space-between" align="center" width="100%">
            <Button
              bg="black"
              color="white"
              _hover={{ bg: "gray.700" }}
              onClick={() => navigate("/signup")}
            >
              SIGN UP
            </Button>
  
            
            <Flex gap={4} ml={6}>
              <IconButton icon={<FaInstagram />} aria-label="Instagram" />
              <IconButton icon={<FaTiktok />} aria-label="TikTok" />
              <IconButton icon={<FaFacebookF />} aria-label="Facebook" />
              <IconButton icon={<FaXTwitter />} aria-label="Twitter" />
              <IconButton icon={<FaPinterest />} aria-label="Pinterest" />
              <IconButton icon={<FaSnapchat />} aria-label="Snapchat" />
            </Flex>
          </Flex>
        </Flex>
  
       
        <SimpleGrid columns={[2, 4]} spacing={6} mb={6}>
          <Box>
            <Heading size="sm" mb={4}>
              Help & Information
            </Heading>
            <Link href="#">Delivery Information</Link>
            <br />
            <Link href="#">Returns & Refunds</Link>
            <br />
            <Link href="#">Help Center</Link>
            <br />
            <Link href="#">Track My Order</Link>
            <br />
            <Link href="#">Accessibility</Link>
            <br />
            <Link href="#">Cookie Settings</Link>
          </Box>
  
          <Box>
            <Heading size="sm" mb={4}>
              About SkinStore
            </Heading>
            <Link href="#">Brand Directory</Link>
            <br />
            <Link href="#">Coupon Codes</Link>
            <br />
            <Link href="#">Refer a Friend</Link>
            <br />
            <Link href="#">Join SkinStore Experts</Link>
          </Box>
  
          <Box>
            <Heading size="sm" mb={4}>
              Legal
            </Heading>
            <Link href="#">Privacy Policy</Link>
            <br />
            <Link href="#">Terms & Conditions</Link>
            <br />
            <Link href="#">Modern Slavery Statement</Link>
          </Box>
  
          <Box>
            <Heading size="sm" mb={4}>
              How to Contact Us
            </Heading>
            <Link href="#">Free Beauty Consultations</Link>
          </Box>
        </SimpleGrid>
  
        <Divider />
  
      </Box>
    );
  };