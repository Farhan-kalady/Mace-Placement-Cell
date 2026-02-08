import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="relative z-10 text-center px-6 container mx-auto">
        <h2 className="text-black tracking-[0.3em] uppercase mb-7">
          MAR ATHANASIUS COLLEGE OF ENGINEERING
        </h2>

        <h1 className="font-serif font-bold leading-tight text-6xl md:text-7xl lg:text-8xl mb-6">
          Architects of <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-600 text-transparent bg-clip-text">
            The Future.
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-10">
          Bridging the gap between academic excellence and industry innovation.
          The Career Guidance and Placement Unit ensures every student finds
          their path to success.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href='#contact'
            className="bg-white text-black px-8 py-4 rounded font-semibold hover:scale-105 transition">
            Hire Talent
          </a>
          <a 
            href='#stats'
            className="px-8 py-4 border border-white/30 rounded text-white hover:bg-white/10 transition">
            View Statistics
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        <ArrowDown size={26} />
      </div>
    </section>
  );
};

export default Hero;
