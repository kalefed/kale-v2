import { inter, roboto_mono } from "./font";
import Image from "next/image";
import profile from "..//public/profile.png";
import { FadeInUp } from "@/components/fadeInUp";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <div>
      <div className="h-screen grid lg:grid-cols-8 md:grid-cols-8 grid-cols-1 grid-rows-5 gap-5 p-5">
        {/* Left Column */}
        <div className="lg:col-start-1 lg:col-end-5 md:col-start-2 md:col-end-8 md:col-span-3 lg:row-start-1 lg:row-end-6 row-start-1 row-end-4 border-2 border-black inline-block bg-white rounded-3xl p-10">
          <h1
            className={`lg:text-5xl md:text-4xl text-3xl uppercase ${roboto_mono["300"]}`}
          >
            Hi my name is
          </h1>
          <h1
            className={`lg:text-5xl md:text-4xl text-3xl uppercase ${roboto_mono["300"]}`}
          >
            <span className="border-2 border-black inline-block rounded-full p-2">
              Kaleigh Feder.
            </span>
          </h1>
          <h1
            className={`lg:text-lg md:text-md text-sm text-[#666666] ${inter.className} pt-6`}
          >
            I’m an aspiring Full Stack Developer and a third-year student at
            Queen’s University studying Computer Science with a focus in
            Artificial Intelligence.
          </h1>
          <h1
            className={`lg:text-lg md:text-md text-sm text-[#666666] ${inter.className} pt-6`}
          >
            I’m an aspiring Full Stack Developer and a third-year student at
            Queen’s University studying Computer Science with a focus in
            Artificial Intelligence.
          </h1>
        </div>

        {/* Right Column - Image */}
        <div className="lg:col-start-7 lg:col-end-9 md:col-start-2 md:col-end-8 lg:row-start-3 lg:row-end-5 row-start-4 row-end-5 border-2 border-black inline-block bg-white rounded-3xl relative">
          <Image
            className="rounded-3xl p-2"
            src={profile}
            alt="My SVG"
            fill={true}
          />
        </div>

        {/* Right Column - Text */}
        <div className="lg:col-start-6 lg:col-end-9 md:col-start-2 md:col-end-8 row-start-5 row-end-6 border-2 border-black inline-block bg-white rounded-3xl">
          <h1>my text</h1>
        </div>
      </div>
      <Experience />
    </div>
  );
}
