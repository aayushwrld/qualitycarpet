import QuestionAccordion from "../components/QuestionAccordion.tsx";
import CaptionCarousel from "../components/Carousel.tsx";
import ContactCard from "../components/ContactCard.tsx";
import ReviewSection from "../components/ReviewSection.tsx";
import Feature1 from "../components/Feature1.tsx";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <CaptionCarousel />
      <Feature1 />
      <Flex 
        direction="row" 
        wrap="wrap" 
        justify="center" 
        gap={6}
        py={6}
      >
        <ReviewSection />
      </Flex>
      <QuestionAccordion />

      <ContactCard />
    </>
  );
}