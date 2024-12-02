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
import carousel12 from "../assets/carousel1.jpeg";
import carousel2 from "../assets/carousel2.jpeg";
import carousel3 from "../assets/carousel3.jpeg";
import carousel4 from "../assets/carousel4.jpeg";
import carousel5 from "../assets/carousel5.jpeg";

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
      image: carousel12,
    },
    {
      title: "Customizable Carpet Designs",
      text: "Choose from a variety of patterns, colors, and textures to match your unique style. Tailored to fit any room perfectly.",
      image: carousel2,
    },
    {
      title: "Durable & Eco-Friendly Carpets",
      text: "Our carpets are crafted for durability and sustainability. Enhance your interiors while caring for the environment.",
      image: carousel3,
    },
    {
      title: "Luxurious Handwoven Carpets",
      text: "Experience the craftsmanship of handwoven carpets, adding a touch of luxury and tradition to your living space.",
      image: carousel4,
    },
    {
      title: "Soft & Cozy Rugs for Your Home",
      text: "Step onto softness with our cozy rugs, designed for comfort and style in any room of your home.",
      image: carousel5,
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
                    backdropFilter="blur(8px)"
                    borderRadius="md"
                    _after={{
                      content: '""',
                      position: "absolute",
                      top: "-10px",
                      left: "-10px",
                      right: "-10px",
                      bottom: "-10px",
                      zIndex: -2,
                      background: "inherit",
                      filter: "blur(10px)",
                      borderRadius: "inherit",
                    }}
                  />
                  <Box padding="20px">{card.title}</Box>
                </Heading>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
