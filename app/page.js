"use client";
import Image from "next/image";
import DevExperience from "./DevExperience";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <div className="h-full pt-10 flex flex-col justify-center items-center gap-6">
        <div className="text-center">
          <h1 className="text-[90px] font-medium font-sans">
            Kaleigh Feder is a
          </h1>
          <div className="flex flex-row gap-10 -mt-6">
            <h1 className="text-[100px] font-script">Full Stack</h1>
            <h1 className="text-[90px] font-medium font-sans">developer</h1>
          </div>
          <div className="flex flex-row gap-10 -mt-8">
            <h1 className="text-[90px] font-medium font-sans">and</h1>
            <h1 className="text-[100px] font-script">Creative</h1>

            <h1 className="text-[90px] font-medium font-sans">thinker</h1>
          </div>
        </div>
        <Image src="/kale-v2/profileImg.png" width={550} height={550} />
      </div>
      <DevExperience />
      <Projects />
    </div>
  );
}
