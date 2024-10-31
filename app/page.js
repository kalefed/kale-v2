"use client";
import Image from "next/image";
import DevExperience from "./DevExperience";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <div className="h-full pt-10 flex flex-col justify-center items-center lg:gap-6">
        <div className="text-center">
          <h1 className="lg:text-[90px] md:text-[60px] text-[40px] font-medium font-sans">
            Kaleigh Feder is a
          </h1>
          <div className="flex flex-row md:gap-10 gap-5 md:-mt-6 -mt-2 justify-center items-center">
            <h1 className="lg:text-[100px] md:text-[70px] text-[50px] font-script">
              Full Stack
            </h1>
            <h1 className="lg:text-[90px] md:text-[60px] text-[40px] font-medium font-sans">
              developer
            </h1>
          </div>
          <div className="flex flex-row md:gap-10 gap-5 md:-mt-8 -mt-2 justify-center items-center">
            <h1 className="lg:text-[90px] md:text-[60px] text-[40px] font-medium font-sans">
              and
            </h1>
            <h1 className="lg:text-[100px] md:text-[70px] text-[50px] font-script">
              Creative
            </h1>

            <h1 className="lg:text-[90px] md:text-[60px] text-[40px] font-medium font-sans">
              thinker
            </h1>
          </div>
        </div>
        <Image
          src="/kale-v2/profileImg.png"
          width={550}
          height={550}
          className="scale-75 lg:scale-100"
        />
      </div>
      <DevExperience />
      <Projects />
    </div>
  );
}
