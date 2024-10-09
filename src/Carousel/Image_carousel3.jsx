import React from "react";
import Slider from "react-slick";
import {
  Box,
  Image,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";


const ImageCarousel3 = () => {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: useBreakpointValue({ base: 1, md: 3, lg: 4 }),
    slidesToScroll: 1,
  };

  const images = [
    {
      src: "https://static.thcdn.com/images/small/webp/widgets/121-us/11/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-14T160301.569-200311.png",
      link: "/SKINCEUTICALS",
      name: "SKINCEUTICALS",
    },
    {
      src: "https://static.thcdn.com/images/small/webp/widgets/121-us/29/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T100843.816-140929.png",
      link: "/BEST OF DERMSTOREKITS",
      name: "BEST OF DERMSTOREKITS",
    },
    {
      src: "https://static.thcdn.com/images/small/webp/widgets/121-us/55/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T103540.064-143555.png",
      link: "/SKINMEDICA",
      name: "SKINMEDICA",
    },
    {
      src: "https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T103145.078-143153.png",
      link: "/AUTO-REPLENISHMENT",
      name: "AUTO-REPLENISHMENT",
    },
    {
      src: "https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T105549.218-145553.png",
      link: "/REVISION SKINCARE",
      name: "REVISION SKINCARE",
    },
  ];

  return (
    <Box my={4} textAlign="center" mt={20}>
      {/* Image before the heading */}
      <Image
        src="https://static.thcdn.com/images/large/webp/widgets/121-us/07/original-rewards.desktop-112407.png"
        mb={4}
        width="100%"
        height="auto"
        objectFit="cover"
      />

      <Heading as="p" size="lg" mb={4}>
        Dermstore welcomes you with 15% off. code: WELCOME 15
      </Heading>

      <Slider {...settings}>
        {images.map((item, index) => (
          <Box key={index} mx={4} textAlign="center" position="relative">
            <Button
              position="absolute"
              top="80%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex={1}
             
              bg="gray.700"
              color="white"
              borderRadius="0"
              _hover={{ bg: "skyblue", color: "black" }}
            >
              {item.name}
            </Button>

            <Box overflow="hidden" boxSize="250px" mx="auto" mt={4}>
              <Image
                src={item.src}
                alt={`Slide ${index}`}
                width="100%"
                height="100%"
                objectFit="cover"
                cursor="pointer"
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel3;