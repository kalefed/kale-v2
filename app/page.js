"use client";
import { syne, space_grotesk, dm_sans } from "./font";

import ScrollButton from "@/components/scrollButton";
import Image from 'next/image'
import Experience from "@/components/experience";
import { FadeInUp } from "@/components/fadeInUp";
import arrow from "..//public/arrow.svg";
import bgBlob from "../public/4.png"

export default function Home() {
  return (
    <div>
      <div className="relative h-[calc(100vh-68px)] flex items-center justify-between">
        <div>
          <h1
            className={`lg:text-6xl md:text-4xl text-3xl ${dm_sans.className}`}
          >
            Hello, I'm
            <br />
            Kaleigh Feder.
          </h1>
          <div className="pt-6">
            <h2
              className={`lg:text-xl md:text-xl text-lg ${dm_sans.className} text-[#606060]`}
            >
              I'm a third-year computer science student at Queen's University
              <br />
              with a passion for full-stack development.
            </h2>
          </div>
        </div>
        <Image
        alt="Vercel logo"
        src={bgBlob}
        width={500}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
        <div className="flex flex-row absolute bottom-10">
          <ScrollButton />
          <span
            className={`pl-5 lg:text-lg md:text-lg text-md ${dm_sans.className}`}
          >
            Take a look at my experience
          </span>
        </div>
      </div>
      <Experience />
    </div>
  );
}
