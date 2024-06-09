"use client";
import React, { useState } from "react";
import Image from "next/image";
import profileImage from "@/public/images/profileImage.png";
import { Globe, LocateIcon, Mail, Phone, Store } from "lucide-react";
import useClickSound from "@/hooks/useClickSound";

const Contact = () => {
  const { audioRef: clickAudioRef, playSound } = useClickSound();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    playSound();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setMessage("Your message has been sent!");
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="w-full h-auto bg-black text-white py-24 px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Contact Me</h2>
        <p className="text-lg mb-12 text-center text-gray-500">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
        <div className="flex items-center gap-10 justify-center mb-10">
          <div className="flex items-center space-x-4">
            <LocateIcon size={24} />
            <div>
              <p className="font-bold">ADDRESS</p>
              <p className="text-gray-400">203 Drenas Rr. Ymer Zeka, Kosova</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone size={24} />
            <div>
              <p className="font-bold">CONTACT NUMBER</p>
              <p className="text-gray-400">+383 49 123 123</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail size={24} />
            <div>
              <p className="font-bold">EMAIL ADDRESS</p>
              <p className="text-gray-400">aldimusliu5@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Globe size={24} />
            <div>
              <p className="font-bold">WEBSITE</p>
              <p className="text-gray-400">myportfolio.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 ">
          <div className="flex-1 mb-8 md:mb-0">
            <Image src={profileImage} alt="Profile" className="rounded-lg" />
          </div>
          <div className="flex-1">
            <form className="space-y-4 " onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] text-white rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] text-white rounded-lg"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-[#1a1a1a] text-white rounded-lg"
                required
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 bg-[#1a1a1a] text-white rounded-lg h-32"
                value={formData.message}
                onChange={handleChange}
                required
                name="message"
              />
              <div className="flex justify-end">
                <button
                  onClick={playSound}
                  disabled={isSubmitting}
                  className="bg-[#ffbd39] text-black px-6 py-3 rounded-full font-bold transition-transform duration-300 transform hover:text-white hover:-translate-y-2"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>
              {message && (
                <p className="mt-4 text-center font-bold">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <audio ref={clickAudioRef} src="/assets/mouseClick.wav" />
    </section>
  );
};

export default Contact;
