import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex content-center justify-evenly md:justify-around h-screen items-center w-11/12 m-auto lg:flex-row sm:flex-col flex-col">
      <div className="lg:w-1/2 sm:w-10/12 lg:text-left text-center">
        <h5 className="font-sans_serif text-gray-300 md:text-xs text-3xl font-thin mb-4 p-0 tracking-widest">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className=" md:text-xlg text-8xl m-0 p-0">SPACE</h1>
        <p className="font-text text-gray-300 md:text-xl text-lg lg:w-full w-11/12 m-auto lg:text-left text-center">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="md:p-20 p-10 uppercase bg-white text-gray-900 lg:text-3xl text-lg rounded-full outline outline-offset-0 outline-bg-transparent hover:outline-50 hover:outline-bg-transparent">
        <Link href="/destination">Explore</Link>
      </button>
    </div>
  );
}
