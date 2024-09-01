"use client";
import Image from "next/image";
import React, { useState } from "react";
import DestinationTabs from "../components/Tabs";

export default function Destination() {
  const [activeTab, setActiveTab] = useState("MOON");

  const tabContent: Record<string, { image: string }> = {
    MOON: { image: "/assets/destination/image-moon.png" },
    MARS: { image: "/assets/destination/image-mars.png" },
    EUROPA: { image: "/assets/destination/image-europa.png" },
    TITAN: { image: "/assets/destination/image-titan.png" },
  };

  return (
    <div className="flex content-center lg:justify-around  justify-evenly h-screen items-center w-11/12 m-auto lg:flex-row sm:flex-col flex-col">
      <div className="lg:w-1/2 md:w-10/12 lg:text-left text-center">
        <h6 className="font-serif text-xl text-gray-300 lg:mb-28 mb-4 md:mt-4">
          <span className="font-extrabold mr-2 text-gray-500">01</span> PICK
          YOUR DESTINATION
        </h6>
        <Image
          src={tabContent[activeTab].image}
          alt={activeTab}
          width={450}
          height={450}
          className="w-4/6 md:w-5/6 h-auto m-auto"
        />
      </div>
      <DestinationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
