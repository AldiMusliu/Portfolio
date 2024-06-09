"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import carImage from "@/public/images/car.avif";
import ecommerce from "@/public/images/ecommerce.jpg";
import news from "@/public/images/news.jpg";
import notesaver from "@/public/images/notesaver.jpg";
import useHoverSound from "@/hooks/useHoverSound";

const projectData = [
  {
    id: 1,
    title: "Rent & Sell Cars",
    category: "ReactJs, ExpressJs, MongoDB",
    imageUrl: carImage,
    link: "https://github.com/AldiMusliu/rentSellCars-api",
  },
  {
    id: 2,
    title: "E-Commerce",
    category: "PHP",
    imageUrl: ecommerce,
    link: "https://github.com/AldiMusliu/PhoneShop-PHP",
  },
  {
    id: 3,
    title: "News Page",
    category: "C#, .net",
    imageUrl: news,
    link: "https://github.com/AldiMusliu/WebNews",
  },
  {
    id: 4,
    title: "Note Saver",
    category: "ReactJs, ExpressJs, MongoDB",
    imageUrl: notesaver,
    link: "https://github.com/AldiMusliu/NoteSaver-reactapp",
  },
];

const Projects = () => {
  const { playSound } = useHoverSound("/assets/hoverSound.mp3");
  return (
    <section id="projects" className="w-full h-auto py-24 px-8 pb-36">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-5 text-center">My Projects</h2>
        <p className="text-lg mb-12 text-center text-gray-400">
          Explore a collection of my recent projects showcasing my skills and
          expertise in web development and design."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <Link
              href={project.link}
              key={project.id}
              className="group relative"
            >
              <div
                className="block overflow-hidden relative"
                onMouseEnter={playSound}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-[320px] object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-30 rounded-md" />
                <div className="absolute inset-0 bg-primary bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white rounded-md">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
