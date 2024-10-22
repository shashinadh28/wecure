"use client";

import Image from "next/image";
import {  motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { Poppins } from "next/font/google";


const pop = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function Section5() {
  return (
    <div>
      <div className="text-gray-700 font-bold text-[4vh] justify-center flex pt-10">
        Our Recent Posts
      </div>

      <div className="md:flex md:flex-row md:justify-center">
        {/* image 1 start */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start invisible and lower
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up on scroll
          transition={{ duration: 1.3, ease: "easeIn" }} // Duration of the animation
          viewport={{ once: true }} // Only animate once when in view
        >
          <div className="flex justify-center ml-10 flex-col pt-16 md:pt-16">
            <div className="bg-white h-[30rem] rounded-3xl shadow-sm w-[25rem]">
              <Image
                src={"/hand_heart.png"}
                alt={"hort"}
                width={4000}
                height={100}
                className="w-full h-[250px] size-10 rounded-t-3xl"
              />
              <div className="flex flex-col px-8 space-y-3">
                <div className="text-gray-500 pt-5">Jan 2, 2023</div>
                <div
                  className={`${pop.className} text-gray-800 font-semibold text-[3vh]`}
                >
                  10 Foods To Avoid For Your <br /> Heart Health
                </div>
                <div className="text-gray-500">
                  Its normal to feel anxiety, worry and grief any time you&apos;re
                  diagnosed with a condition that&apos;s certainly true
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* image 1 end */}

        {/* image 2 start */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start invisible and lower
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up on scroll
          transition={{ duration: 1.6, ease: "easeIn" }} // Duration of the animation
          viewport={{ once: true }} // Only animate once when in view
        >
          <div className="flex justify-center ml-10 flex-col pt-4 md:pt-16">
            <div className="bg-white h-[30rem] rounded-3xl shadow-sm w-[25rem]">
              <Image
                src={"/family.png"}
                alt={"hort"}
                width={4000}
                height={100}
                className="w-full h-[250px] size-10 rounded-t-3xl"
              />
              <div className="flex flex-col px-8 space-y-3">
                <div className="text-gray-500 pt-5">Jan 2, 2023</div>
                <div
                  className={`${pop.className} text-gray-800 font-semibold text-[3vh]`}
                >
                  10 Foods To Avoid For Your <br /> Heart Health
                </div>
                <div className="text-gray-500">
                  Its normal to feel anxiety, worry and grief any time you&apos;re
                  diagnosed with a condition that&apos;s certainly true
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* image 2 end */}

        {/* image 3 start */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start invisible and lower
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up on scroll
          transition={{ duration: 1.8, ease: "easeIn" }} // Duration of the animation
          viewport={{ once: true }} // Only animate once when in view
        >
          <div className="flex justify-center ml-10 flex-col pt-4 md:pt-16">
            <div className="bg-white h-[30rem] rounded-3xl shadow-sm w-[25rem]">
              <Image
                src={"/doctor_research.png"}
                alt={"hort"}
                width={4000}
                height={100}
                className="w-full h-[250px] size-10 rounded-t-3xl"
              />
              <div className="flex flex-col px-8 space-y-3">
                <div className="text-gray-500 pt-5">Jan 2, 2023</div>
                <div
                  className={`${pop.className} text-gray-800 font-semibold text-[3vh]`}
                >
                  10 Foods To Avoid For Your <br /> Heart Health
                </div>
                <div className="text-gray-500">
                  Its normal to feel anxiety, worry and grief any time you&apos;re
                  diagnosed with a condition that&apos;s certainly true
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* image 3 end */}
      </div>
    </div>
  );
}
