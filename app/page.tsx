import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MyBlog from "@/components/MyBlog";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <Navbar />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <MyBlog />
      <Contact />
      <Footer />
    </main>
  );
}
