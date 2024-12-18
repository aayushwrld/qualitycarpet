import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
import Transitions from "./Transitions";

const optionsStarter = [
  { id: 1, desc: "Basic carpet cleaning" },
  { id: 2, desc: "Stain removal services" },
  { id: 3, desc: "Monthly maintenance tips" },
];

const optionsPlus = [
  { id: 1, desc: "Deep carpet cleaning" },
  { id: 2, desc: "Stain and odor removal" },
  { id: 3, desc: "Quarterly maintenance plan" },
];

const optionsPro = [
  { id: 1, desc: "Premium carpet restoration" },
  { id: 2, desc: "Customized cleaning schedule" },
  { id: 3, desc: "Annual deep cleaning" },
];

interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
}
const PackageTier = ({ title, options, typePlan }: PackageTierProps) => {
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
    </Stack>
  );
};

export const Pricing = () => {
  return (
    <Transitions>
      <Box p={8} width="full">
        <Stack spacing={4} width={"100%"} direction={"column"}>
          <Stack
            p={5}
            alignItems={"center"}
            justifyContent={{
              base: "flex-start",
              md: "space-around",
            }}
            direction={{
              base: "column",
              md: "row",
            }}
          >
            <Stack
              width={{
                base: "100%",
                md: "40%",
              }}
              textAlign={"center"}
            >
              <Heading size={"lg"}>
                The Right Plan for <Text color="#3684E7">Your Carpets</Text>
              </Heading>
            </Stack>
            <Stack
              width={{
                base: "100%",
                md: "60%",
              }}
            >
              <Text textAlign={"center"}>
                Choose from our comprehensive carpet care plans tailored to meet
                your needs. Whether it’s a light cleaning or complete
                restoration, we have the right plan for you.
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <PackageTier
            title={"Basic Care"}
            typePlan="$50.00"
            options={optionsStarter}
          />
          <Divider />
          <PackageTier
            title={"Deep Clean"}
            typePlan="$75.00"
            options={optionsPlus}
          />
          <Divider />
          <PackageTier
            title={"Premium Care"}
            typePlan="$100.00"
            options={optionsPro}
          />
          <Divider />
          <Stack spacing={4} align="center" mt={6}>
            <Link to={"/contact"}>
              <Button
                leftIcon={<FaEnvelope />}
                colorScheme="blue"
                bgGradient="linear(to-r, blue.300, #3D8EEF, blue.600)"
                color="white"
                variant="solid"
              >
                Send Message
              </Button>
            </Link>
            <Button
              leftIcon={<IoIosCall />}
              colorScheme="green"
              bgGradient="linear(to-r, green.300, #38A169, green.600)"
              color="white"
              variant="solid"
              as="a"
              href="tel:+447588608000"
            >
              Call Now
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Transitions>
  );
};

export default Pricing;
