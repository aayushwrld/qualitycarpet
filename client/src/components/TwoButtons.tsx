import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function TwoButtons({ exportData }: any) {
  const [isActive, setIsActive] = useState(true);

  const clickYes = () => {
    setIsActive(true);
    if (!isActive) {
      exportData(true);
    }
  };
  const clickNo = () => {
    setIsActive(false);
    if (isActive) {
      exportData(false);
    }
  };

  return (
    <Flex
      width={"100%"}
      padding={"1vh"}
      backgroundColor={"#edebeb"}
      borderRadius={"10px"}
      justifyContent={"center"}
    >
      <ButtonGroup width={"100%"}>
        <Button
          onClick={clickYes}
          width={"50%"}
          colorScheme="blue"
          backgroundColor={isActive ? "" : "grey"}
          size={["xs", "sm", "md"]}
        >
          Yes
        </Button>
        <Button
          onClick={clickNo}
          width={"50%"}
          colorScheme="blue"
          backgroundColor={!isActive ? "" : "grey"}
          size={["xs", "sm", "md"]}
        >
          No
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
