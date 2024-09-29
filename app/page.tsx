"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import { MdPregnantWoman } from "react-icons/md";
import { TbHomeHeart } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";
import { BiSolidHomeHeart } from "react-icons/bi";
import "remixicon/fonts/remixicon.css"; // Import Remix Iconszz

const pop = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
const Mont = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

      {/* hero section start */}
      <div className="bg-gray-100 w-full h-[600px] flex justify-center items-center">
        {/* row start */}
        <div className=" space-y-10 md:pb-1   flex flex-col md:justify-evenly md:px-64 md:flex-row items-center text-center md:text-left">
          {/* col start */}
          <div className="flex flex-col space-y-5   md:space-y-6 items-center md:items-start">
            {/* LIVE YOUR LIFE START */}
            <div className="bg-white h-14 w-[210px] rounded-full items-center flex justify-center text-gray-600">
              <div className="inline flex space-x-3 text-lg">
                <i className="ri-heart-pulse-line text-cyan-400 flex space-x-7 text-2xl"></i>
                <div className="">LIVE YOUR LIFE</div>
              </div>
            </div>
            {/* LIVE YOUR LIFE end */}

            {/* WE CARE ABOUT YOUR HEALTH START */}
            <div className="">
              <div className="font-bold text-black text-[8vh] leading-tight">
                We care about <br />
                <span>Your Health</span>
              </div>
            </div>
            {/* WE CARE ABOUT YOUR HEALTH end */}

            {/* lorem start */}
            <div className="text-gray-700 flex md:px-3 md:mr-10 text-lg px-5 justify-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              itaque cum quibusdam. Magnam, adipisci? Sint qui quas,
              necessitatibus eveniet ipsum aliquam non ea similique
            </div>
            {/* lorem end */}

            {/* button start */}
            <div className="">
              <div className="">
                <button className="text-white border-2 rounded-full w-[190px] h-[50px] py-3 mx-auto lg:mx-auto border-cyan-400 hover:bg-cyan-500 transition-colors duration-300 bg-cyan-400">
                  CONTACT US
                </button>
              </div>
            </div>
            {/* button end */}
          </div>
          {/* col end */}

          {/* Hide image on small screens */}
          <Image
            src={"/lady_doctor.png"}
            alt={"doctor"}
            width={2000}
            height={100}
            className="hidden md:block md:pb-2 w-[400px]"
          />
        </div>
        {/* row end */}
      </div>
      {/* hero section end */}

      <div className="bg-white h-[780vh] w-full">
        {/* digits start */}
        <div className="md:flex md:flex-row">
          {/*5160 start  */}
          <div className=" flex flex-col justify-center items-center space-y md:flex-row md:space-x-28 md:pl-40 md:pt-20 pt-10">
            <div className="md:flex-col">
              <div
                className={`${pop.className} text-[#92c4c9] font-bold text-[3.5rem] leading-tight md:pt-1  flex items-center justify-center`}
              >
                {" "}
                +5120
              </div>
              <div
                className={`${pop.className} text-gray-700 text-[25px] md:text-[17px]  flex items-center justify-center `}
              >
                {" "}
                Happy Patients
              </div>
            </div>
            <div className="md:bg-gray-200 md:h-20 transpera  md:w-[2px]"></div>
            <div className="md:flex-col">
              <div
                className={`${pop.className} text-[#92c4c9] font-bold text-[3rem] leading-tight pt-10 md:pt-1 flex items-center justify-center`}
              >
                {" "}
                26
              </div>
              <div
                className={`${pop.className} text-gray-700 text-[25px] md:text-[17px]  flex items-center justify-center`}
              >
                {" "}
                Total Branches
              </div>
            </div>
            <div className="md:bg-gray-200 md:h-20  md:w-[2px]"></div>
            <div className="md:flex-col">
              <div
                className={`${pop.className} text-[#92c4c9] font-bold text-[3rem] leading-tight pt-10 md:pt-1 flex items-center justify-center`}
              >
                {" "}
                +53
              </div>
              <div
                className={`${pop.className} text-gray-700 text-[25px] md:text-[17px]  flex items-center justify-center`}
              >
                {" "}
                Senior Doctors
              </div>
            </div>
            <div className="md:bg-gray-200 md:h-20  md:w-[2px]"></div>
            <div className="md:flex-col">
              <div
                className={`${pop.className} text-[#92c4c9] font-bold text-[3rem] leading-tight pt-10 md:pt-1 flex items-center justify-center`}
              >
                {" "}
                +10
              </div>
              <div
                className={`${pop.className} text-gray-600 text-[25px] md:text-[17px]  flex items-center justify-center  `}
              >
                {" "}
                Year experience
              </div>
            </div>
          </div>
          {/*5160 start  */}
        </div>{" "}
        {/* digits end */}
        {/* our best services for your solution start */}
        <div className="flex items-center justify-center pt-20">
          {/* blue bg start */}
          <div className="bg-[#1dc1de] relative h-[400px] w-[380px] md:w-[1180px] md:h-[320px] rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:items-start pt-14">
              <div
                className={`${pop.className} font-semibold text-[5vh] leading-tight text-white md:hidden `}
              >
                Our Best Services <br /> For Your Solution
              </div>

              {/* Left Section for Heading */}
              <div
                className={`${pop.className} font-semibold text-[5vh] md:leading-tight text-white md:w-1/2 pl-5 md:pl-20 md:block hidden`}
              >
                Our Best Services For Your <br /> Solution
              </div>

              {/* Right Section for Text */}
              <div className="text-white px-10 md:px-0 md:w-1/2 md:pl-20 md:pr-10 pt-5 md:pt-0 tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                qui obcaecati molestias dicta vitae, eligendi perferendis,
                maiores dolor voluptatibus eum eius error nulla
              </div>
            </div>

            {/* our best  services   desktop for your solution start */}
            {/* hidden: This ensures that the entire row of boxes is hidden on all screens by default.
md:flex: From medium-sized screens (md) and above, the boxes will be displayed in a row using flex. */}
            <div className="hidden md:flex justify-evenly mt-14">
              {/* 1 col start */}
              <div className="bg-white h-[240px] w-[240px] rounded-2xl shadow-2xl">
                <div className=" md:flex md:flex-col md:justify-center md:space-y-2  md:items-center">
                  <BiSolidHomeHeart className=" md:text-cyan-600 md:text-[8vh] md:pt-5 " />

                  <div
                    className={`${pop.className} md:text-gray-600 md:font-bold md:leading-tight md:text-[20px] mt-0`}
                  >
                    <span className="ml-7">General</span> <br /> Practitioners
                  </div>
                  <div className="text-gray-400 flex px-7 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat in officiis consectetur adipisicing elit
                  </div>
                </div>
              </div>{" "}
              {/* 1 col end */}
              {/* 2 col start */}
              <div className="bg-white h-[240px] w-[240px] rounded-2xl shadow-2xl">
                <div className=" md:flex md:flex-col md:justify-center md:space-y-2  md:items-center">
                  <MdPregnantWoman className=" md:text-cyan-600 md:text-[8vh] md:pt-5 " />

                  <div
                    className={`${pop.className} md:text-gray-600 md:font-bold md:leading-tight md:text-[20px] mt-0`}
                  >
                    <span>Pregnancy</span> <br />{" "}
                    <span className="ml-4">Support</span>
                  </div>
                  <div className="text-gray-400 flex px-7 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat in officiis consectetur adipisicing elit
                  </div>
                </div>
              </div>{" "}
              {/* 2 col end */}
              {/* 3 col start */}
              <div className="bg-white h-[240px] w-[240px] rounded-2xl shadow-2xl">
                <div className=" md:flex md:flex-col md:justify-center md:space-y-2  md:items-center">
                  <GiFruitBowl className=" md:text-cyan-600 md:text-[8vh] md:pt-5 " />

                  <div
                    className={`${pop.className} md:text-gray-600 md:font-bold md:leading-tight md:text-[20px] mt-0`}
                  >
                    <span>Nutriotional</span> <br />{" "}
                    <span className="ml-4">Support</span>
                  </div>
                  <div className="text-gray-400 flex px-7 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat in officiis consectetur adipisicing elit
                  </div>
                </div>
              </div>{" "}
              {/* 3 col end */}
              {/* 3 col start */}
              <div className="bg-white h-[240px] w-[240px] rounded-2xl shadow-2xl">
                <div className=" md:flex md:flex-col md:justify-center md:space-y-2  md:items-center">
                  <MdLocalPharmacy className=" md:text-cyan-600 md:text-[8vh] md:pt-5 " />

                  <div
                    className={`${pop.className} md:text-gray-600 md:font-bold md:leading-tight md:text-[20px] mt-0`}
                  >
                    <span>Paramaceutical</span> <br />{" "}
                    <span className="ml-14">Care</span>
                  </div>
                  <div className="text-gray-400 flex px-7 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat in officiis consectetur adipisicing elit
                  </div>
                </div>
              </div>{" "}
              {/* 3 col end */}
            </div>
          </div>{" "}
          {/* blue bg end */}
        </div>
        {/* our best  services   desktop for your solution end */}
        {/* our best  services   Mobile for your solution start */}
        <div className=" md:hidden flex justify-center items-center space-y-7 flex-col pt-10">
          {/* 1 start */}
          <div className="bg-white shadow-md h-[40vh] rounded-xl w-[40vh]">
            <div className=" flex flex-col justify-center space-y-2  items-center">
              <BiSolidHomeHeart className=" text-cyan-600 text-[8vh] pt-5 " />

              <div
                className={`${pop.className} text-gray-600 font-bold leading-tight text-[20px] mt-0`}
              >
                <span className="ml-7">General</span> <br /> Practitioners
              </div>
              <div className="text-gray-400 flex px-4 ml-6 text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                in officiis consectetur adipisicing elit
              </div>
            </div>
          </div>
          {/* 1 end */}

          {/* 2 start */}

          <div className="bg-white shadow-md h-[40vh] rounded-xl w-[40vh]">
            <div className=" flex flex-col justify-center space-y-2  items-center">
              <MdPregnantWoman className=" text-cyan-600 text-[8vh] pt-5 " />

              <div
                className={`${pop.className} text-gray-600 font-bold leading-tight text-[20px] mt-0`}
              >
                <span>Pregnancy</span> <br />{" "}
                <span className="ml-4">Support</span>
              </div>
              <div className="text-gray-400 flex px-4 ml-6 text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                in officiis consectetur adipisicing elit
              </div>
            </div>
          </div>
          {/* 2 end */}
          {/* 3 start */}

          <div className="bg-white shadow-md h-[40vh] rounded-xl w-[40vh]">
            <div className=" flex flex-col justify-center space-y-2  items-center">
              <GiFruitBowl className=" text-cyan-600 text-[8vh] pt-5 " />

              <div
                className={`${pop.className} text-gray-600 font-bold leading-tight text-[20px] mt-0`}
              >
                <span>Nutriotional</span> <br />{" "}
                <span className="ml-4">Support</span>
              </div>
              <div className="text-gray-400 flex px-4 ml-6 text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                in officiis consectetur adipisicing elit
              </div>
            </div>
          </div>
          {/* 3 end */}
          {/* 4 start */}

          <div className="bg-white shadow-md h-[40vh] rounded-xl w-[40vh]">
            <div className=" flex flex-col justify-center space-y-2  items-center">
              <MdLocalPharmacy className=" text-cyan-600 text-[8vh] pt-5 " />

              <div
                className={`${pop.className} text-gray-600 font-bold leading-tight text-[20px] mt-0`}
              >
                <span>Paramaceutical</span> <br />{" "}
                <span className="ml-14">Care</span>
              </div>
              <div className="text-gray-400 flex px-4 ml-6 text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                in officiis consectetur adipisicing elit
              </div>
            </div>
          </div>
          {/* 4 end */}
        </div>
        {/* our best  services   Mobile for your solution end */}
        {/* Book an Apointment  or Call: start  */}
        <div className=" flex flex-col md:ml-36">
          <div className=" font-bold text-black text-[6vh] md:text-[7vh] ml-8 md:mt-[250px]  mt-10">
            {" "}
            Book Appoinment Or Call:{" "}
            <span className=" text-cyan-600">(91+9289282874)</span>
          </div>
        </div>
        {/* Book an Apointment  or Call: end  */}
        <div className=" bg-white  flex justify-center items-center">
          <div className=" border-solid border-gray-500 border-[1px] text-gray-400 rounded cursor-pointer font-bold   px-5 py-2 ">
            Department 1
          </div>
        </div>
        {/* Our team start */}
        {/* Our team end */}
        {/* We got Answers start  */}
        <div>
          <div
            className={`${pop.className} font-semibold text-[5vh]  justify-center pt-20  flex text-black `}
          >
            We've Got Answers{" "}
          </div>
             {/* Why to believe in Inslove
            Medical Healthcare start   */}
          <div className="p-6 px-20 pt-20">
            <div className="flex justify-between items-center cursor-pointer ">
              <h2 className="text-2xl font-bold text-black items-center justify-center">
                Why to believe in Inslove <br />
                <span>Medical Healthcare</span>
              </h2>
              <button
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "-" : "+"}
              </button>
            </div>
            {isOpen && (
              <p className="mt-4 text-gray-600 text-lg">
                Inslove Medical Healthcare offers innovative and trustworthy
                healthcare services, driven by cutting-edge technology and a
                commitment to patient care excellence.
              </p>
            )}
          </div>
          {/* Why to believe in Inslove
             Medical Healthcare end   */}
             
          <div className="flex justify-between items-center ml-10 ">
            <div className=" bg-gray-200 h-[2px] w-[62vh]  "></div>
          </div>
 
          {/* Will we get Healthcare Updates After surgery start   */}
          <div className="p-6 px-20">
            <div className="flex justify-between items-center cursor-pointer ">
              <h2 className="text-2xl font-bold text-black items-center justify-center">
              Will we get Healthcare <br />
                <span>Updates After surgery start</span>
              </h2>
              <button
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "-" : "+"}
              </button>
            </div>
            {isOpen && (
              <p className="mt-4 text-gray-600 text-lg">
                Inslove Medical Healthcare offers innovative and trustworthy
                healthcare services, driven by cutting-edge technology and a
                commitment to patient care excellence.
              </p>
            )}
          </div>
          {/* Will we get Healthcare Updates After surgery end   */}
             <div className="flex justify-between items-center ml-10 ">
            <div className=" bg-gray-200 h-[1px] w-[62vh]  "></div>
          </div>

          {/* What Preparations are necessary before undergoing surgery start   */}
          <div className="p-6 px-20">
            <div className="flex justify-between items-center cursor-pointer ">
              <h2 className="text-2xl font-bold text-black items-center justify-center">
              What Preparations are <br />
                <span>necessary before</span> <br />
                <span>undergoing surgery </span>
              </h2>
              <button
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "-" : "+"}
              </button>
            </div>
            {isOpen && (
              <p className="mt-4 text-gray-600 text-lg">
                Inslove Medical Healthcare offers innovative and trustworthy
                healthcare services, driven by cutting-edge technology and a
                commitment to patient care excellence.
              </p>
            )}
          </div>
          {/* What Preparations are necessary before undergoing surgery end   */}
             <div className="flex justify-between items-center ml-10 ">
            <div className=" bg-gray-200 h-[1px] w-[62vh]  "></div>
          </div>

          {/* What Preparations are necessary before undergoing surgery start   */}
          <div className="p-6 px-20">
            <div className="flex justify-between items-center cursor-pointer ">
              <h2 className="text-2xl font-bold text-black items-center justify-center">
              What Preparations are <br />
                <span>necessary before</span> <br />
                <span>undergoing surgery </span>
              </h2>
              <button
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "-" : "+"}
              </button>
            </div>
            {isOpen && (
              <p className="mt-4 text-gray-600 text-lg">
                Inslove Medical Healthcare offers innovative and trustworthy
                healthcare services, driven by cutting-edge technology and a
                commitment to patient care excellence.
              </p>
            )}
          </div>
          {/* What Preparations are necessary before undergoing surgery end   */}
             <div className="flex justify-between items-center ml-10 ">
            <div className=" bg-gray-200 h-[1px] w-[62vh]  "></div>
          </div>


        </div> 
          {/* We got Answers start */}
      </div>
    </div>
  );
}
