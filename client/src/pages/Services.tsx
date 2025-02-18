import ServiceCard from "../components/ServiceCard";
import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { servicesList } from "../assets/ServicesList";

export default function Services() {
  console.log(servicesList)
  return (
    <Flex
      gap={"3vh"}
      p={"3vw 6vw"}
      alignItems={"center"}
      flexDirection={"column"}
      flex={1}
    >
      <Flex flexDirection={"column"} gap={"0.1vh"} alignItems={"center"}>
        <Heading
          fontSize="4xl"
          mb={2}
          fontWeight={"bold"}
          fontFamily={"Work Sans"}
        >
          Services
        </Heading>
        <Text fontSize="md" align={"center"}>
          Explore the services which we offer!
        </Text>
      </Flex>
      <SimpleGrid pt={"2vh"} columns={[1, 2, 2, 3]} gap={10}>
        {servicesList.map((service:any) => (
          <ServiceCard info={service} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
