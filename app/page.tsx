import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
