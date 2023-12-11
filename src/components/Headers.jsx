import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/icons/logo.svg";
import hero from "../assets/img/pic.png";
import star from "../assets/img/Star.png";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#28293E] py-7 relative ">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="site logo" width={152} height={48} />
        <nav className="hidden sm:flex md:items-center md:gap-11 ">
          <ul className="flex gap-11">
            <li>
              <a
                className="text-white no-underline hover:text-gray-400"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-white no-underline hover:text-gray-400"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-white no-underline hover:text-gray-400"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-white no-underline hover:text-gray-400"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
          <a
            className="text-white uppercase font-extrabold text-sm py-4 px-9 border border-[#fff] rounded-lg hidden sm:flex"
            href="#"
          >
            Contact
          </a>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white border border-white rounded-md p-2 block sm:hidden"
        >
          <IoMenu />
        </button>
        {isOpen && (
          <nav className="md:hidden absolute top-full bg-[#28293e] w-full right-0">
            <ul className="flex flex-col p-10 gap-11">
              <li>
                <a
                  className="text-white no-underline hover:text-gray-400"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white no-underline hover:text-gray-400"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-white no-underline hover:text-gray-400"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-white no-underline hover:text-gray-400"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
            <span
              style={{ "font-family": "Epilogue-Regular" }}
              className="font-normal text-base text-white pl-[46px]"
            >
              Contact Us
            </span>
          </nav>
        )}
      </div>

      <div className="container hero flex h-full relative items-center justify-between  sm:flex-wrap sm:justify-center sm:gap-y-4">
        <img src={hero} alt="hero" />
        <div className="">
          <span
            style={{ "font-family": "Epilogue-Regular" }}
            className="text-[#EF6D58] font-normal text-2xl leading-32 tracking-tight text-base"
          >
            Modern Studio
          </span>
          <h1
            style={{ "font-family": "Epilogue-Bold" }}
            className="title font-extrabold text-7xl text-white pt-6 leading-20 tracking-tighter relative max-w-lg w-full font-extrabold"
          >
            We’re Help <br /> To Build Your Dream Project
          </h1>
          <img className="star absolute left-55" src={star} alt="star" />
          <p
            style={{ "font-family": "Epilogue-Regular" }}
            className="leading-8 text-white py-6 max-w-lg font-normal text-base opacity-60 w-full"
          >
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
          <button
            style={{ "font-family": "Epilogue-Bold" }}
            className="bg-[#EF6D58] pt-4 pr-9 pb-4 pl-9 rounded-lg border-none text-base uppercase text-center text-white font-black"
          >
            How We Work
          </button>
          <span
            style={{ "font-family": "Epilogue-Regular" }}
            className="font-normal text-base text-white pl-[46px]"
          >
            Contact Us
          </span>
        </div>
      </div>
    </header>
  );
};

export default Headers;
