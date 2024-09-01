"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center w-full m-auto justify-between pt-5 lg:pt-0">
      <Image
        src={"/assets/shared/logo.svg"}
        alt="logo"
        width={50}
        height={50}
        className="lg:ml-16 ml-5"
      />

      <div className="sm:hidden mr-5">
        <FaBars
          className="text-3xl text-white cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <ul className="hidden mt-10 sm:flex p-12 bg-white bg-opacity-5 backdrop-blur-xs h-12 items-center justify-end space-x-8 text-lg lg:w-8/12 xl:w-7/12 md:w-9/12">
        <li
          className={`font-thin lg:px-5 cursor-pointer hover:border-b-2 hover:border-gray-200 ${
            isActive("/home")
              ? "border-b-2 border-gray-200"
              : "border-b-2 border-transparent"
          }`}
        >
          <Link
            href="/home"
            className={`flex items-center ${
              isActive("/home") ? "text-gray-200" : "text-white"
            }`}
          >
            <span className="font-bold mr-2">00</span> HOME
          </Link>
        </li>
        <li
          className={`font-thin lg:px-5 cursor-pointer hover:border-b-2 hover:border-gray-200 ${
            isActive("/destination")
              ? "border-b-2 border-gray-200"
              : "border-b-2 border-transparent"
          }`}
        >
          <Link
            href="/destination"
            className={`flex items-center ${
              isActive("/destination") ? "text-gray-200" : "text-white"
            }`}
          >
            <span className="font-bold mr-2">01</span> DESTINATION
          </Link>
        </li>
        <li
          className={`font-thin lg:px-5 cursor-pointer hover:border-b-2 hover:border-gray-200 ${
            isActive("/crew")
              ? "border-b-2 border-gray-200"
              : "border-b-2 border-transparent"
          }`}
        >
          <Link
            href="/crew"
            className={`flex items-center ${
              isActive("/crew") ? "text-gray-200" : "text-white"
            }`}
          >
            <span className="font-bold mr-2">02</span> CREW
          </Link>
        </li>
        <li
          className={`font-thin lg:px-5 cursor-pointer hover:border-b-2 hover:border-gray-200 ${
            isActive("/technology")
              ? "border-b-2 border-gray-200"
              : "border-b-2 border-transparent"
          }`}
        >
          <Link
            href="/technology"
            className={`flex items-center ${
              isActive("/technology") ? "text-gray-200" : "text-white"
            }`}
          >
            <span className="font-bold mr-2">03</span> TECHNOLOGY
          </Link>
        </li>
      </ul>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-4/6 bg-white bg-opacity-5 backdrop-blur-xs  z-50 p-8 flex flex-col">
          <IoClose
            className="text-4xl text-white ml-auto cursor-pointer"
            onClick={toggleMenu}
          />
          <nav className="mt-10 space-y-6">
            <Link
              href="/home"
              className={`block text-2xl ${
                isActive("/home") ? "text-gray-200" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              00 HOME
            </Link>
            <Link
              href="/destination"
              className={`block text-2xl ${
                isActive("/destination") ? "text-gray-200" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              01 DESTINATION
            </Link>
            <Link
              href="/crew"
              className={`block text-2xl ${
                isActive("/crew") ? "text-gray-200" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              02 CREW
            </Link>
            <Link
              href="/technology"
              className={`block text-2xl ${
                isActive("/technology") ? "text-gray-200" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              03 TECHNOLOGY
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
