import About from "@/components/about/About";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "About | Meshach Arinze",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}

