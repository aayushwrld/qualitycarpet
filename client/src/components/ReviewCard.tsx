import { Avatar, Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

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

interface ReviewCardProps {
    rating: number;
    title: string;
    text: string;
    avatar: string;
  }
  
  export default function ReviewCard({
    rating,
    title,
    text,
    avatar,
  }: ReviewCardProps) {
    return (
      <Box
        maxW="445px"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="xl"
        rounded="md"
        p={6}
        overflow="hidden"
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "2xl",
        }}
      >
        <Stack>
          <Stack direction="row" spacing={4} align="center">
            <Avatar src={avatar} />
          </Stack>
          <Rating rating={rating} />
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="xl"
            fontFamily="body"
          >
            {title}
          </Heading>
          <Text color="gray.500" fontSize="0.9rem">
            {text}
          </Text>
        </Stack>
      </Box>
    );
  }