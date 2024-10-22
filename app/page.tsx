"use client";

import Image from "next/image";
import {  motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { Mulish } from "next/font/google";
import { Outfit } from "next/font/google";
import { Fredoka } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";

import { useAnimation } from "framer-motion";
import "remixicon/fonts/remixicon.css"; // Import Remix Iconszz
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import { Section4 } from "./components/section4";
import Section5 from "./components/section5";

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

export default function Home() {
  const controls = useAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

 



  const toggleSection = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently opened section
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

 
  return (
    <div>
      <Navbar />
      <Section1 />

      <div className="bg-white h-auto w-full">
        <Section2 />

        {/* We got Answers start  */}
        {/*
         */}
        <div>
          <motion.div
            className={`${pop.className} font-semibold text-[5vh] md:text-[7vh]  justify-center pt-20 md:pt-[10vh]  flex text-black `}
         >
            We&apos;ve Got Answers{" "}
          </motion.div>

          {/*  */}
          {/* 1 Why to believe in Inslove */}
          <div>
            <div className="p-6 px-20 md:px-[22rem] pt-20">
              <div className="flex justify-between items-center cursor-pointer">
                <h2 className="text-2xl font-bold text-black items-center justify-center">
                  
                  <div className=" md:hidden">
                    Why to believe in Inslove <br />
                    <span> Medical Healthcare</span>
                  </div>

                  <span className="hidden md:block">
                    Will we get Healthcare Updates After surgery start
                  </span>
                </h2>
                <button
                  className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                  onClick={() => toggleSection(1)}
                >
                  {openIndex === 1 ? "-" : "+"}
                </button>
              </div>
              {openIndex === 1 && (
                <p className="mt-4 text-gray-600 text-lg">
                  Inslove Medical Healthcare offers innovative and trustworthy
                  healthcare services, driven by cutting-edge technology and a
                  commitment to patient care excellence.
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center ml-10 md:ml-[22rem] ">
            <div className="bg-gray-200 h-[2px] w-[62vh] md:w-[51rem]"></div>
          </div>
          {/* 1 end */}

          {/* Will we get Healthcare Updates After surgery */}
          <div className="p-6 px-20 md:px-[22rem] ">
            <div className="flex justify-between items-center cursor-pointer">
              <h2 className="text-2xl font-bold text-black items-center justify-center">
                <div className="md:hidden">
                  Will we get Healthcare <br />
                  <span>Updates After surgery start</span>
                </div>

                <span className="hidden md:block">
                  Will we get Healthcare Updates After surgery start
                </span>
              </h2>
              <button
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                onClick={() => toggleSection(2)}
              >
                {openIndex === 2 ? "-" : "+"}
              </button>
            </div>
            {openIndex === 2 && (
              <p className="mt-4 text-gray-600 text-lg">
                Yes, Inslove Medical Healthcare provides continuous updates
                after surgery to ensure patient well-being and transparency in
                healthcare management.
              </p>
            )}
          </div>

          <div className="flex justify-between items-center ml-10 md:ml-[22rem] ">
            <div className="bg-gray-200 h-[2px] w-[62vh] md:w-[51rem] "></div>
          </div>
          {/* 2 end */}

          {/* 3 What Preparations are necessary before undergoing surgery */}
          <div className="p-6 px-20 md:px-[22rem] ">
            <div className="flex justify-between items-center cursor-pointer">
              <h2 className="text-2xl font-bold text-black items-center justify-center">
                <div className="md:hidden">
                  What preparations are necessary <br />
                  <span>before undergoing surgery</span>
                </div>

                <span className="hidden md:block">
                  What preparations are necessary before undergoing surgery
                </span>
              </h2>
              <button
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                onClick={() => toggleSection(3)}
              >
                {openIndex === 3 ? "-" : "+"}
              </button>
            </div>
            {openIndex === 3 && (
              <p className="mt-4 text-gray-600 text-lg">
                Proper preparations include medical assessments, dietary
                changes, and mental preparation to ensure a smooth surgery and
                recovery process.
              </p>
            )}
          </div>

          <div className="flex justify-between items-center ml-10  md:ml-[22rem] ">
            <div className="bg-gray-200 h-[1px] w-[62vh] md:w-[51rem] "></div>
          </div>
          {/* 3 end */}
          {/*  */}
        </div>

       <Section4/>
        {/* Our Recent Posts start */}
        <Section5/>

        {/* Our Recent Posts end */}
        {/* TEXTS START */}
        <div className=" flex  md:py-[rem] flex-col pt-10 space-y-5 md:flex md:flex-row space-x-14 md:justify-center items-center">
          <div
            className={`${dance.className} text-[#92c4c9] ml-10 font-bold text-[4rem]`}
          >
            {" "}
            Lifetrace
          </div>
          <div
            className={`${fred.className} text-[#92c4c9]  font-bold text-[8vh]`}
          >
            {" "}
            medcare
          </div>
          <div
            className={`${out.className} text-[#92c4c9]  text-[8vh] tracking-widest`}
          >
            {" "}
            BETAL
          </div>
          <div
            className={`${mulish.className} text-[#92c4c9]  text-[8vh] font-semibold`}
          >
            {" "}
            Healer.
          </div>
          <div
            className={`${playfair.className} text-[#92c4c9]  text-[8vh] font-thin tracking-widest`}
          >
            {" "}
            SOVEN
          </div>
        </div>
        {/* TEXTS END */}
        {/* subscribe to get more updates start */}
        <div className="">
          <div className="flex justify-center pt-14">
            <div className=" bg-cyan-500 h-[25rem] w-full ">
              <div className="flex flex-col space-y-0 md:items-start md:flex-row md:justify-evenly items-center">
                <div className="md:items-start md:hidden ">
                  <div
                    className={`${out.className} font-medium text-[20px] pt-14 tracking-widest`}
                  >
                    {" "}
                    OUR NEWSLETTER
                  </div>
                  <div
                    className={`${pop.className} font-semibold text-[6vh] md:text-[8vh] leading-tight`}
                  >
                    Subscribe to get <br />
                    <span className="flex justify-center md:justify-start">
                      more updates
                    </span>
                  </div>
                </div>
                {/* mobile mail id and subscribe start */}
                <div className="md:hidden ">
                  <div className="flex items-center  gap-y-4 flex-col space-x-2">
                    <input
                      type="email"
                      placeholder="Your mail address"
                      className="p-4 pl-4 mt-5 py-5 pr-28 border border-white bg-cyan-500 placeholder:text-white text-white rounded-full"
                    />
                    <button className="bg-white px-28 py-5 rounded-full text-gray-600 ">
                      {" "}
                      SUBSCRIBE{" "}
                    </button>
                  </div>
                </div>
                {/* mobile mail id and subscribe end */}
                {/* desktop mail id and subscribe start */}
                <div className="hidden md:block">
                  <div className="flex flex-col  md:flex-row items-center justify-center mt-5 space-y-5 md:space-y-0 md:space-x-10">
                    {/* Left side - Newsletter Text */}
                    <div className="md:items-start text-center md:text-left">
                      <div
                        className={`${out.className} font-medium text-[20px] pt-14 tracking-widest`}
                      >
                        OUR NEWSLETTER
                      </div>
                      <div
                        className={`${pop.className} font-semibold text-[6vh] md:text-[8vh] leading-tight`}
                      >
                        Subscribe to get <br />
                        <span className="flex justify-center md:justify-start">
                          more updates
                        </span>
                      </div>
                    </div>

                    {/* Right side - Input field and Subscribe button */}
                    <div className=" pt-20 pl-20">
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Your mail address"
                          className="p-4 pl-5 pr-[19rem] py-5 border border-white bg-cyan-500 placeholder:text-white text-white rounded-full w-full"
                        />
                        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full text-gray-600 px-12 py-5">
                          SUBSCRIBE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* desktop mail id and subscribe end */}
              </div>
            </div>
          </div>
        </div>
        {/* subscribe to get more updates end */}
        {/* mobile footer start */}
        <footer className=" md:hidden">
          <div className=" bg-white w-full  h-[19rem]">
            <div className=" flex space-y-5 flex-col">
              <Image
                src={"/wecure_logo.png"}
                alt={"logo"}
                width={1000}
                height={100}
                className="w-[30vh] h-[15vh] pt-10 ml-4"
              />
              <div className={`${mulish.className}  pl-8 pr-10 text-gray-600`}>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              </div>
              <div className=" flex flex-col ml-7">
                <div className=" flex flex-row ">
                  <i className="ri-map-pin-fill text-2xl text-cyan-400"></i>
                  <div className="text-gray-700">123 Arling, Miola , NY</div>
                </div>
                <div className="text-gray-700">
                  <i className="ri-phone-fill text-2xl text-cyan-400"></i>
                  91+9025588318
                </div>

                <div className="text-gray-700">
                  <i className="ri-phone-fill text-2xl text-cyan-400"></i>
                  91+9025588318
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* mobile footer end */}
        {/* desktop footer start */}
        <footer className=" hidden md:block">
          <div className=" bg-white w-full  h-[25rem]">
            {/* divide */}
            <div className="  flex flex-row justify-evenly ">
              <div className="  flex space-y-6 flex-col">
                <Image
                  src={"/wecure_logo.png"}
                  alt={"logo"}
                  width={1000}
                  height={100}
                  className="w-[30vh] h-[15vh] pt-10 ml-4"
                />
                <div className={`${mulish.className}  pl-8   text-gray-600`}>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, <br /> adipisicing
                  elit.Lorem ipsum dolor sit amet
                </div>
                <div className=" flex flex-col ml-7">
                  <div className=" flex flex-row ">
                    <i className="ri-map-pin-fill text-2xl text-cyan-400"></i>
                    <div className="text-gray-700">123 Arling, Miola , NY</div>
                  </div>
                  <div className="text-gray-700">
                    <i className="ri-phone-fill text-2xl text-cyan-400"></i>
                    91+9025588318
                  </div>
                  <div className="text-gray-700">
                    <i className="ri-mail-fill text-2xl text-cyan-400"></i>
                    healthcitywecure@gmail.com
                  </div>
                </div>

                <div className=" flex gap-x-7 ml-8 text-3xl flex-row">
                  <i className="ri-facebook-circle-fill   text-[#8ec7ca] "></i>
                  <i className="ri-instagram-line  text-[#8ec7ca] "></i>
                  <i className="ri-twitter-fill text-[#8ec7ca]"></i>
                  <i className="ri-linkedin-box-fill    text-[#8ec7ca]  "></i>
                </div>
              </div>

              <div className="flex flex-row gap-x-20">
                <div className=" flex flex-col">
                  <span
                    className={`${pop.className} font-bold text-gray-700 mt-20 text-[3vh]`}
                  >
                    Quick Links{" "}
                  </span>

                  <div className="text-gray-600 space-y-4 mt-8">
                    <div>Home </div>
                    <div>Doctors </div>
                    <div>Department </div>
                    <div>Services </div>
                    <div>Blog </div>
                  </div>
                </div>

                <div className=" flex flex-col">
                  <div className="text-gray-600 mt-[20vh] space-y-4">
                    <div>Our Pricing </div>
                    <div>Contact </div>
                    <div>Careers </div>
                    <div>FAQS </div>
                    <div>Privacy Policy </div>
                  </div>
                </div>

                <div className=" flex flex-col">
                  <span
                    className={`${pop.className} font-bold text-gray-700 mt-20 text-[3vh]`}
                  >
                    Opening Hours{" "}
                  </span>

                  <div className="text-gray-600 space-y-4 mt-8">
                    <div>Monday - Thursday </div>
                    <div>Friday - Saturday </div>
                    <div>Sunday </div>
                    <div>Personal </div>
                  </div>
                </div>
                <div className=" flex flex-col">
                  <div className="text-cyan-500 mt-[20vh] space-y-4">
                    <div>8:00 Am - 6:00 Pm </div>
                    <div>10:00 Am - 4:00 Pm</div>
                    <div>Emergency Only </div>
                    <div>7:00 Am - 9:00 Pm </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* divide */}
          </div>
        </footer>
        {/* desktop footer end */}
      </div>
    </div>
  );
}




