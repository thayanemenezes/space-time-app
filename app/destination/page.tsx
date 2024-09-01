"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DestinationTabs from "../components/Tabs";

export default function Destination() {
  const [activeTab, setActiveTab] = useState("MOON");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const tabContent: Record<string, { image: string }> = {
    MOON: { image: "/assets/destination/image-moon.png" },
    MARS: { image: "/assets/destination/image-mars.png" },
    EUROPA: { image: "/assets/destination/image-europa.png" },
    TITAN: { image: "/assets/destination/image-titan.png" },
  };

  return (
    <div className=" flex content-center lg:justify-around justify-evenly h-screen items-center w-11/12 m-auto lg:flex-row sm:flex-col flex-col">
      <div className="lg:w-1/2 md:w-10/12 lg:text-left text-center">
        <h6 className="font-normal text-3xl lg:mb-28 mt-4 mb-16 tracking-widest">
          <span className="font-title mr-2 text-gray-500 ">01</span>
          <span className="font-sans_serif mr-2 text-gray-200">
            PICK YOUR DESTINATION
          </span>
        </h6>
        <Image
          src={tabContent[activeTab].image}
          alt={activeTab}
          width={450}
          height={450}
          className={`w-3/6 md:w-5/6 h-auto m-auto ${
            animate
              ? "animate-fade animate-once animate-duration-500 animate-delay-100 animate-ease-linear"
              : ""
          }`}
        />
      </div>
      <DestinationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
