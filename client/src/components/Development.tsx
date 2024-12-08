import { Box, Text } from "@chakra-ui/react";

export default function Development() {
  return (
    <Box
    zIndex={1000}
      padding={"1vh"}
      width={"100vw"}
      height={"fit-content"}
      position={"fixed"}
      bottom={"0"}
      backgroundColor={"purple"}
      textAlign={"center"}
    >
      <Text color={"white"}>This page is under development! ⚡</Text>
    </Box>
  );
}
