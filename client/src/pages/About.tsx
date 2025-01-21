import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Container,
  } from "@chakra-ui/react";
  import image1 from "../assets/gallery6.jpeg";
  import image2 from "../assets/gallery32.jpeg";
  import image3 from "../assets/gallery31.jpeg";
  
  const About = () => {
    return (
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">About Us</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box marginBottom="5">
            <Heading as="h2" marginTop="5">
              Services and Skills
            </Heading>
            <Text
              as="p"
              marginTop="3"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              <strong>Skills:</strong> Carpet Fitting, Carpet Repair/Stretching, 
              Carpet Supplier, Carpet Supply & Fit, Carpet Tiles, Floor Screeding, 
              Flooring Specialist, Hardwood Flooring Specialist, Interlocking Floor Tiles, 
              Laminate Flooring, Parquet Flooring, Ply Boarding, Safety Flooring, Vinyl Floor Tiles, 
              Vinyl Flooring, Wood Flooring Installers, Wood Flooring Restoration, 
              Wood Flooring Suppliers, Wooden Floor Specialist.
            </Text>
            <Text
              as="p"
              marginTop="3"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              <strong>Services:</strong> Domestic Work, Commercial Work, Free Estimates, 
              Cards Accepted, Insurance Work Undertaken.
            </Text>
          </Box>
  
          <Box marginBottom="5">
            <Heading as="h2" marginTop="5">
              Company Info
            </Heading>
            <Text
              as="p"
              marginTop="3"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              We are a highly professional Carpet Fitter Company with extensive experience. 
              Customer satisfaction is our top priority, and we are fully flexible to 
              align with your requirements and budget. 
            </Text>
            <Text
              as="p"
              marginTop="3"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              The core activities we undertake include:
              <ul>
                <li>Carpet Fitting</li>
                <li>Laminate Flooring</li>
                <li>Vinyl Flooring</li>
              </ul>
              All with edge-to-edge detailing. 
            </Text>
            <Text
              as="p"
              marginTop="3"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              We supply & fit, provide free measurements, and carry a wide range of carpets 
              and laminate flooring in stock. We are happy to bring samples to you.
            </Text>
          </Box>
        </Box>
  
        <Box marginTop="10" display={'flex'} justifyContent={'center'}>
          <Image
            src={image1}
            alt="Professional carpet fitting services"
            width="100%"
            borderRadius="lg"
            w={'350px'}
          />
          <Image
            src={image2}
            alt="Professional carpet fitting services"
            width="100%"
            borderRadius="lg"
            marginLeft={'20px'}
            w={'350px'}
          />
          <Image
            src={image3}
            alt="Professional carpet fitting services"
            width="100%"
            borderRadius="lg"
            marginLeft={'20px'}
            w={'350px'}
          />
        </Box>
      </Container>
    );
  };
  
  export default About;