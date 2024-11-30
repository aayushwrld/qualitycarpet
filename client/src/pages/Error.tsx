import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Flex flex={1} alignItems={"center"} justifyContent={"center"}>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, #4497F7, #3684E7)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you&apos;re looking for does not seem to exist
        </Text>
        <Link to={"/"}>
        <Button
      colorScheme="blue"
      bgGradient="linear(to-r, #4497F7, #3D8EEF, #3684E7)" // Blue gradient
      color="white"
      variant="solid"
    >
      Go Home
    </Button>
        </Link>
      </Box>
    </Flex>
  );
}
