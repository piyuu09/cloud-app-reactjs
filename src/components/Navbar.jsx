import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import cloud from "../assets/cloud.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
          <Link
                to="home"
                smooth={true}
                offset={0}
                duration={500}
                > 
                <h1 className="cursor-pointer flex items-center text-3xl font-bold mr-4 sm:text-4xl">
              <img src={cloud} alt="" width={50} className="mr-2" />
              Cloud.
            </h1>
            </Link>
            <ul className="hidden md:flex">
              <li className="cursor-pointer hover:text-indigo-600 hover:underline hover:underline-offset-8">
                <Link
                to="home"
                smooth={true}
                offset={0}
                duration={500}
                > Home</Link>
                </li>
              <li className="cursor-pointer hover:text-indigo-600 hover:underline hover:underline-offset-8">
                <Link
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                > About</Link>
                </li>
              <li className="cursor-pointer hover:text-indigo-600 hover:underline hover:underline-offset-8">
                <Link
                to="support"
                smooth={true}
                offset={-50}
                duration={500}
                > Support</Link>
                </li>
              <li className="cursor-pointer hover:text-indigo-600 hover:underline hover:underline-offset-8">
                <Link
                to="platforms"
                smooth={true}
                offset={-150}
                duration={500}
                > Platforms</Link>
                </li>
              <li className="cursor-pointer hover:text-indigo-600 hover:underline hover:underline-offset-8">
                <Link
                to="pricing"
                smooth={true}
                offset={50}
                duration={500}
                > Pricing</Link>
                </li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign In</button>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>
        <ul className={!nav ? "hidden":"absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-2 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
