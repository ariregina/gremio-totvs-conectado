import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Events />
      <Benefits />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
