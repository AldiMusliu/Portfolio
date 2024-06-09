"use client";
import React from "react";
import VideoBackground from "./Video";
import useClickSound from "@/hooks/useClickSound";

const Stats = () => {
  const statsData = [
    { value: "3", label: "Awards" },
    { value: "5", label: "Complete Projects" },
    { value: "2", label: "Happy Customers" },
    { value: "10", label: "Mid" },
  ];
  const { audioRef: clickAudioRef, playSound } = useClickSound();

  return (
    <section className="relative w-full h-screen">
      <VideoBackground />
      <div className="absolute inset-0 bottom-100 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a]  bg-opacity-75 p-6 rounded-lg text-center"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              I'm <span className="text-[#ffbd39]">Available</span> for
              freelancing
            </h1>
            <p className="text-gray-300 mb-8">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <button
              onClick={playSound}
              className="mt-8 bg-[#ffbd39] text-black px-6 py-3 rounded-full font-bold transition-transform duration-300 transform hover:text-white hover:-translate-y-2"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <audio ref={clickAudioRef} src="/assets/mouseClick.wav" />
    </section>
  );
};

export default Stats;
