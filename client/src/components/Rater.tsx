import { Box, Button } from "@chakra-ui/react";

export default function Rater() {
  return (
    <Box
      overflow={"hidden"}
      border={"0.8px solid black"}
      borderRight={"0"}
      borderRadius={"7px"}
      display={"flex"}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Button
          size={["xs", "sm", "md"]}
          borderRight={"1px solid black"}
          flex={1}
          backgroundColor={"transparent"}
          colorScheme="gray"
          borderRadius={0}
          key={i}
        >
          {i + 1}
        </Button>
      ))}
    </Box>
  );
}
