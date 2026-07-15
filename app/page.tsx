import NavBar from "./_components/NavBar";
import HeroSection from "./_components/HeroSection";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import * as motion from "motion/react-client"
import { Toaster } from "react-hot-toast";
import FlareCursor from "@/components/flare-cursor/FlareCursor";

export default function Home() {
  return (
    <section className="w-full">
      <FlareCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1}}  
        className="w-full bg-background">
        <NavBar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </motion.div>
    </section>
  );
}
