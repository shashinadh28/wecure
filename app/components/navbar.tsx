"use client";

import Image from "next/image";
import { IoMdMedical } from "react-icons/io";
import { animate, motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { Mulish } from "next/font/google";
import { Outfit } from "next/font/google";
import { Fredoka } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";
import { MdPregnantWoman } from "react-icons/md";
import { TbHomeHeart } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";
import { BiSolidHomeHeart } from "react-icons/bi";
import { useAnimation } from "framer-motion";
import "remixicon/fonts/remixicon.css"; // Import Remix Iconszz
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
const out = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const fred = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const dance = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Mont = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navbar(){
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [selectedOption, setSelectedOption] = useState("Actions");
  
    // This function will run when the component comes into view
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 }); // Animate to full opacity and original position
        } else {
          controls.start({ opacity: 0, y: 20 }); // Animate to invisible and slightly down
        }
      });
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(handleScroll);
      const target = document.getElementById("animated-section");
  
      if (target) {
        observer.observe(target);
      }
  
      return () => {
        if (target) {
          observer.unobserve(target);
        }
      };
    }, [controls]);
  
    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    // Function to handle option selection
    const handleSelectOption = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false); // Close the dropdown after selecting an option
    };
  
    const toggleSection = (index: number) => {
      if (openIndex === index) {
        setOpenIndex(null); // Close the currently opened section
      } else {
        setOpenIndex(index); // Open the clicked section
      }
    };
  
    const toggleSlideover = () => {
      setIsVisible((prev) => !prev);
    };
   
   
    return (
        <div>
            <nav>
        {/* bg white */}
        <div className="relative bg-white md:px-48 h-[300px] md:h-[130px]">
          {/* bg white */}
          <div className="container mx-auto flex flex-col md:flex-row md:justify-between space-y-2 items-center">
            {/* Brand Logo */}
            <motion.div className="md:pb-16 md:pt-5 pt-10">
              <Image
                src={"/wecure_logo.png"}
                alt={"LOGO"}
                width={1000}
                height={10}
                className="w-[200px] flex"
              />
            </motion.div>

            <div className="md:flex">
              <header className="lg:pb-16">
                <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
                  <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                    {/* Location */}
                    <div className="flex justify-center items-center">
                      <i className="ri-map-pin-fill text-2xl text-cyan-400"></i>
                      <div className="text-gray-700">
                        123 Arling, Miola , NY
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="text-gray-700 flex justify-center items-center">
                      <i className="ri-phone-fill text-2xl text-cyan-400"></i>
                      91+9025588318
                    </div>

                    {/* Button */}
                    <button className="text-gray-700 border-2 rounded-full w-[190px] h-[50px] py-3 mx-auto lg:mx-auto border-cyan-400 hover:bg-cyan-200 transition-colors duration-300">
                      Book now
                    </button>

                    {/* Mobile Nav Start */}
                    <div className="md:hidden">
                      <div className="w-screen h-screen flex items-center pb-[790px]">
                        {/* Positioned the Icon at Top-Left */}
                        <div
                          onClick={toggleSlideover}
                          className="cursor-pointer px-1 text-sm border text-gray-500 bg-purple-950 hover:bg-gray-100 rounded absolute top-4 left-4"
                        >
                          <i className="ri-arrow-right-s-line text-2xl text-white"></i>
                        </div>
                        <div
                          className={`w-full h-full fixed inset-0 ${
                            isVisible ? "" : "invisible"
                          }`}
                        >
                          <div
                            onClick={toggleSlideover}
                            className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${
                              isVisible ? "opacity-50" : "opacity-0"
                            }`}
                          ></div>

                          {/* Sliding Navigation Panel */}
                          <div
                            onClick={toggleSlideover}
                            className={`w-[300px] bg-pink-200 h-full absolute left-0 duration-300 ease-out transition-all ${
                              isVisible ? "" : "-translate-x-full"
                            }`}
                          >
                            {/* Logo in the Slide-Over */}
                            <div>
                              <div className="flex justify-center flex-col gap-y-12 h-full mt-5 px-12">
                                {/* logo */}
                                <Image
                                  src={"/wecure_logo.png"}
                                  alt={"LOGO"}
                                  width={1000}
                                  height={10}
                                  className="w-[150px] flex"
                                />
                                {/* list */}
                                <ul>
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Mobile Nav End */}
                  </div>
                </div>
              </header>
            </div>
          </div>

          {/* Desktop navbar positioned between white and gray background */}
          <div
            className={`${Mont.className} hidden md:flex md:flex-row space-x-4 text-[15px]  absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 md:bg-white justify-start shadow-2xl shadow-inner pl-12 items-center md:w-[1100px] rounded-xl md:h-[10vh]`}
          >
            <div className=" text-gray-700">Home</div>{" "}
            <span className="bg-gray-300 h-5 w-[1px]"></span>
            <div className=" text-gray-700">Doctors</div>{" "}
            <span className="bg-gray-300 h-5 w-[1px]"></span>
            <div className=" text-gray-700">Department</div>{" "}
            <span className="bg-gray-300 h-5 w-[1px]"></span>
            <div className=" text-gray-700">Services</div>{" "}
            <span className="bg-gray-300 h-5 w-[1px]"></span>
            <div className=" text-gray-700">Blog</div>{" "}
            <span className="bg-gray-300 h-5 w-[1px]"></span>
            <div className=" text-gray-700">Contact</div>{" "}
            <span className="bg-gray-300 h-5 w-[1px]"></span>
            <div className=" ">
              <i className="ri-search-line text-cyan-400 ml-52 text-lg"></i>
              <input
                type="text"
                placeholder="Search..."
                className="w-64 h-7     px-4"
              />
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
}