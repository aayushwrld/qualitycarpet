import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
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
  return (
    <Box bg={"black"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex justifyContent={'center'}>
              <Image src={Logo2} borderRadius={"12px"} width={'200px'}/>
            </Flex>
            <Text fontSize={"sm"}>
              © 2024 Quality Carpet and Flooring. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Whatsapp"} 
              href={
                "https://wa.me/447588608000"
              }
              >
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
            <Box as="a" href={"#"}>
              About us
            </Box>
            <Box as="a" href={"#"}>
              Blog
            </Box>
            <Link to={"/contact"}>
              <Box>Contact Us</Box>
            </Link>
            <Link to={"/pricing"}>
              <Box>Pricing</Box>
            </Link>
            <Box as="a" href={"#"}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"}>
              Legal
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Satus
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                borderColor="#3684E7"
                _hover={{
                  boderColor: "#0D74FF",
                }}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={"#0D74FF"}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "#3684E7",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
