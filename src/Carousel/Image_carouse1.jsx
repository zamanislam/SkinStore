import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

export const ImageCarousel = () => {
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
    "https://static.thcdn.com/images/large/webp/widgets/121-us/59/original-HP_Mobile-192459.png",
    "https://static.thcdn.com/images/large/webp/widgets/121-us/27/original-SeptBAU_SkinMedica_Skinstore_HPbanner_770x380-155227.png",
    "https://static.thcdn.com/images/large/webp/widgets/121-us/20/original-SkinC-HAIHP-Hero-Tablet-770x380-SkinStore-211220.jpg",
  ];

  return (
    <Box maxW="1400px" mx="auto" my={4} pl={5}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              width="100%"
              height="500px"
             
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

