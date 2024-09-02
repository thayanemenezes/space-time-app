"use client";

import Image from "next/image";
import React, { useState } from "react";
import { technologyData } from "../utils/pagesData";

export default function Technology() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:w-10/12 m-auto lg:h-screen flex content-center lg:justify-center justify-evenly flex-col mt-8">
      <div className="lg:w-1/2 md:w-10/12 w-full lg:text-left text-center">
        <h6 className="font-normal text-2xl lg:text-3xl lg:mb-28 mb-10 mt-10 tracking-widest">
          <span className="font-title mr-2 text-gray-500">03</span>
          <span className="font-sans_serif mr-2 text-gray-200">
            SPACE LAUNCH 101
          </span>
        </h6>
      </div>
      <div className="flex content-center lg:justify-around justify-evenly h-auto items-center lg:w-full m-auto lg:flex-row flex-col">
        <div className="lg:order-3 lg:absolute lg:right-0">
          <Image
            src={technologyData[activeTab].image}
            alt="launch landscape"
            width={400}
            height={400}
            className="w-full h-auto object-cover object-bottom"
          />
        </div>
        <div className="flex justify-center mt-5 flex-row lg:flex-col">
          {technologyData.map((value, index) => (
            <div className="flex justify-center flex-col lg:flex-row">
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`border-gray-200 border-solid border-2 text-xl text-gray-200 rounded-full h-12 w-12 lg:w-16 lg:h-16 mx-3 lg:my-5 ${
                  activeTab === index
                    ? "bg-white text-gray-800"
                    : "bg-transparent"
                }`}
              >
                {value.id}
              </button>
            </div>
          ))}
        </div>
        <div className="py-8 text-center lg:text-left ml-5">
          <h3 className="text-gray-400 mb-5 text-2xl lg:text-3xl">
            THE TERMINOLOGY...
          </h3>
          <h2 className="my-3 text-2xl lg:text-6xl">
            {technologyData[activeTab].title}
          </h2>
          <p className="text-gray-300 font-text w-10/12 text-base m-auto lg:m-0 lg:w-1/2 lg:mt-5">
            {technologyData[activeTab].description}
          </p>
        </div>
      </div>
    </div>
  );
}
