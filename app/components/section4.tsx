"use client";

import Image from "next/image";
import { IoMdMedical } from "react-icons/io";
import { animate, motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import { Montserrat, Mulish, Outfit, Fredoka, Dancing_Script, Playfair_Display, Poppins } from "next/font/google";
import { MdPregnantWoman } from "react-icons/md";
import { TbHomeHeart } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { MdLocalPharmacy } from "react-icons/md";
import { BiSolidHomeHeart } from "react-icons/bi";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Importing Google Fonts
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

// Section2 Component
function Section2() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

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
    <motion.div
      id="animated-section"
      initial={{ opacity: 0, y: 100 }} // Start invisible and lower
      animate={controls}
      className="bg-[#1dc1de] relative h-[400px] w-[380px] md:w-[1180px] md:h-[320px] rounded-3xl"
    >
      {/* Content for Section2 */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:items-start pt-14">
        <div className={`${pop.className} font-semibold text-[5vh] leading-tight text-white md:hidden `}>
          Our Best Services <br /> For Your Solution
        </div>
        <div className={`${pop.className} font-semibold text-[5vh] md:leading-tight text-white md:w-1/2 pl-5 md:pl-20 md:block hidden`}>
          Our Best Services For Your <br /> Solution
        </div>
        <div className="text-white px-10 md:px-0 md:w-1/2 md:pl-20 md:pr-10 pt-5 md:pt-0 tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui obcaecati molestias dicta vitae, eligendi perferendis, maiores dolor voluptatibus eum eius error nulla.
        </div>
      </div>
    </motion.div>
  );
}

// Section4 Component
function Section4() {
  return (
    <div>
      {/* Cardiology Clinic Section */}
      <div className="bg-[#f3f5f6] h-auto w-[27rem] md:w-[72rem] md:h-[36rem] md:flex mt-16 md:ml-[10rem] ml-8 rounded-2xl">
      {/* <div className="md:flex md:pl-56 md:justify-center"> */}
      
        <div className="md:flex md:pl-56 md:justify-center">
          <div className="md:flex md:flex-col md:pl-6">
            <div className={`${pop.className} text-gray-800 font-bold md:text-[3rem] text-[2rem] pt-10 justify-center md:justify-start md:ml-20 flex`}>
              Cardiology Clinic
            </div>
            {/* Mobile Paragraph */}
            <div className="pt-7 space-y-8 ml-10 md:ml-10 md:hidden">
              <div className="text-gray-500 justify-center flex px-10">
                Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Sint cumque quaerat est <br />
                tempora? Repudiandae voluptatibus perspiciatis ipsum! Itaque molestiae fuga libero rerum culpa unde in? Perferendis Provident
              </div>
              <div className="text-gray-500 justify-center flex px-10">
                Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Sint cumque quaerat est <br />
                tempora? Repudiandaes voluptatibus perspiciatis ipsum! Itaque molestiae fuga libero rerum culpa unde in? Perferendis Provident
              </div>
            </div>
            {/* Desktop Paragraph */}
            <div className="space-y-9 hidden md:block">
              <div className="text-gray-500 md:ml-[12vh] font-sans pt-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cumque quaerat est <br />
                tempora? Repudiandae voluptatibus perspiciatis ipsum! Itaque molestiae fuga libero <br /> rerum culpa unde in? Perferendis Provident Repudiandae voluptatibus perspiciatis <br /> ipsum!
                Itaque molestiae
              </div>
              <div className="text-gray-500 md:ml-[12vh] font-sans">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint cumque quaerat est <br />
                tempora? Repudiandae voluptatibus perspiciatis ipsum! Itaque molestiae fuga libero <br /> rerum culpa unde in? Perferendis Provident
              </div>
            </div>
            {/* Neurocritical Care */}
            <div className="flex flex-col md:flex md:flex-row md:gap-x-8 font-medium space-y-3 text-xl justify-center items-center pt-8">
              <div className="text-cyan-500 md:mt-2">Neurocritical care</div>
              <div className="text-cyan-500">Neuro Oncology</div>
              <div className="text-cyan-500">Geriatric Neurology</div>
            </div>
            <div className="flex justify-center md:justify-start md:ml-16 pt-10">
              <button className="bg-cyan-500 py-5 px-12 text-white rounded-full hover:bg-cyan-400 mb-12">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Section2, Section4 };
