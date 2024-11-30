"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Premium Carpet Collection",
      text: "Explore our exclusive range of premium carpets designed to add comfort and elegance to your home or office.",
      image:
        "https://www.flooringsuperstore.com/media/catalog/product/cache/43942d99e4560257de5108a0f0547660/c/-/c-luna-6724-lifstyle.jpg",
    },
    {
      title: "Customizable Carpet Designs",
      text: "Choose from a variety of patterns, colors, and textures to match your unique style. Tailored to fit any room perfectly.",
      image:
        "https://www.jiomart.com/images/product/original/rvpghylev9/insight-home-furnishing-anti-slip-shaggy-fluffy-fur-rugs-and-carpet-for-living-room-bedroom-beige-3ftx5ft-product-images-orvpghylev9-p598315549-0-202302112139.jpg",
    },
    {
      title: "Durable & Eco-Friendly Carpets",
      text: "Our carpets are crafted for durability and sustainability. Enhance your interiors while caring for the environment.",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"90%"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                align="center"
                textAlign="center"
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  zIndex={1}
                  position="relative"
                >
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    zIndex={-1}
                    background="rgba(255, 255, 255, 0.3)"
                    backdropFilter="blur(5px)"
                    borderRadius="md"
                  />
                  <Box padding="20px">{card.title}</Box>
                </Heading>
                {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color="black"> */}
                {/* {card.text} */}
                {/* </Text> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
