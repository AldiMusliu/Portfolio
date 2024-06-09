"use client";
import useClickSound from "@/hooks/useClickSound";
import React, { useState } from "react";

const Navbar = () => {
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
    <nav className="bg-black text-white fixed w-full z-10 ">
      <div className="container mx-auto py-6 px-20 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <span className="text-[#ffbd39]">Aldi</span>'s Portfolio
          <span className="text-[#ffbd39]">.</span>
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
                  activeSection === item.id ? "text-[#ffbd39]" : ""
                }`}
              >
                {item.label}
                <span className="hover-line" />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <audio ref={clickAudioRef} src="/assets/mouseClick.wav" />
    </nav>
  );
};

export default Navbar;
