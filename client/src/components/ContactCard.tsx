import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function ContactCard() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        w="full"
        px={{ base: 4, md: 16, lg: 20 }}
      >
        <Box
          color="black"
          borderRadius="lg"
          p={{ base: 4, md: 8, lg: 16 }}
          textAlign={{ base: "center"}}
        >
          <Heading>Contact</Heading>
          <Text mt={{ base: 3, md: 5 }} color="gray.500">
            Fill up the form below to contact
          </Text>
          <Box py={{ base: 5, md: 8, lg: 10 }}>
            <VStack
              spacing={3}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="black"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdPhone color="#1970F1" size="20px" />}
              >
                +44 7588 608000
              </Button>
              <Button
                size="md"
                height="48px"
                width="360px"
                variant="ghost"
                color="black"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdEmail color="#1970F1" size="20px" />}
              >
                qualitycarpetandflooringltd@gmail.com
              </Button>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="black"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
              >
                Essex and London
              </Button>
            </VStack>
          </Box>
          <HStack
            mt={{ base: 5 }}
            ml={{md:5}}
            spacing={5}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <IconButton
              aria-label="facebook"
              variant="ghost"
              size="lg"
              isRound
              _hover={{ bg: "#0D74FF" }}
              icon={<MdFacebook size="28px" />}
            />
            <IconButton
              aria-label="Whatsapp"
              variant="ghost"
              size="lg"
              isRound
              _hover={{ bg: "#0D74FF" }}
              icon={<FaWhatsapp size="28px" />}
            />
            <IconButton
              aria-label="Twitter"
              variant="ghost"
              size="lg"
              isRound
              _hover={{ bg: "#0D74FF" }}
              icon={<FaTwitter size="28px" />}
            />
          </HStack>
        </Box>

        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          w={{ base: "full", md: "50%" }}
          maxW="lg"
          mt={{ base: 8, md: 0 }}
          m={{ base: 10, md: 0 }}
        >
          <Box m={8} color="#0B0E3F">
            <VStack spacing={5}>
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <BsPerson color="gray.800" />
                  </InputLeftElement>
                  <Input type="text" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <MdOutlineEmail color="gray.800" />
                  </InputLeftElement>
                  <Input type="email" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="Your message"
                />
              </FormControl>
              <FormControl float="right">
                <Button
                  colorScheme="blue"
                  bgGradient="linear(to-r, blue.300, #3D8EEF, blue.600)"
                  color="white"
                  variant="solid"
                >
                  Send Message
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
