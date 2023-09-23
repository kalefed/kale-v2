import { dm_mono, josefin_sans } from "../font";
import Image from "next/image";
import profile from "..//..//assets/profile.png";

import { FadeInUp } from "@/components/fadeInUp";

export default function About() {
  return (
    <div className="h-[calc(100vh-65px)]">
      <div className="flex flex-col lg:flex-row items-center h-full">
        <div className="basis-1/2 p-10">
          <FadeInUp>
            <Image
              src={profile}
              alt="Picture of the author"
              width={360}
              height={360}
              className="rounded-lg"
            />
          </FadeInUp>
        </div>
        <div className="basis-1/2">
          <FadeInUp>
            <h1
              className={`lg:text-6xl md:text-4xl text-2xl ${josefin_sans.className}`}
            >
              who am i?
            </h1>
          </FadeInUp>
          <FadeInUp>
            <p
              className={`lg:text-base md:text-md text-sm ${dm_mono.className}`}
            >
              Hi, I'm Kaleigh (she/they)! I am currently pursuing my{" "}
              <span className="text-[#759dc5] italic">
                Bachelor of Computing{" "}
              </span>
              with a major in Artificial Intelligence to work towards becoming a{" "}
              <span className="text-[#759dc5] italic">
                full stack developer
              </span>
              .
              <br />
              <br />I have a combination of{" "}
              <span className="text-[#759dc5] italic">two years</span> of
              professional work experience as a developer at{" "}
              <span className="text-[#759dc5] italic">Statistics Canada</span>{" "}
              and the{" "}
              <span className="text-[#759dc5] italic">
                Canada Revenue Agency
              </span>{" "}
              working with a variety of technologies such as React, Java Swing
              and Python.
              <br />
              <br />
              In my free time, you can find me reading a book, making too much
              coffee with my chemex, playing Breath of the Wild, or drawing.
            </p>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
