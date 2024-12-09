import { InfoIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

export default function RatingText({ rating }: { rating: number }) {
  const ratingText = (rating: number) => {
    if (rating == 1) {
      return "Terrible";
    } else if (rating == 2) {
      return "Very Poor";
    } else if (rating == 3) {
      return "Poor";
    } else if (rating == 4) {
      return "Below Expectations";
    } else if (rating == 5) {
      return "Disappointing";
    } else if (rating == 6) {
      return "Acceptable";
    } else if (rating == 7) {
      return "OK";
    } else if (rating == 8) {
      return "Good";
    } else if (rating == 9) {
      return "Very Good";
    } else if (rating == 10) {
      return "Excellent";
    }
  };
  return (
    <Flex display={rating == 0 ? "none" : "flex"} gap={1} alignItems={'center'}>
      <InfoIcon color={'#3182CE'} boxSize={['1vh','1vh','1vw']}  />
      <Text fontSize={["1.5vh", "1.7vh", "1.1vw"]}>{ratingText(rating)}</Text>
    </Flex>
  );
}
