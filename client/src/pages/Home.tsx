import QuestionAccordion from "../components/QuestionAccordion.tsx";
import CaptionCarousel from "../components/Carousel.tsx";
import ContactCard from "../components/ContactCard.tsx";

export default function Home() {
  return (
    <>
      <CaptionCarousel /> 
      <QuestionAccordion />
      <ContactCard />
    </>
  )
}
