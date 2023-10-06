"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-7">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 ">
              Hello!, Am Aman Chauhan
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front End Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web App Developer",
                1000,
                "Responsive Web App Developer",
                1000,
                "We produce food for Chinchillas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, vitae sint ab ex perspiciatis harum incidunt
            explicabo at laboriosam magnam?
          </p>
          <div >
            <button className="px-6 py-3 w-full mr-4 sm:w-fit bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black hover:text-white hover:bg-slate-500  font-semibold rounded-md ">
              Hire Me{" "}
            </button>
            <button className="px-6  py-3 w-full sm:w-fit hover:bg-slate-500  border-orange-500 font-semibold hover:border-green-500 rounded-md border-2 text-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
