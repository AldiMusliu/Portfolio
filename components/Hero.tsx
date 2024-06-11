"use client";
import React, { useState, useEffect, useRef, PropsWithChildren } from "react";
import Image from "next/image";
import profilePicture from "@/public/images/profileImage1.webp";
import profilePicture2 from "@/public/images/profileImage2.webp";
import useClickSound from "@/hooks/useClickSound";
import { cn } from "@/utils/cn";

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<PropsWithChildren<HeroProps>> = ({ isDark, children }) => {
  const slides = [
    {
      greeting: "HELLO!",
      button1: "HIRE ME",
      button2: "MY WORKS",
      image: profilePicture,
    },
    {
      greeting: "WELCOME!",
      button1: "CONTACT ME",
      button2: "SEE MY WORK",
      image: profilePicture2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const goToNextSlide = () => {
    stopSlideShow();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    startSlideShow();
  };

  const goToPreviousSlide = () => {
    stopSlideShow();
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
    startSlideShow();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    e.target.addEventListener(
      "touchmove",
      (e: any) => handleTouchMove(e, touchStartX),
      { once: true }
    );
  };

  const handleTouchMove = (e: TouchEvent, touchStartX: number) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      goToNextSlide();
    }
    if (touchStartX - touchEndX < -50) {
      goToPreviousSlide();
    }
  };

  const { audioRef: clickAudioRef, playSound } = useClickSound();

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-screen flex items-center justify-center container"
      onTouchStart={handleTouchStart}
    >
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-between p-24 ${
              index === currentSlide ? "enter-active" : "leave-active"
            }`}
          >
            <div className="max-w-lg">
              <p className="text-primary text-lg">{slide.greeting}</p>
              <h1 className="text-6xl font-bold">
                I'm a <span className="text-primary">web programmer</span>{" "}
                <br /> based in Kosova
              </h1>
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={playSound}
                  className="bg-primary text-black px-6 py-2 rounded-full font-bold transition-transform duration-300 transform hover:text-white hover:-translate-y-2"
                >
                  {slide.button1}
                </button>
                <button
                  onClick={playSound}
                  className="border-2 border-white px-6 py-2 rounded-full font-bold transition-transform duration-300 transform hover:text-white hover:-translate-y-2"
                >
                  {slide.button2}
                </button>
              </div>
            </div>
            <div>
              <Image
                src={slide.image}
                alt="Hero"
                className={cn("h-auto max-w-md ", !isDark && "rounded-full")}
              />
            </div>
          </div>
        ))}
        <button
          onClick={goToPreviousSlide}
          className={cn(
            "absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full",
            isDark ? "text-white" : "text-black"
          )}
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className={cn(
            "absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full",
            isDark ? "text-white" : "text-black"
          )}
        >
          &#10095;
        </button>
      </div>
      <audio ref={clickAudioRef} src="/assets/mouseClick.wav" />
    </section>
  );
};

export default Hero;
