"use client";
import React from "react";
import Image from "next/image";
import profileImage from "@/public/images/profileImage.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto bg-black text-white py-10 px-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[450px] h-[450px] relative">
            <Image
              src={profileImage}
              alt="Profile"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4 text-gray-500">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
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
              <p>Prishtine Kosova</p>
              <p>13000</p>
              <p>aldimusliu5@gmail.com</p>
              <p>+383 49 123 123</p>
            </div>
          </div>

          <div className="flex gap-3 mt-8 items-center">
            <p className="text-[#ffbd39] text-3xl font-bold">5</p>
            <p className="text-lg">Project complete</p>
          </div>
          <button className="mt-8 bg-[#ffbd39] text-black px-6 py-3 rounded-full font-bold">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
