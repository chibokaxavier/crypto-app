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

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>API Status</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h2>Info</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Invest</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                {" "}
                <HiMoon />{" "}
              </div>
              <p>Sign up for crypto news</p>
              <div>
                <form action="">
                  <input type="text" placeholder="Enter your Email" />
                  <button>Sign in</button>
                </form>
              </div>
              <div>
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
