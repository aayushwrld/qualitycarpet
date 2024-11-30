import QuestionAccordion from "../components/QuestionAccordion.tsx";
import CaptionCarousel from "../components/Carousel.tsx";
import ContactCard from "../components/ContactCard.tsx";
import ReviewSection from "../components/ReviewSection.tsx";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <CaptionCarousel />
      <QuestionAccordion />
      <Flex 
        direction="row" 
        wrap="wrap" 
        justify="center" 
        gap={6} // Adjust spacing between cards
        py={6}
      >
        {/* Add multiple review cards */}
        <ReviewSection />
      </Flex>
      <ContactCard />
    </>
  );
}