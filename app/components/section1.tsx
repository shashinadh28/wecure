"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";


import { useAnimation } from "framer-motion";
import "remixicon/fonts/remixicon.css"; // Import Remix Iconszz
import { useEffect } from "react";



export default function Section1(){
    
    const controls = useAnimation();
   
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
    
    return (
        <div>
            {/* hero section start */}
      <div className="bg-gray-100 w-full h-[600px] flex justify-center items-center">
        {/* row start */}
        <div className=" space-y-10 md:pb-1   flex flex-col md:justify-evenly md:px-64 md:flex-row items-center text-center md:text-left">
          {/* col start */}
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7, // Reduced duration for faster animation
              ease: [0.42, 0, 0.58, 1], // Custom ease (cubic-bezier) for smoother transition
            }}
            className="flex flex-col space-y-5   md:space-y-6 items-center md:items-start "
          >
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
          </motion.div>
          {/* col end */}

          {/* Hide image on small screens */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50, // Start slightly below
            }}
            animate={{
              opacity: 1,
              y: 0, // Slide upwards to its original position
            }}
            transition={{
              duration: 1.5, // Fast transition
              ease: [0.42, 0, 0.58, 1], // Smooth cubic-bezier for natural flow
            }}
          >
            <Image
              src={"/lady_doctor.png"}
              alt={"doctor"}
              width={2000}
              height={100}
              className="hidden md:block md:pb-2 w-[900px]"
            />
          </motion.div>
        </div>
        {/* row end */}
      </div>
      {/* hero section end */}
        </div>
    );
}