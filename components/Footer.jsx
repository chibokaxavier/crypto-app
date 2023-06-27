import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaReddit,
  FaTiktok,
} from "react-icons/fa";
import { HiMoon } from "react-icons/hi";
import useAuth from "hooks/useAuth";

const Footer = () => {
  const { signIn, user } = useAuth();
  return (
    <div className="md:w-[1140px] mx-auto shadow-lg  pt-8 mt-8 px-4">
      <div className="grid md:grid-cols-2">
        <div className="justify-evenly  flex w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end md:py-0 md:pb-4 my-5 md:my-0 ">
                {" "}
                <HiMoon />
              </div>
              <p className="text-center md:text-right ">
                Sign up for crypto news
              </p>
              <div className="py-4">
                <form action="">
                  <input
                    className="bg-white rounded-2xl  border p-2 mr-2 w-full shadow-2xl  md:w-auto border-none outline-none text-black"
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <Link href="/signin">
                    {" "}
                    <button className="px-4 p-2 w-full md:w-auto bg-blue-500 hover:shadow-2xl  shadow-xl rounded-2xl my-2  text-white ">
                      Sign Up 
                    </button>
                  </Link>
                </form>
              </div>
              <div className="py-4  justify-between flex text-gray-600">
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebook />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4 "> Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
