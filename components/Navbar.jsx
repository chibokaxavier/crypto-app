import Link from "next/link";
import React, { useState } from "react";
import { HiMoon } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-[100%] shadow-2xl rounded-lg mx-auto flex items-center justify-between h-20 font-bold px-4">
      <Link href={"/"}>
        <h1 className="text-2xl">CryptoBase</h1>
      </Link>
      <div className="hidden md:flex md:items-center md:space-x-4 cursor-pointer ">
        <HiMoon />
        <span>Dark Mode</span>
      </div>
      <div className="hidden md:block">
        <Link href="/signin" className="p-4 hover:text-accent">
          Sign In
        </Link>
        <Link
          href="/signup"
          className="px-5 py-2 bg-gray-700 rounded-2xl hover:shadow-2xl text-white items-center ml-2 shadow-lg "
        >
          Sign Up
        </Link>
      </div>
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer z-10 mr-4"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* mobile menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col justify-between w-full  h-[70%] ease-in duration-300  z-10"
            : "fixed left-[-100%] top-20 flex flex-col justify-between w-full  h-[70%] ease-in duration-300  z-10 "
        }
      >
        <ul className="w-full p-4 ">
          <li className="border-b py-6">
            <Link href="/">Home</Link>
          </li>
          <li className="border-b py-6">
            <Link href="/">Account</Link>
          </li>
          <li className="py-6">
            <div className="flex items-center space-x-4 cursor-pointer ">
              <HiMoon />
              <span>Dark Mode</span>
            </div>
          </li>
        </ul>
        <div className="flex flex-col w-full p-4 ">
          <Link href="signin">
            {" "}
            <button className="w-full my-2 p-3 bg-slate-400 rounded-2xl shadow-xl">
              Sign In
            </button>{" "}
          </Link>
          <Link href="signup">
            {" "}
            <button className="w-full my-2 p-3  bg-blue-700 rounded-2xl shadow-xl">
              Sign Up
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
