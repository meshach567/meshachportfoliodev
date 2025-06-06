import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/heroSection";
import { Projects } from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";
import Contact from "@/components/shared/contact";
import Experience from "@/components/shared/Experience";


export default function Home() {

  return (
    <main>
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

