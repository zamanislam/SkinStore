import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Button,
  IconButton,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { FaUser, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for API calls

export const Navbar = ({ userName }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLightGray, setIsLightGray] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [suggestions, setSuggestions] = useState([]); // State for suggestions

  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
    setIsLightGray(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsLightGray((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  // Effect to set the body background color
  useEffect(() => {
    document.body.style.backgroundColor = isLightGray ? "#f0f0f0" : "white";
  }, [isLightGray]);

  // Fetch suggestions from Firebase
  useEffect(() => {
    if (searchTerm.length > 0) {
      axios
        .get(
          "https://dermstore-beec4-default-rtdb.asia-southeast1.firebasedatabase.app/Dermstore_Product/Dermstore_Product.json"
        )
        .then((response) => {
          const products = response.data;
          // Filter products by search term
          const filteredSuggestions = Object.values(products).filter(
            (product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
        });
    } else {
      setSuggestions([]); // Clear suggestions when search term is empty
    }
  }, [searchTerm]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle suggestion click
  const handleSuggestionClick = (product) => {
    navigate(`/product/${product.id}`);
    setSearchTerm(""); // Clear search input
    setSuggestions([]); // Clear suggestions
  };

  return (
    <>
      <Box
        bg="white"
        zIndex={2000}
        top={0}
        px={6}
        py={4}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Flex align="center">
          {/* Left side: Hamburger and Search icons */}
          <Flex align="center" gap={4}>
            <IconButton
              icon={<HamburgerIcon />}
              fontSize="24px"
              bg="none"
              aria-label="Menu"
              _hover={{ bg: "none" }}
              onClick={onOpen}
            />

            {/* Search Icon */}
            <IconButton
              icon={<SearchIcon />}
              fontSize="24px"
              bg="none"
              aria-label="Search"
              _hover={{ bg: "none" }}
              onClick={toggleSearch}
            />
          </Flex>

          <Spacer />

          {/* Center: Logo and Text */}
          <Box textAlign="center">
            <Heading as="h1" size="md" fontWeight="bold">
              SkinStore
            </Heading>
            <Text fontSize="sm" color="gray.600" mt={-1}>
              part of the<b>LOOKFANTASTIC</b> group
            </Text>
          </Box>

          <Spacer />

          {/* Right side: User and Cart icons */}
          <Flex align="center" gap={4}>
            {/* User Dropdown */}
            <Box position="relative">
              <IconButton
                icon={<FaUser />}
                fontSize="24px"
                variant="ghost"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <Box
                  position="absolute"
                  top="100%"
                  right={0}
                  bg="white"
                  boxShadow="lg"
                  borderRadius="md"
                  zIndex={1}
                  p={4}
                  mt={1}
                  width="200px"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  {/* Close button */}
                  <IconButton
                    icon={<FaTimes />}
                    aria-label="Close"
                    size="sm"
                    position="absolute"
                    top={2}
                    right={2}
                    onClick={() => setIsDropdownOpen(false)}
                    variant="ghost"
                  />
                  {/* Welcome Message */}
                  <Text mb={2} fontWeight="bold">
                    Welcome {userName}
                  </Text>

                  <Button
                    width="100%"
                    bg="black"
                    color="white"
                    mb={2}
                    _hover={{ bg: "skyblue", color: "black" }}
                    onClick={() => handleNavigation("/login")}
                  >
                    LOGIN
                  </Button>
                  <Button
                    width="100%"
                    bg="white"
                    color="black"
                    border="1px solid"
                    borderColor="black"
                    mb={4}
                    _hover={{ bg: "skyblue", color: "white" }}
                    onClick={() => handleNavigation("/signup")}
                  >
                    REGISTER
                  </Button>

                  <Divider my={2} />

                  <Button
                    width="100%"
                    variant="link"
                    onClick={() => handleNavigation("/wishlist")}
                    _hover={{ textDecoration: "underline", color: "black" }}
                  >
                    Wishlist
                  </Button>
                  <Button
                    width="100%"
                    variant="link"
                    onClick={() => handleNavigation("/orders")}
                    _hover={{ textDecoration: "underline", color: "black" }}
                  >
                    Your Orders
                  </Button>
                  <Button
                    width="100%"
                    variant="link"
                    onClick={() => handleNavigation("/referrals")}
                    _hover={{ textDecoration: "underline", color: "black" }}
                  >
                    Your Referrals
                  </Button>
                </Box>
              )}
            </Box>

            <Box
              as="button"
              fontSize="24px"
              bg="none"
              p={0}
              _hover={{ bg: "none" }}
              position="relative"
            >
              <FaShoppingCart />
              {/* Notification badge for cart items */}
              <Box
                as="span"
                position="absolute"
                top="-2px"
                right="-2px"
                bg="black"
                color="white"
                borderRadius="full"
                width="16px"
                height="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="10px"
              >
                0
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Divider
          orientation="horizontal"
          borderColor={"black"}
          mt={4}
          width={""}
        />

        {isSearchOpen ? (
          <Box mt={4} position="relative">
            <Input
              placeholder="Search for products or brands ..."
              size="lg"
              variant="filled"
              width="100%"
              border="1px solid"
              borderColor="gray.400"
              borderRadius="md"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {suggestions.length > 0 && (
              <List
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                mt={2}
                zIndex={1}
                position="absolute"
                width="100%"
              >
                {suggestions.map((product) => (
                  <ListItem
                    key={product.id}
                    p={2}
                    cursor="pointer"
                    _hover={{ backgroundColor: "gray.100" }}
                    onClick={() => handleSuggestionClick(product)}
                  >
                    {product.title}
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        ) : (
          <Text fontSize="lg" textAlign="center" mt={4}>
            We're evolving. SkinStore is becoming Dermstore, continue your skin
            health journey with the premier skin care authority.
          </Text>
        )}

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Button
                onClick={() => handleNavigation("/Dermstore")}
                width="100%"
                mb={4}
              >
                Dermstore
              </Button>
              <Button
                onClick={() => handleNavigation("/brands")}
                width="100%"
                mb={4}
              >
                Brands
              </Button>
              <Button
                onClick={() => handleNavigation("/skin")}
                width="100%"
                mb={4}
              >
                Skin Care
              </Button>
              <Button width="100%" mb={4}>
                Sunscreen
              </Button>
              <Button width="100%" mb={4}>
                Makeup
              </Button>

              <Button width="100%" mb={4}>
                Hair
              </Button>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};
