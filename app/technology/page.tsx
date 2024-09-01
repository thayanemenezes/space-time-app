"use client";

import React, { useState } from "react";

export default function Technology() {
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
          <span className="font-extrabold mr-2 text-gray-500">03</span>SPACE
          LAUNCH 101
        </h6>
      </div>
    </div>
  );
}
