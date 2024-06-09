"use client";
import useHoverSound from "@/hooks/useHoverSound";
import { cn } from "@/utils/cn";
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

const Services = ({ isDark }: { isDark: boolean }) => {
  const { playSound } = useHoverSound("/assets/hoverSound.mp3");
  return (
    <section id="services" className="w-full h-auto py-24 px-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Services</h2>
        <p className="text-lg mb-12 text-center text-gray-500">
          I offer a range of front-end development services including web
          design, web development, responsive design, performance optimization,
          SEO optimization, and ongoing maintenance and support to ensure your
          website remains at its best.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={cn(
                "p-8 rounded-lg text-center transition-transform duration-300 transform hover:bg-primary hover:-translate-y-2 group",
                isDark ? "bg-secondary" : "bg-gray-100"
              )}
              onMouseEnter={playSound}
            >
              <div className="flex justify-center mb-4 text-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold group-hover:text-black">
                {service.title}
              </h3>
              <div className="h-1 w-8 bg-primary mx-auto mt-2 group-hover:bg-black" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
