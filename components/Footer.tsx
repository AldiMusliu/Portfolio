"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  LocateIcon,
  Mail,
  Phone,
  TwitterIcon,
  X,
} from "lucide-react";
import React from "react";

const Footer = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About</h3>
          <p className="text-gray-400">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/aldi-musliu-92401a241"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/aldimusliu"
              className="text-gray-400 hover:text-white"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/aldmusliu/"
              className="text-gray-400 hover:text-white"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <p
                onClick={() => handleScroll("hero")}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll("about")}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                About
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll("services")}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Services
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll("projects")}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Projects
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll("contacts")}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Contacts
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Responsive Design
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                SEO Optimization
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Maintenance and Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Have a Questions?</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <span className="mr-2">
                <LocateIcon />
              </span>
              203 Drenas Rr. Ymer Zeka, Kosova
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <Phone />
              </span>
              +383 49 123 123
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <Mail />
              </span>
              aldimusliu5@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
