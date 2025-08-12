import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/heroSection";
import { Projects } from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";
import Contact from "@/components/shared/contact";
import Experience from "@/components/shared/Experience";
import LazySection from "@/components/shared/LazySection";
import Services from "@/components/shared/Services";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <Skills />
      </LazySection>
      <LazySection>
        <Experience />
      </LazySection>
      <LazySection>
        <Services />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <Footer />
    </main>
  );
}

