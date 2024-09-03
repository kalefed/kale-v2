"use client";
import Image from "next/image";
import DevExperience from "./DevExperience";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <div className="flex flex-grow flex-col items-center justify-center">
          <div className="relative p-5">
            <h1 className="font-semibold text-[60px] text-center z-0">
              Computer Science AI Student <br /> & Full Stack Developer
            </h1>
            <div className="z-10 absolute top-0 right-0">
              <Image
                src="/kale-v2/pinkstar.png"
                width={40}
                height={40}
                className="animate-spinSlow"
              />
            </div>
            <div className="z-10 absolute bottom-20 left-0 ">
              <Image
                src="/kale-v2/bluestar.png"
                width={40}
                height={40}
                className="animate-spinSlow"
              />
            </div>
          </div>

          <p className="text-secondary-col text-[20px] text-center">
            I’m Kaleigh Feder, passionate about combining my love for the arts{" "}
            <br />
            and design with my interest in development to create full stack
            applications.
          </p>
        </div>
        <div className="mt-auto">
          <Image
            className="w-full"
            src="/kale-v2/heroWave.png"
            width={500}
            height={500}
          />
        </div>
      </div>
      <DevExperience />
      <Projects />
    </div>
  );
}
