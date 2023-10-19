"use client";
import { syne, ruwudu } from "./font";

import Experience from "@/components/experience";
import { FadeInUp } from "@/components/fadeInUp";

export default function Home() {
  return (
    <div>
      <main className="h-[calc(100vh-65px)] bg-fixed ">
        <div className="flex items-center h-full">
          <div className="flex flex-col w-full">
            <FadeInUp>
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
                I am student at Queen's <br /> Univeristy studying computer{" "}
                <br />
                science with a focus in AI.
              </h1>
            </FadeInUp>
          </div>
        </div>
      </main>
      <Experience />
    </div>
  );
}
