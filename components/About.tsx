"use client";
import React, { useRef } from "react";
import Image from "next/image";
import profileImage from "@/public/images/profileImage.png";

const About = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section id="about" className="w-full h-auto py-10 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap">
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className="w-[450px] h-[450px] relative rounded-full overflow-hidden group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={profileImage}
              alt="Profile"
              className="moving-image"
              layout="fill"
              objectFit="cover"
            />
            <div className="audio-indicator">
              <div className="w-2 h-2 bg-white animate-ping"></div>
              <div className="w-2 h-2 bg-white animate-ping ml-2"></div>
              <div className="w-2 h-2 bg-white animate-ping ml-2"></div>
            </div>
          </div>
          <audio ref={audioRef} src="/assets/audio.mp3" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4 text-gray-500">
            I'm a dedicated front-end developer with one year of experience,
            skilled in HTML, CSS, JavaScript, and React, focused on creating
            responsive and user-friendly web applications.
          </p>
          <div className="flex gap-7">
            <div className="flex flex-col gap-2">
              <p>Name:</p>
              <p>Date of birth:</p>
              <p>Address:</p>
              <p>Zip code:</p>
              <p>Email:</p>
              <p>Phone:</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-500">
              <p>Aldi Musliu</p>
              <p>July 20, 2001</p>
              <p>Drenas, Kosova</p>
              <p>13000</p>
              <p>aldimusliu5@gmail.com</p>
              <p>+383 49 123 123</p>
            </div>
          </div>

          <div className="flex gap-3 mt-8 items-center">
            <p className="text-primary text-3xl font-bold">5</p>
            <p className="text-lg">Project complete</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
