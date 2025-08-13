import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Projects } from "@/components/shared/Projects";

export const metadata = {
  title: "Projects | Meshach Arinze",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}


