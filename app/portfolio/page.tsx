"use client";
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
import useClickSound from "@/hooks/useClickSound";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isDark, setDark] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDark(storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
    playSound();
  };
  const { audioRef: clickAudioRef, playSound } = useClickSound();
  return (
    <main
      className={cn(isDark ? "bg-black text-white" : "bg-white text-black")}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <About />
      <Resume isDark={isDark} />
      <Services isDark={isDark} />
      <Skills />
      <Projects />
      <Stats isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer />
      <audio ref={clickAudioRef} src="/assets/mouseClick.wav" />
    </main>
  );
}
