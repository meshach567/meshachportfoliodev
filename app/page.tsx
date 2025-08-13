import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/heroSection";
import Skills from "@/components/shared/Skills";
import Contact from "@/components/shared/contact";
import Experience from "@/components/shared/Experience";
import LazySection from "@/components/shared/LazySection";
import Services from "@/components/shared/Services";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import Metrics from "@/components/shared/Metrics";
import Testimonials from "@/components/shared/Testimonials";
import RecentPosts from "@/components/shared/RecentPosts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section className="px-4 lg:px-8 mt-10">
        <div className="mx-auto max-w-7xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-semibold text-white">Explore my work</h2>
          <p className="text-gray-300 mt-2">See selected projects, case studies, and experiments.</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link href="/projects" className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition">View Projects</Link>
            <Link href="#contact" className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:bg-white/10 transition">Contact Me</Link>
          </div>
        </div>
      </section>

      <LazySection>
        <Metrics />
      </LazySection>
      <LazySection>
        <Testimonials />
      </LazySection>
      <LazySection>
        <RecentPosts />
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

