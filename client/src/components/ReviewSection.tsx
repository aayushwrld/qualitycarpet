"use client";

import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import Checkatrade from "../assets/checkatrade.png";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const reviews = [
  {
    id: 1,
    rating: 4.5,
    title: "Had two bedrooms, hallway and living room fitted with oak laminate",
    text: "Nav had great communication, gave very good advice in a confident but non pushy way which meant I got way better layout than I would have by myself. The laminate choices were extensive and I was very happy with the one I chose. Clear communication throughout from Nav. I opted for 10% wastage which wasn't needed and he laid my cupboard free of charge without asking. Top bloke, total professional very courteous 10/10.",
    avatar: "https://miamistonesource.com/wp-content/uploads/2018/05/no-avatar-25359d55aa3c93ab3466622fd2ce712d1.jpg",
  },
  {
    id: 2,
    rating: 5,
    title: "Carpet supplied and fitted on stairs and landing",
    text: "I had a carpet supplied and fitted on my stairs and landing, and I couldn’t be more impressed with the service and quality. The carpet itself looks stunning, with a flawless finish that has completely transformed the space. The fitters were punctual, professional, and incredibly meticulous, ensuring every detail was perfect. They worked efficiently, leaving no mess behind. Overall, an exceptional experience from start to finish—I would highly recommend this company to anyone.",
    avatar: "https://miamistonesource.com/wp-content/uploads/2018/05/no-avatar-25359d55aa3c93ab3466622fd2ce712d1.jpg",
  },
  {
    id: 3,
    rating: 5,
    title: "Entire House Carpet Fitting",
    text: "I couldn’t be happier with the service provided by Monty. He installed carpet throughout my entire house in just one day, and the results are stunning. His speed, efficiency, and attention to detail were exceptional. What stood out was his humble and polite attitude, plus he took care of all the old carpet and left my home spotless. I’ll be using his services for all my future flooring needs and have already recommended him to friends and family. If you’re looking for reliable, top-quality work, Quality Carpet & Flooring is the one to call.",
    avatar: "https://miamistonesource.com/wp-content/uploads/2018/05/no-avatar-25359d55aa3c93ab3466622fd2ce712d1.jpg",
  },
];

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "2px" }}
                color="teal.500"
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "2px" }} />;
          }
          return (
            <BsStar key={i} style={{ marginLeft: "2px" }} color="gray.300" />
          );
        })}
    </Box>
  );
}

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
            rating={review.rating}
            title={review.title}
            text={review.text}
            avatar={review.avatar}
          />
        ))}
      </Flex>

      {/* Navigation Button */}
      <Box
        textAlign="center"
        mt={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* Image */}
        <Image src={Checkatrade} alt="Checkatrade" objectFit="cover" mb={4} onClick={() =>
              window.open(
                "https://www.checkatrade.com/give-feedback/trades/qualitycarpetandflooringltd877181",
                "_blank"
              )
            } cursor='pointer'/>

        {/* Rating Section */}
        <Box>
          <Rating rating={4.5} />
          <Text fontSize="lg" mt={2} fontWeight="bold">
            9.65 Rating
          </Text>
          <Text fontSize="sm" color="gray.800">
            185+ Reviews
          </Text>
        </Box>

        {/* Call to Action */}
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
            colorScheme="yellow"
            bgGradient="linear(to-r, yellow.400, yellow.500, yellow.600)"
            color="white"
            variant="solid"
            onClick={() =>
              window.open(
                "https://www.checkatrade.com/give-feedback/trades/qualitycarpetandflooringltd877181",
                "_blank"
              )
            }
          >
            Review Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
