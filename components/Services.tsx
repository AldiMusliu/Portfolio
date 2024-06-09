"use client";
import useHoverSound from "@/hooks/useHoverSound";
import {
  BarChartHorizontalIcon,
  Cog,
  Laptop,
  Paintbrush,
  Search,
  Tablet,
} from "lucide-react";
import React from "react";

const servicesData = [
  {
    title: "Web Design",
    icon: <Paintbrush size={48} />,
  },
  {
    title: "Web Development",
    icon: <Laptop size={48} />,
  },
  {
    title: "Responsive Design",
    icon: <Tablet size={48} />,
  },
  {
    title: "Performance Optimization",
    icon: <BarChartHorizontalIcon size={48} />,
  },
  {
    title: "SEO Optimization",
    icon: <Search size={48} />,
  },
  {
    title: "Maintenance and Support",
    icon: <Cog size={48} />,
  },
];

const Services = () => {
  const { playSound } = useHoverSound("/assets/hoverSound.mp3");
  return (
    <section
      id="services"
      className="w-full h-auto bg-black text-white py-24 px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Services</h2>
        <p className="text-lg mb-12 text-center text-gray-500">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-[#ffbd39] hover:-translate-y-2 group"
              onMouseEnter={playSound}
            >
              <div className="flex justify-center mb-4 text-[#ffbd39] group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold group-hover:text-black">
                {service.title}
              </h3>
              <div className="h-1 w-8 bg-[#ffbd39] mx-auto mt-2 group-hover:bg-black"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
