import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface TwoButtonsProps {
  exportData: (value: boolean) => void;
}

export default function TwoButtons({ exportData }: TwoButtonsProps) {
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
        >
          Yes
        </Button>
        <Button
          onClick={clickNo}
          width={"50%"}
          colorScheme="blue"
          backgroundColor={!isActive ? "" : "grey"}
        >
          No
        </Button>
      </ButtonGroup>
    </Flex>
  );
}