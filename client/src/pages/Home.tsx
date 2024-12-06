import QuestionAccordion from "../components/QuestionAccordion.tsx";
import CaptionCarousel from "../components/Carousel.tsx";
import ContactCard from "../components/ContactCard.tsx";
import ReviewSection from "../components/ReviewSection.tsx";
import AboutHome from "../components/AboutHome.tsx";
import Stats from "../components/Stats.tsx";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <CaptionCarousel />
      <AboutHome />
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
      <Stats />
      <ContactCard />
    </>
  );
}