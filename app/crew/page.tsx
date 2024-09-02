"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Crew() {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);

  const crewData = [
    {
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "/assets/crew/image-douglas-hurley.webp",
    },
    {
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the development of the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "/assets/crew/image-mark-shuttleworth.webp",
    },
    {
      role: "PILOT",
      name: "VICTOR GLOVER",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: "/assets/crew/image-victor-glover.webp",
    },
    {
      role: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "/assets/crew/image-anousheh-ansari.webp",
    },
  ];

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="lg:w-10/12 m-auto lg:h-screen flex content-center lg:justify-center flex-col mt-8">
      <div className="lg:w-1/2 md:w-10/12 w-full lg:text-left text-center">
        <h6 className="font-normal text-2xl lg:text-3xl lg:mb-28 md:mt-4 mb-16 tracking-widest">
          <span className="font-title mr-2 text-gray-500">02</span>
          <span className="font-sans_serif mr-2 text-gray-200">
            MEET YOUR CREW
          </span>
        </h6>
      </div>
      <div className="flex lg:flex-row flex-col w-full h-auto justify-between items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-gray-500 text-2xl lg:text-3xl mb-5">
            {crewData[activeTab].role}
          </h1>
          <h1 className="text-gray-300 text-3xl mb-8 lg:text-6xl">
            {crewData[activeTab].name}
          </h1>
          <p className="font-text text-gray-300 text-lg w-11/12 m-auto lg:m-0 ">
            {crewData[activeTab].description}
          </p>
          <div className="flex justify-center lg:justify-start items-end lg:mt-48 mt-5 space-x-4">
            {crewData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-4 h-4 rounded-full ${
                  activeTab === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="relative w-1/2 sm:w-2/6 mt-6 h-5/6 flex">
          <Image
            src={crewData[activeTab].image}
            alt={crewData[activeTab].name}
            width={400}
            height={400}
            className={`w-full h-auto self-center ${
              animate
                ? "animate-fade animate-once animate-duration-500 animate-delay-100 animate-ease-linear"
                : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
