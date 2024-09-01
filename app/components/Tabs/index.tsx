"use client";

import React from "react";

interface DestinationTabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function DestinationTabs({
  activeTab,
  setActiveTab,
}: DestinationTabsProps) {
  const tabContent: Record<
    string,
    { title: string; text: string; distance: string; travelTime: string }
  > = {
    MOON: {
      title: "MOON",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 days",
    },
    MARS: {
      title: "MARS",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 million km",
      travelTime: "9 months",
    },
    EUROPA: {
      title: "EUROPA",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628.3 million km",
      travelTime: "6 years",
    },
    TITAN: {
      title: "TITAN",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.2 billion km",
      travelTime: "7 years",
    },
  };

  const isActive = (tab: string) => activeTab === tab;

  return (
    <div className=" text-sm font-medium lg:w-2/6">
      <ul className="flex flex-wrap -mb-px ">
        {Object.keys(tabContent).map((tab) => (
          <li
            key={tab}
            className="me-2 text-lg font-sans_serif tracking-widest"
          >
            <button
              onClick={() => setActiveTab(tab)}
              className={`inline-block p-2 border-b-2 ${
                isActive(tab)
                  ? "border-gray-300 text-gray-200"
                  : "border-transparent hover:text-gray-400 hover:border-gray-300"
              } rounded-t-lg`}
            >
              {tabContent[tab].title}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 text-lg">
        <h2 className="md:text-8xl text-5xl font-normal">
          {tabContent[activeTab].title}
        </h2>
        <p className="mt-2 font-text text-base">{tabContent[activeTab].text}</p>
        <hr className="mt-5 h-px my-8 bg-gray-600 border-0" />
        <div className="mt-5 flex justify-between lg:w-4/6 w-5/6">
          <div>
            <p className="uppercase font-sans_serif tracking-wider text-gray-400">
              Distance:
            </p>
            <p className="uppercase text-xl">
              {tabContent[activeTab].distance}
            </p>
          </div>
          <div>
            <p className="uppercase text-gray-400 font-sans_serif tracking-wider">
              Travel Time:
            </p>
            <p className="uppercase text-xl">
              {tabContent[activeTab].travelTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
