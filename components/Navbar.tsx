"use client";
import useClickSound from "@/hooks/useClickSound";
import { cn } from "@/utils/cn";
import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(id);
      playSound();
    }
  };

  const { audioRef: clickAudioRef, playSound } = useClickSound();

  return (
    <nav
      className={cn(
        "fixed w-full z-10",
        isDark ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      <div className="container mx-auto py-6 px-20 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <span className="text-primary">Aldi</span>'s Portfolio
          <span className="text-primary">.</span>
        </div>
        <ul className="flex space-x-6">
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "resume", label: "Resume" },
            { id: "services", label: "Services" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <li key={item.id} className="group">
              <span
                onClick={() => handleScroll(item.id)}
                className={`navbar-cursor ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
              >
                {item.label}
                <span className="hover-line" />
              </span>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className="text-xl">
              {isDark ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </div>
      <audio ref={clickAudioRef} src="/assets/mouseClick.wav" />
    </nav>
  );
};

export default Navbar;
