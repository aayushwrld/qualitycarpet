import {
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Logo2.png";
import Whatsapp from "../assets/Whatsapp.svg";
import Instagram from "../assets/Instagram.svg";
import { IoIosCall } from "react-icons/io";

const navOptions: { to: string; option: string }[] = [
  { to: "/pricing", option: "Pricing" },
  { to: "/", option: "Gallery" },
  { to: "/contact", option: "Contact" },
  { to: "/review", option: "Review Us" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="navbar">
      <Flex
        bg="rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(12px)"
        border="3px solid #020817"
        boxShadow="0 2px 8px #000"
        borderRadius={{ base: "20px", md: "25px" }}
        p={{ base: "0.5rem 0.8rem", sm: "0.5rem 1.5rem" }}
        w={{ base: "90vw", sm: "80vw", lg: "60vw" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex color="black" justifyContent={"center"} alignItems={"center"}>
          <Link to={"/"}>
            <img src={Logo} width={"170px"} />
          </Link>
        </Flex>
        <Flex
          display={{ base: "none", md: "flex" }}
          color="black"
          fontSize="1rem"
          gap={"2.5rem"}
          alignItems={"center"}
        >
          <Flex gap={{ base: "1rem", sm: "1.5rem", lg: "2rem" }}>
            {navOptions.map((navOption) => (
              <Link
                key={navOption.option}
                to={navOption.to}
                id="nav-option"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {navOption.option}
              </Link>
            ))}
          </Flex>
          <Flex
            onClick={() => window.open("https://wa.me/447588608000", "_blank")}
            className="icon-animate"
          >
            <img src={Whatsapp} alt="Icon" width="35" height="35" />
          </Flex>
        </Flex>
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon w={6} h={6} color="black" />}
          aria-label="Open menu"
          variant="unstyled"
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#02081799" backdropFilter="blur(9px)">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack spacing="24px" mt="4">
              {/* <Box color="white" fontSize="2rem">
                LOGO
              </Box> */}
              <Link to={"/"}>
                <Image
                  src={Logo2}
                  width={"170px"}
                  borderRadius="12px" // Adjust the value to your preference
                  alt="Logo"
                />
              </Link>
              {navOptions.map((navOption) => (
                <Link
                  key={navOption.option}
                  to={navOption.to}
                  onClick={onClose}
                >
                  <Text color="white" fontSize="1.5rem">
                    {navOption.option}
                  </Text>
                </Link>
              ))}
              <Flex
                onClick={() =>
                  window.open("https://wa.me/447588608000", "_blank")
                }
              >
                <img src={Whatsapp} alt="Icon" width="40" height="40" />
              </Flex>
              <Flex
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/qualitycarpetflooringltd?igsh=MTZwbDI0eWdmeXV5eQ",
                    "_blank"
                  )
                }
              >
                <img src={Instagram} alt="Icon" width="42" height="42" />
              </Flex>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
