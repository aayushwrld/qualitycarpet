import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";

// Review Interface
interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  text: string;
  avatar: string;
}

// Dummy Reviews Data
const reviewsData: Review[] = [...Array(12)].map((_, i) => ({
  id: i,
  author: `Reviewer ${i + 1}`,
  rating: Math.round((Math.random() * 4 + 1) * 10) / 10, // Random rating between 1 and 5
  title: `Boost your conversion rate ${i + 1}`,
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate API Call with Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setReviews(reviewsData); // Load reviews data after delay
      setLoading(false); // Stop loading
    }, 2000); // Simulated delay (2 seconds)

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <Container maxW="6xl" py={10}>
      {/* Page Heading */}
      <Flex align="center" justifyContent="center" direction="column" mb={10}>
        <Heading
          fontSize="4xl"
          mb={2}
          fontWeight={"bold"}
          fontFamily={"Work Sans"}
        >
          Reviews
        </Heading>
        <Text fontSize="md" textAlign="center">
          What our customers say
        </Text>
      </Flex>

      {/* Loading Animation */}
      {loading ? (
        <Flex justify="center" align="center" height="50vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
        </Flex>
      ) : (
        <>
          {/* Reviews Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {reviews.map((review) => (
              <Box key={review.id}>
                <ReviewCard
                  author={review.author}
                  rating={review.rating}
                  title={review.title}
                  text={review.text}
                  avatar={review.avatar}
                />
              </Box>
            ))}
          </SimpleGrid>

          {/* Call to Action */}
         
        </>
      )}
       <Box textAlign="center" mt={8}>
            <Box py={10}>
              <Text
                textAlign="center"
                mb={2}
                fontFamily={"Work Sans"}
                fontSize={"2xl"}
                fontWeight={"bold"}
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
    </Container>
  );
}