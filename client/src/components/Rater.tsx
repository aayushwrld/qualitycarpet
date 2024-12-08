import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Rater() {
  const [selected, setSelected] = useState<number | null>(null);

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
          borderRight={"1px solid black"}
          flex={1}
          backgroundColor={selected === i + 1 ? "blue.500" : "transparent"}
          color={selected === i + 1 ? "white" : "black"}
          colorScheme="gray"
          borderRadius={0}
          key={i + 1}
          onClick={() => setSelected(i + 1)}
          _hover={{
            backgroundColor: selected === i + 1 ? "blue.500" : "gray.200",
          }}
          _focus={{
            boxShadow: "none",
          }}
        >
          {i + 1}
        </Button>
      ))}
    </Box>
  );
}