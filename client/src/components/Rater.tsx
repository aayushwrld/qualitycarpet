import { Box, Button } from "@chakra-ui/react";
import { memo, useState } from "react";

export default memo(function Rater({ rating, ratingParam }: any) {
  const [selected, setSelected] = useState();
  const rate = (e: any) => {
    console.log(e.target.innerText);
    setSelected(e.target.innerText);
    rating(ratingParam, parseInt(e.target.innerText));
  };
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
          onClick={(e) => {
            rate(e);
          }}
          size={["xs", "sm", "md"]}
          borderRight={"1px solid black"}
          flex={1}
          backgroundColor={selected == i + 1 ? "" : "transparent"}
          colorScheme="blue"
          color={selected != i + 1 ? "black" : "white"}
          borderRadius={0}
          key={i + 1}
        >
          {i + 1}
        </Button>
      ))}
    </Box>
  );
});
