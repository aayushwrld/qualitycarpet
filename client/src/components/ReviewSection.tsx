"use client";

// import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

// Rating Component
interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

function ReviewCard() {
  return (
    <Center py={2} margin={'10px'}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "2xl",
        }}
      >
        <Stack>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <Avatar
              src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>Achim Rolle</Text>
            </Stack>
          </Stack>
          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={4.5} />
          </Flex>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"body"}
          >
            Boost your conversion rate
          </Heading>
          <Text color={"gray.500"} fontSize={"0.9rem"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

// Main Section
export default function ReviewSection() {
  return (
    <Box py={10}>
      {/* Main Title */}
      <Heading textAlign="center" mb={2} fontFamily={"Work Sans"}>
        You're in Good Company
      </Heading>

      {/* Subtitle */}
      <Text textAlign="center" mb={6} fontSize="lg" color="gray.600">
        See What Our Customers Have to Say
      </Text>

      {/* Review Cards */}
      <Flex direction="row" wrap="wrap" justify="center" gap={5} py={6}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Flex>

      {/* Navigation Button */}
      <Box textAlign="center" mt={8}>
        <Link to="/reviews">
          <Button
            colorScheme="blue"
            bgGradient="linear(to-r, blue.300, #3D8EEF, blue.600)"
            color="white"
            variant="solid"
          >
            More Reviews
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
