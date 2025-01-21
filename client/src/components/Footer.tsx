import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import Logo2 from "../assets/Logo2.png";
import { Link } from "react-router-dom";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box bg={"black"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex justifyContent={"center"}>
              <Image src={Logo2} borderRadius={"12px"} width={"200px"} />
            </Flex>
            <Text fontSize={"sm"}>
              © 2024 Quality Carpet and Flooring. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Whatsapp"} href={"https://wa.me/447588608000"}>
                <FaWhatsapp />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={
                  "https://www.instagram.com/qualitycarpetflooringltd?igsh=MTZwbDI0eWdmeXV5eQ"
                }
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link to={"/about"} onClick={handleScrollToTop}>
              About us
            </Link>
            <Link to={"/contact"} onClick={handleScrollToTop}>
              <Box>Contact Us</Box>
            </Link>
            <Link to={"/pricing"} onClick={handleScrollToTop}>
              <Box>Pricing</Box>
            </Link>
            <Box
              as="a"
              href={
                "https://www.checkatrade.com/trades/qualitycarpetandflooringltd877181"
              }
              target="_blank"
              onClick={handleScrollToTop}
            >
              Testimonials
            </Box>
            <Box
              as="a"
              href={
                "https://www.checkatrade.com/give-feedback/trades/qualitycarpetandflooringltd877181"
              }
              target="_blank"
              onClick={handleScrollToTop}
            >
              Review Us
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"} onClick={handleScrollToTop}>
              Help Center
            </Box>
            <Box as="a" href={"#"} onClick={handleScrollToTop}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"} onClick={handleScrollToTop}>
              Legal
            </Box>
            <Box as="a" href={"#"} onClick={handleScrollToTop}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"} onClick={handleScrollToTop}>
              Status
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact Info</ListHeader>
            <Stack direction={"row"} align={"center"}>
              <FaPhone />
              <Text>+44 7588 608000</Text>
            </Stack>
            <Stack direction={"row"} align={"center"}>
              <FaEnvelope />
              <Text>qualitycarpetandflooringltd@gmail.com</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}