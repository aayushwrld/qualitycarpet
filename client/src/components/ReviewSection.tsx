"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";

// Sample Review Data
const reviews = [
  {
    id: 1,
    author: "John Doe",
    rating: 4.5,
    title: "Fantastic Service!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci purus.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    author: "Jane Smith",
    rating: 5,
    title: "Highly Recommend!",
    text: "Vestibulum et ligula in nunc bibendum fringilla a eu lectus.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    author: "Alice Johnson",
    rating: 4,
    title: "Great Experience!",
    text: "Quisque facilisis dapibus elit, non tincidunt nisl varius et.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

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
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            author={review.author}
            rating={review.rating}
            title={review.title}
            text={review.text}
            avatar={review.avatar}
          />
        ))}
      </Flex>

      {/* Navigation Button */}
      <Box textAlign="center" mt={8}>
        <Button
          as={Link}
          to="/reviews"
          colorScheme="blue"
          bgGradient="linear(to-r, blue.300, #3D8EEF, blue.600)"
          color="white"
          variant="solid"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          More Reviews
        </Button>

        <Box py={10}>
          <Text
            textAlign="center"
            mb={2}
            fontFamily={"Work Sans"}
            fontSize={"2xl"}
            fontWeight={'bold'}
          >
            Had a service done from us? Review us today.
          </Text>
          <Button
            as={Link}
            to="/review"
            colorScheme="yellow"
            bgGradient="linear(to-r, yellow.400, yellow.500, yellow.600)"
            color="white"
            variant="solid"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Review Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}