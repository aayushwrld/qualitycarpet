import { Flex, Text } from "@chakra-ui/react";

export default function Ques(props: { question: string }) {
  return (
    <Flex>
      <Text fontWeight={"600"} fontSize={["1.8vh", "2vh", "1.2vw"]}>
        {props.question}
      </Text>
    </Flex>
  );
}
