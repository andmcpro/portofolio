import Image from "next/image";
import Navigation from "./navigation";
import Hero from "./hero";
import AccordionSection from "./AccordionSection";
import ProjectsSection from "./ProjectSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Navigation />
      <Hero />
      <AccordionSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
