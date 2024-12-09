import { memo, useEffect, useState } from "react";
import Ques from "../components/Ques";
import TwoButtons from "../components/TwoButtons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import optionsData from "../assets/options.json";
import logo from "../assets/Logo.png";
import Development from "../components/Development";
import Rater from "../components/Rater";
import RatingText from "../components/RatingText";

export default memo(function Review() {
  const [data, setData] = useState({
    work: true,
    service: "",
    reliability: 0,
    quality: 0,
    tidiness: 0,
    courtesy: 0,
    brief: "",
    review: "",
    date: null,
    postcode: "",
    value: null,
    tradeperson: true,
    contact: {
      firstname: "",
      lastname: "",
      email: "",
      phone: null,
    },
  });

  const yesNoWork = (arg: boolean) => {
    setData({ ...data, work: arg });
  };
  const yesNoTradePerson = (arg: boolean) => {
    setData({ ...data, tradeperson: arg });
  };

  const setRating = (rateParam: string, rating: number) => {
    setData({ ...data, [rateParam]: rating });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Development />
      <Flex
        flex={1}
        flexDirection={"column"}
        marginTop={"4vh"}
        marginBottom={"8vh"}
      >
        <Flex
          gap={"2vw"}
          alignSelf={"center"}
          width={["80%", "80%", "45%"]}
          flexDirection={"column"}
        >
          <Flex gap={"2vh"} alignItems={"center"}>
            <Box
              display={"flex"}
              border={"2px #edebeb solid"}
              borderRadius={"10px"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"7vh"}
              width={"7vh"}
              backgroundColor={"white"}
            >
              <Image width={"10vh"} src={logo} />
            </Box>
            <Flex direction={"column"}>
              <Heading fontSize={["5vw", "4vw", "1.6vw"]}>
                Quality Carpet & Flooring
              </Heading>
              <Text fontSize={["1.3vh", "1.5vh", "2vh"]}>Based in London</Text>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"Was any work carried out?"} />
            <TwoButtons exportData={yesNoWork} />
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"What services did you require?"} />
            <Select
              size={["xs", "sm", "md"]}
              onChange={(e) => {
                setData({ ...data, service: e.target.value });
              }}
              borderColor={"black"}
              placeholder="Select Option"
            >
              {optionsData.options.map((e, index) => (
                <option key={index} value={e.content}>
                  {e.content}
                </option>
              ))}
            </Select>
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"How would you rate the experience?"} />
            <Flex gap={"3vh"} direction={"column"}>
              <Flex direction={"column"}>
                <Text fontSize={["1.3vh", "1.5vh", "2vh"]} color={"gray"}>
                  (1 = Terrible, 10 = Excellent)
                </Text>
                <Flex
                  gap={1}
                  direction={"column"}
                  fontSize={["2vh", "2vh", "1.2vw"]}
                >
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontWeight={"500"}
                      fontSize={["1.8vh", "2vh", "1.2vw"]}
                    >
                      Reliability & timekeeping
                    </Text>
                    <RatingText rating={data.reliability} />
                  </Flex>
                  <Rater rating={setRating} ratingParam={"reliability"} />
                </Flex>
              </Flex>
              <Flex gap={1} direction={"column"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"500"} fontSize={["1.7vh", "2vh", "1.2vw"]}>
                    Quality of workmanship
                  </Text>
                  <RatingText rating={data.quality} />
                </Flex>
                <Rater rating={setRating} ratingParam={"quality"} />
              </Flex>
              <Flex gap={1} direction={"column"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"500"} fontSize={["1.7vh", "2vh", "1.2vw"]}>
                    Tidiness
                  </Text>
                  <RatingText rating={data.tidiness} />
                </Flex>
                <Rater rating={setRating} ratingParam={"tidiness"} />
              </Flex>
              <Flex gap={1} direction={"column"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"500"} fontSize={["1.7vh", "2vh", "1.2vw"]}>
                    Courtesy
                  </Text>
                  <RatingText rating={data.courtesy} />
                </Flex>
                <Rater rating={setRating} ratingParam={"courtesy"} />
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"Your Brief Job Description "} />
            <Flex direction={"column"}>
              <Text fontSize={["1.3vh", "1.5vh", "2vh"]} color={"gray"}>
                (This will be used as Review Title)
              </Text>
              <Input
                size={["xs", "sm", "md"]}
                placeholder="Enter Text"
                isRequired
                borderColor={"black"}
              ></Input>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"Your Review"} />
            <Textarea
              size={["xs", "sm", "md"]}
              maxLength={600}
              placeholder="In your words, tell us about your experience. What did the company do well? Make sure not to include any personal information ..."
              isRequired
              borderColor={"black"}
            ></Textarea>
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"Date of experience"} />
            <Input
              size={["xs", "sm", "md"]}
              borderColor={"black"}
              type="Date"
            ></Input>
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"What was the postcode of the project?"} />
            <Input
              size={["xs", "sm", "md"]}
              isRequired
              placeholder="📍 Enter the postcode"
              borderColor={"black"}
              type="Text"
            ></Input>
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Flex gap={"1vh"} alignItems={"center"}>
              <Ques question={"What was the value of work?"} />
              <Text fontSize={["1.3vh", "1.5vh", "2vh"]} color={"gray"}>
                (Optional)
              </Text>
            </Flex>
            <Input
              size={["xs", "sm", "md"]}
              isRequired
              placeholder="💷 Enter the value"
              borderColor={"black"}
              type="Number"
            ></Input>
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"Would you recommend this tradesperson?"} />
            <TwoButtons exportData={yesNoTradePerson} />
          </Flex>

          <Flex flexDirection={"column"} gap={["1.2vw", "1.2vw", "1vh"]}>
            <Ques question={"Your contact details"} />
            <Flex gap={1}>
              <Input
                size={["xs", "sm", "md"]}
                borderColor={"black"}
                type="text"
                placeholder="First Name"
              />
              <Input
                size={["xs", "sm", "md"]}
                borderColor={"black"}
                type="text"
                placeholder="Last Name"
              />
            </Flex>
            <Flex gap={1}>
              <Input
                size={["xs", "sm", "md"]}
                borderColor={"black"}
                type="number"
                placeholder="Phone umber"
              />
              <Input
                size={["xs", "sm", "md"]}
                borderColor={"black"}
                type="email"
                placeholder="Email Address"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
});
