"use client";
import useClickSound from "@/hooks/useClickSound";
import { cn } from "@/utils/cn";
import React from "react";

const resumeData = [
  {
    year: "2019-2021",
    title: "Bachelor of Computerized Automation and Robotics",
    institution: "University of Prishtina, Prishtina",
    description:
      "Studying about programming, electronics, communication protocols and all things needed to design, build, and control the movements and actions of robots and automation systems.",
  },
  {
    year: "2021-Present",
    title: "COMPUTER SCIENCE AND ENGINEERING",
    institution: "UBT, Prishtina",
    description:
      "Studying about software systems engineering, database systems, computer, web programming.",
  },
  {
    year: "15/11/2021 - 28/04/2022",
    title: "COURSE - T É T É",
    institution: "PBC Academy",
    description:
      "Studying about web programming including high programming languages like C#. Also leaning about Front-End development including HTML5, CSS3, BootStrap5 and JavaScript.",
  },
  {
    year: " 04/07/2022 - 07/09/2022",
    title: "COURSE - MERN BOOTCAMP",
    institution: "FLOSSK",
    description:
      "Completed 2-month MERN stack bootcamp, diving headfirst into the exciting world of MongoDB, Express.js, React, and Node.js.",
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
