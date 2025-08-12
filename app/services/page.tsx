import ServicesPage from "@/components/services/ServicesPage";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Services | Meshach Arinze",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <ServicesPage />
      <Footer />
    </main>
  );
}
