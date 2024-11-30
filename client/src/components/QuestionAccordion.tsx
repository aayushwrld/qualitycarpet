import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";

export default function QuestionAccordion() {
  return (
    <Flex
      margin={"1rem"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("white.50", "white.800")}
    >
      <Container margin={0}>
        {/* Heading */}
        <Heading
          textAlign="center"
          mb={6} // Add spacing between the heading and the accordion
          fontFamily={"Work Sans"}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        >
          Get to know more
        </Heading>
        
        {/* Accordion */}
        <Accordion allowMultiple width="100%" borderColor={"black"}>
          {/* Question 1 */}
          <AccordionItem borderRadius="10px">
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Why choose HS Carpets & Flooring?</Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black.600">
                At HS Carpets & Flooring, we bring years of expertise and a
                local touch to provide top-notch flooring solutions. Our
                tailored services, affordable pricing, and dedication to quality
                make us the go-to choice for flooring services in Essex.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">What flooring services do we offer?</Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black.600">
                We offer a variety of flooring services, including:
              </Text>
              <ul>
                <li>Carpet installation</li>
                <li>Vinyl flooring</li>
                <li>Laminate flooring</li>
                <li>Wood flooring</li>
                <li>LVT (Luxury Vinyl Tiles)</li>
                <li>Artificial grass laying</li>
                <li>Stair runner installation</li>
              </ul>
              <Text color="black.600">
                Our services come with a warranty and are backed by public
                liability insurance, ensuring reliability and quality in every
                project.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem borderBottomRadius="10px">
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">What makes us stand out?</Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="black.600">
                As a family-run business in Essex, we provide local expertise
                and customer-centric solutions:
              </Text>
              <ul>
                <li>
                  We stay updated on the latest flooring trends and styles.
                </li>
                <li>
                  Our team is highly trained and uses state-of-the-art tools.
                </li>
                <li>
                  We offer customized flooring options to match your style and
                  functional needs.
                </li>
                <li>
                  Our pricing is competitive without compromising on quality.
                </li>
              </ul>
              <Text color="black.600">
                When you choose us, you get the perfect blend of craftsmanship
                and customer service.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}