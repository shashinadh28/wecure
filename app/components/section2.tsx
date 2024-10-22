"use client";

import Image from "next/image";
import {  motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";

import { Outfit } from "next/font/google";

import { Poppins } from "next/font/google";
import { MdPregnantWoman } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";
import { BiSolidHomeHeart } from "react-icons/bi";
import { useAnimation } from "framer-motion";
import "remixicon/fonts/remixicon.css"; // Import Remix Iconszz
import { useEffect } from "react";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});


const out = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Section2() {
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
      {/* ---------------------- */}
      {/* digits start */}
      <div className="md:flex md:flex-row">
        {/*5160 start  */}
        <motion.div
          id="animated-section" // Add an ID for the observer to reference
          className="md:flex md:flex-row"
          initial={{ opacity: 0, y: -100 }} // Start invisible and slightly down
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }} // Set a duration for the animation
          viewport={{ once: true }} // Only animate once when in view
        >
          {/*5160 start*/}
          <div className="flex flex-col justify-center items-center space-y md:flex-row md:space-x-24 md:pl-40 md:pt-20 pt-10">
            <div className="md:flex-col">
              <div
                className={`${pop.className} text-[#92c4c9] font-bold text-[3.5rem] leading-tight md:pt-1 flex items-center justify-center`}
              >
                +5120
              </div>
              <div
                className={`${pop.className} text-gray-700 text-[25px] md:text-[17px] flex items-center justify-center`}
              >
                Happy Patients
              </div>
            </div>

            <div className="md:bg-gray-200 md:h-20 transpera md:w-[2px]"></div>
            <div className="md:flex-col">
              <div
                className={`${pop.className} text-[#92c4c9] font-bold text-[3rem] leading-tight pt-10 md:pt-1 flex items-center justify-center`}
              >
                26
              </div>
              <div
                className={`${pop.className} text-gray-700 text-[25px] md:text-[17px] flex items-center justify-center`}
              >
                Total Branches
              </div>
            </div>
            <div className="md:bg-gray-200 md:h-20 md:w-[2px]"></div>
            <div className="md:flex-col">
              <div
                className={`${pop.className} text-[#92c4c9] font-bold text-[3rem] leading-tight pt-10 md:pt-1 flex items-center justify-center`}
              >
                +53
              </div>
              <div
                className={`${pop.className} text-gray-700 text-[25px] md:text-[17px] flex items-center justify-center`}
              >
                Senior Doctors
              </div>
            </div>
            <div className="md:bg-gray-200 md:h-20 md:w-[2px]"></div>
            <div className="md:flex-col">
              <div
                className={`${pop.className} text-[#92c4c9] font-bold text-[3rem] leading-tight pt-10 md:pt-1 flex items-center justify-center`}
              >
                +10
              </div>
              <div
                className={`${pop.className} text-gray-600 text-[25px] md:text-[17px] flex items-center justify-center`}
              >
                Year experience
              </div>
            </div>
          </div>
        </motion.div>

        {/*5160 start  */}
      </div>{" "}
      {/* digits end */}
      {/* our best services for your solution start */}
      <div className="flex items-center justify-center pt-20">
        {/* blue bg start */}
        <motion.div
          className="bg-[#1dc1de] relative h-[400px] w-[380px] md:w-[1180px] md:h-[320px] rounded-3xl"
          initial={{ opacity: 0, y: 100 }} // Start invisible and lower
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up on scroll
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: true }} // Only animate once when in view
        >
          {" "}
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
              qui obcaecati molestias dicta vitae, eligendi perferendis, maiores
              dolor voluptatibus eum eius error nulla
            </div>
          </div>
          {/* our best  services   desktop for your solution start */}
          {/* hidden: This ensures that the entire row of boxes is hidden on all screens by default.
                 md:flex: From medium-sized screens (md) and above, the boxes will be displayed in a row using flex. */}
          <div className="hidden md:flex justify-evenly mt-14">
            {/* 1 col start */}
            <div>
              {/* Other components or content can go here */}
              <motion.div
                id="animated-section" // Add an ID for the observer to reference
                className="bg-white h-[240px] w-[240px] rounded-2xl shadow-2xl"
                initial={{ opacity: 0, y: 100 }} // Start invisible and slightly down
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }} // Set a duration for the animation
                viewport={{ once: true }} // Only animate once when in view
              >
                <div className="md:flex md:flex-col md:justify-center md:space-y-2 md:items-center">
                  <BiSolidHomeHeart className="md:text-cyan-600 md:text-[8vh] md:pt-5" />
                  <div className="md:text-gray-600 md:font-bold md:leading-tight md:text-[20px] mt-0">
                    <span className="ml-7">General</span> <br /> Practitioners
                  </div>
                  <div className="text-gray-400 flex px-7 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat in officiis consectetur adipisicing elit
                  </div>
                </div>
              </motion.div>
            </div>
            {/* 1 col end */}
            {/* 2 col start */}
            <motion.div
              id="animated-section" // Add an ID for the observer to reference
              className="bg-white h-[240px] w-[240px] rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 100 }} // Start invisible and slightly down
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }} // Set a duration for the animation
              viewport={{ once: true }} // Only animate once when in view
            >
              <div className="md:flex md:flex-col md:justify-center md:space-y-2 md:items-center">
                <MdPregnantWoman className="md:text-cyan-600 md:text-[8vh] md:pt-5" />
                <div
                  className={`${pop.className} md:text-gray-600 md:font-bold md:leading-tight md:text-[20px] mt-0`}
                >
                  <span>Pregnancy</span> <br />
                  <span className="ml-4">Support</span>
                </div>
                <div className="text-gray-400 flex px-7 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat in officiis consectetur adipisicing elit
                </div>
              </div>
            </motion.div>
            {/* 2 col end */}

            {/* 3 col start */}
            <motion.div
              id="animated-section" // Add an ID for the observer to reference
              className="bg-white h-[240px] w-[240px] rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 100 }} // Start invisible and slightly down
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }} // Only animate once when in view
            >
              <div className="md:flex md:flex-col md:justify-center md:space-y-2 md:items-center">
                <GiFruitBowl className="md:text-cyan-600 md:text-[8vh] md:pt-5" />
                <div
                  className={`${pop.className} md:text-gray-600 md:font-bold md:leading-tight md:text-[20px] mt-0`}
                >
                  <span>Nutriotional</span> <br />
                  <span className="ml-4">Support</span>
                </div>
                <div className="text-gray-400 flex px-7 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat in officiis consectetur adipisicing elit
                </div>
              </div>
            </motion.div>
            {/* 3 col end */}

            {/* 3 col start */}
            <motion.div
              id="animated-section" // Add an ID for the observer to reference
              className="bg-white h-[240px] w-[240px] rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 100 }} // Start invisible and slightly down
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              viewport={{ once: true }} // Only animate once when in view
            >
              <div className="md:flex md:flex-col md:justify-center md:space-y-2 md:items-center">
                <MdLocalPharmacy className="md:text-cyan-600 md:text-[8vh] md:pt-5" />
                <div
                  className={`${pop.className} md:text-gray-600 md:font-bold md:leading-tight md:text-[20px] mt-0`}
                >
                  <span>Paramaceutical</span> <br />
                  <span className="ml-14">Care</span>
                </div>
                <div className="text-gray-400 flex px-7 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat in officiis consectetur adipisicing elit
                </div>
              </div>
            </motion.div>
            {/* 3 col end */}
          </div>
        </motion.div>{" "}
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
      {/*  */} {/*  */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, y: 100 }} // Start invisible and lower
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up on scroll
        transition={{ duration: 2 }} // Duration of the animation
        viewport={{ once: true }} // Only animate once when in view
      >
        <div className="relative h-[70vh]  bg-[#e2efef] w-full mt-[40vh]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/wecure_circles.png')",
              backgroundSize: "auto 70vh", // Ensure the image covers the entire container
              backgroundPosition: "right", // Place the image on the left side
              backgroundRepeat: "no-repeat",
              opacity: 0.5,
            }}
          ></div>
          <motion.div
            className="flex flex-row"
            initial={{ opacity: 0, y: 100 }} // Start invisible and lower
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up on scroll
            transition={{ duration: 2 }} // Duration of the animation
            viewport={{ once: true }} // Only animate once when in view
          >
            {/* image 1 */}
            <div className="relative ml-[24rem] mt-[27vh]">
              <div className="absolute inset-0 bg-white rounded-full w-[22vh] h-[22vh]"></div>{" "}
              {/* Black background */}
              <Image
                src={"/family1.png"}
                alt={"family1"}
                width={4000}
                height={100}
                className="relative w-[25vh] shadow-2xl ml-[6px] mt-1 rounded-full"
              />
            </div>
            {/* image 1 */}

            <div>block mb-1</div>
            <div className=" flex flex-col ">
              <div className="text-gray-600 mt-[20vh] text-xl px-[190px] ">
                <span className="block mb-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,{" "}
                </span>
                <span className="block mb-2 ">
                  {" "}
                  temporeipsum unde incidunt hic architecto obcaecati{" "}
                </span>
                <span>
                  repellat assumenda numquam itaque culpa doloremque dolor eum
                  at sed nemo dolore velit
                </span>
              </div>

              <div className="flex flex-col">
                <div
                  className={`${pop.className} text-2xl font-bold text-black ml-[35vh] mt-[7vh]`}
                >
                  James Radrigo
                </div>
                <div
                  className={`${out.className} text-gray-500  text-[17px] ml-[250px]`}
                >
                  CUSTOMER
                </div>
              </div>
            </div>
          </motion.div>
          {/*  */} {/*  */}
        </div>
      </motion.div>
      {/* ----------------------- */}
    </div>
  );
}
