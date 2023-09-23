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
              I am currently studying at Queen’s University to obtain a Computer
              Science with a focus in Artificial Intelligence.
              <br />
              <br />
              I’ve worked as a developer at Statistics Canada and the CRA as a
              student developer working with technologies like React, Java Swing
              and Python.
              <br />
              <br />
              In my free time, you can find me reading a book, usually fantasy
              or sci-fi, playing Breath of the Wild, or drawing.
            </p>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
