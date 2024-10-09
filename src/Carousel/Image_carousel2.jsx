import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

export const ImageCarousel2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  const images = [
    "https://static.thcdn.com/images/large/webp/widgets/121-us/54/original-HP-Disruptor-DS-1640x244_%281%29-135354.jpg",
    "https://static.thcdn.com/images/large/webp/widgets/121-us/19/original-HP-Disruptor-1644x244-Shop_SkinStore-181719.jpg",
    "https://static.thcdn.com/images/large/webp/widgets/121-us/31/original-HP-Disruptor-Skinstore-1644x244-Shop-140931.png",
  ];

  return (
    <Box maxW="1500px" mx="auto" my={4} mt={20} ml={5}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              width="100%"
              height="200px"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

