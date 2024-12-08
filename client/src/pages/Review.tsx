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

export default memo(function Review() {
  const [data, setData] = useState({ work: true, service: "" });

  const yesNo = (arg: boolean) => {
    setData({ ...data, work: arg });
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
          width={"45%"}
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
              <Heading fontSize={"1.6vw"}>Quality Carpet & Flooring</Heading>
              <Text>Based in London</Text>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"Was any work carried out?"} />
            <TwoButtons exportData={yesNo} />
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"What services did you require?"} />
            <Select
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

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"How would you rate the experience?"} />
            <Flex gap={"3vh"} direction={"column"}>
              <Flex direction={"column"}>
                <Text fontSize={"2vh"} color={"gray"}>
                  (1 = Terrible, 10 = Excellent)
                </Text>
                <Flex gap={1} direction={"column"}>
                  <Text as={"b"}>Reliability & timekeeping</Text>
                  <Rater />
                </Flex>
              </Flex>
              <Flex gap={1} direction={"column"}>
                <Text as={"b"}>Reliability & timekeeping</Text>
                <Rater />
              </Flex>
              <Flex gap={1} direction={"column"}>
                <Text as={"b"}>Reliability & timekeeping</Text>
                <Rater />
              </Flex>
              <Flex gap={1} direction={"column"}>
                <Text as={"b"}>Reliability & timekeeping</Text>
                <Rater />
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"Your Brief Job Description "} />
            <Flex direction={"column"}>
              <Text fontSize={"2vh"} color={"gray"}>
                (This will be used as Review Title)
              </Text>
              <Input
                placeholder="Enter Text"
                isRequired
                borderColor={"black"}
              ></Input>
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"Your Review"} />
            <Textarea
              maxLength={600}
              placeholder="In your words, tell us about your experience. What did the company do well? Make sure not to include any personal information ..."
              isRequired
              borderColor={"black"}
            ></Textarea>
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"Date of experience"} />
            <Input borderColor={"black"} type="Date"></Input>
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"What was the postcode of the project?"} />
            <Input
              isRequired
              placeholder="📍 Enter the postcode"
              borderColor={"black"}
              type="Text"
            ></Input>
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Flex gap={"1vh"} alignItems={"center"}>
              <Ques question={"What was the value of work completed?"} />
              <Text fontSize={"2vh"} color={"gray"}>
                (Optional)
              </Text>
            </Flex>
            <Input
              isRequired
              placeholder="💷 Enter the value"
              borderColor={"black"}
              type="Number"
            ></Input>
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"Would you recommend this tradesperson?"} />
            <TwoButtons exportData={yesNo} />
          </Flex>

          <Flex flexDirection={"column"} gap={"1vh"}>
            <Ques question={"Your contact details"} />
            <Flex gap={1}>
              <Input
                borderColor={"black"}
                type="text"
                placeholder="First Name"
              />
              <Input
                borderColor={"black"}
                type="text"
                placeholder="Last Name"
              />
            </Flex>
            <Flex gap={1}>
              <Input
                borderColor={"black"}
                type="number"
                placeholder="Phone umber"
              />
              <Input
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
