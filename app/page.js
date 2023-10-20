"use client";
import { syne, ruwudu } from "./font";

import Image from "next/image";
import Experience from "@/components/experience";
import { FadeInUp } from "@/components/fadeInUp";
import blob from "..//public/blobanimation.svg";
import blob2 from "..//public/blobanimation2.svg";

export default function Home() {
  return (
    <div>
      <main className="h-[calc(100vh-65px)] relative bg-fixed">
        <div className="flex items-center h-full">
          <div className="flex flex-col w-full">
            <div className="absolute -z-1 inset-0">
              <Image
                className="opacity-30 blur-lg absolute bottom-30 -right-96"
                src={blob}
                alt="My SVG"
                width={600}
                height={600}
                priority={true}
              />
            </div>
            <div className="absolute -z-1 inset-0">
              <Image
                className="opacity-30 blur-lg absolute bottom-0 -left-96"
                src={blob2}
                alt="My SVG"
                width={400}
                height={400}
                priority={true}
              />
            </div>
            <FadeInUp>
              <div className="relative z-10">
                <h1
                  className={`lg:text-3xl md:text-2xl text-xl ${syne.className}`}
                >
                  Hello.
                </h1>
                <h1
                  className={`lg:text-8xl md:text-6xl text-5xl pb-5 ${syne.className}`}
                >
                  my name <br /> is kaleigh.
                </h1>

                <h1
                  className={`lg:text-xl md:text-xl text-md text-right ${syne.className}`}
                >
                  I am student at Queen's <br /> University studying computer{" "}
                  <br />
                  science with a focus in AI.
                </h1>
              </div>
            </FadeInUp>
          </div>
        </div>
      </main>
      <Experience />
    </div>
  );
}
