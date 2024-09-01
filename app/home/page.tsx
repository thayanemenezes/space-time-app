import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex content-center justify-evenly md:justify-around h-screen items-center w-11/12 m-auto lg:flex-row sm:flex-col flex-col">
      <div className="lg:w-1/2 sm:w-10/12 lg:text-left text-center">
        <h5 className="font-serif md:text-xs text-4xl font-thin m-0 p-0">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className=" md:text-xlg text-8xl m-0 p-0">SPACE</h1>
        <p className="font-serif md:text-xl text-md lg:w-full w-11/12 m-auto lg:text-left text-center">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="md:p-24 p-16 uppercase bg-white text-gray-900 text-3xl rounded-full outline outline-offset-0 outline-bg-transparent hover:outline-50 hover:outline-bg-transparent">
        <Link href="/destination">Explore</Link>
      </button>
    </div>
  );
}
