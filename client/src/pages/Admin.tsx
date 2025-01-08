import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import ReviewCard from "../components/ReviewCard";
import Transitions from "./Transitions";

interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  text: string;
  avatar: string;
  isVisible: boolean;
  isLoading: boolean;
}

const initialReviews: Review[] = [...Array(8)].map((_, i) => ({
  id: i,
  author: `Reviewer ${i + 1}`,
  rating: Math.round((Math.random() * 4 + 1) * 10) / 10, // Random rating between 1 and 5
  title: "Boost your conversion rate",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  avatar: "https://i.pravatar.cc/150?img=" + (i + 1),
  isVisible: true,
  isLoading: false,
}));

export default function AdminPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const toast = useToast();

  const toggleVisibility = (id: number) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, isLoading: true } : review
      )
    );

    setTimeout(() => {
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === id
            ? { ...review, isVisible: !review.isVisible, isLoading: false }
            : review
        )
      );

      const updatedReview = reviews.find((review) => review.id === id);
      if (updatedReview) {
        toast({
          title: `Review ${updatedReview.isVisible ? "Hidden" : "Visible"}`,
          description: `The review from ${updatedReview.author} has been ${
            updatedReview.isVisible ? "hidden" : "made visible"
          }.`,
          status: updatedReview.isVisible ? "error" : "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    }, 1500);
  };

  return (
    <Transitions>
      <Container maxW="6xl" mt={10} mb={10}>
        <Heading textAlign="center" mb={6}>
          Admin Panel: Manage Reviews
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {reviews.map((review) => (
            <Center py={2} key={review.id}>
              <Box position="relative">
                <ReviewCard
                  rating={review.rating}
                  title={review.title}
                  text={review.text}
                  avatar={review.avatar}
                />
                <Button
                  mt={4}
                  size="sm"
                  colorScheme={review.isVisible ? "red" : "green"}
                  onClick={() => toggleVisibility(review.id)}
                  left="50%"
                  transform="translateX(-50%)"
                  isDisabled={review.isLoading}
                >
                  {review.isLoading ? (
                    <Spinner size="xs" color="white" />
                  ) : review.isVisible ? (
                    "Hide"
                  ) : (
                    "Show"
                  )}
                </Button>
              </Box>
            </Center>
          ))}
        </SimpleGrid>
      </Container>
    </Transitions>
  );
}
