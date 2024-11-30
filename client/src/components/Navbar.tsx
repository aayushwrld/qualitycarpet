import {
  Box,
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Whatsapp from "../assets/Whatsapp.svg";
import Instagram from "../assets/Instagram.svg";

const navOptions: { to: string; option: string }[] = [
  { to: "/", option: "Services" },
  { to: "/", option: "Pricing" },
  { to: "/", option: "Gallery" },
  { to: "/contact", option: "Contact" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="navbar">
      <Flex
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(8px)"
        border="3px solid #020817"
        boxShadow="0 2px 8px #000"
        borderRadius={{ base: "20px", md: "25px" }}
        p={{ base: "0.5rem 1rem", sm: "0.5rem 2rem" }}
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
              <Link key={navOption.option} to={navOption.to} id="nav-option">
                {navOption.option}
              </Link>
            ))}
          </Flex>
          <Flex
            onClick={() => window.open("https://wa.me/917814127186", "_blank")}
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
              <Box color="white" fontSize="2rem">
                LOGO
              </Box>
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
                  window.open("https://wa.me/917814127186", "_blank")
                }
              >
                <img src={Whatsapp} alt="Icon" width="40" height="40" />
              </Flex>
              <Flex
                onClick={() =>
                  window.open("https://www.instagram.com/qualitycarpetflooringltd?igsh=MTZwbDI0eWdmeXV5eQ", "_blank")
                }
              >
                <img src={Instagram} alt="Icon" width="42" height="42" />
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
