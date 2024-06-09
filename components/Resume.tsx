"use client";
import useClickSound from "@/hooks/useClickSound";
import { cn } from "@/utils/cn";
import React from "react";

const resumeData = [
  {
    year: "2014-2015",
    title: "Master Degree of Design",
    institution: "Cambridge University",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    year: "2014-2015",
    title: "Art & Creative Director",
    institution: "Cambridge University",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    year: "2014-2015",
    title: "Bachelor's Degree of C.A",
    institution: "Cambridge University",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    year: "2014-2015",
    title: "Wordpress Developer",
    institution: "Cambridge University",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];

const Resume = ({ isDark }: { isDark: boolean }) => {
  const { audioRef: clickAudioRef, playSound } = useClickSound();
  const handleDownloadClick = () => {
    playSound();
    window.open("/assets/AldiMusliuCV.pdf", "_blank");
  };

  return (
    <section id="resume" className="w-full h-auto py-24 px-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-5 text-center">Resume</h2>
        <p className="text-lg mb-12 text-center text-gray-500 px-8">
          Welcome to my resume. Below, you will find detailed information about
          my educational background, professional experience, and technical
          skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "p-8 rounded-lg",
                isDark ? "bg-secondary" : "bg-gray-100"
              )}
            >
              <p className="text-primary text-3xl font-bold">{item.year}</p>
              <h3 className="text-2xl font-bold my-2">{item.title}</h3>
              <p className="text-gray-500 uppercase">{item.institution}</p>
              <p className="mt-4 text-gray-500 ">{item.description}</p>
            </div>
          ))}
          <div className="col-span-2 flex justify-center items-center">
            <button
              onClick={handleDownloadClick}
              className="mt-8 bg-primary text-black px-6 py-3 rounded-full font-bold transition-transform duration-300 transform hover:text-white hover:-translate-y-2"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
      <audio ref={clickAudioRef} src="/assets/mouseClick.wav" />
    </section>
  );
};

export default Resume;
