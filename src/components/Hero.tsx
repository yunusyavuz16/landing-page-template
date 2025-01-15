"use client";
import React, { useEffect } from "react";

const HeroWithWaveMotion = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const wave1 = document.getElementById("wave1");
      const wave2 = document.getElementById("wave2");
      const wave3 = document.getElementById("wave3");
      const wave4 = document.getElementById("wave4");

      if (wave1) wave1.style.backgroundPositionX = 400 + value * 4 + "px";
      if (wave2) wave2.style.backgroundPositionX = 300 + value * -4 + "px";
      if (wave3) wave3.style.backgroundPositionX = 200 + value * 2 + "px";
      if (wave4) wave4.style.backgroundPositionX = 100 + value * -2 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-500 h-screen flex items-center justify-center text-center text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to Our Company
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Elevating businesses with innovative solutions and unmatched services.
        </p>
        <div className="mt-6 md:space-x-4 flex flex-col md:flex-row items-center justify-center">
          <a
            href="#services"
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 mt-3 md:mt-0 bg-blue-600 border border-white font-bold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Wave Motion */}
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className="wave"
          id="wave1"
          style={{ "--i": 1 } as React.CSSProperties}
        ></div>
        <div
          className="wave"
          id="wave2"
          style={{ "--i": 2 } as React.CSSProperties}
        ></div>
        <div
          className="wave"
          id="wave3"
          style={{ "--i": 3 } as React.CSSProperties}
        ></div>
        <div
          className="wave"
          id="wave4"
          style={{ "--i": 4 } as React.CSSProperties}
        ></div>
      </div>

      {/* Optional decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default HeroWithWaveMotion;
