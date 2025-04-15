"use client";
import Image from "next/image";
import DevExperience from "./DevExperience";
import Projects from "./Projects";

export default function Home() {
  return (
    <main>
      <section className="h-full pt-10 flex flex-col justify-center items-center lg:gap-6">
        <header className="my-4">
          <Image
            src="/kale-v2/mainHeader.png"
            width={675}
            height={675}
            alt="Kaleigh Feder"
            className="scale-75 lg:scale-100"
          />
        </header>
        {/* <p className="font-poppins pt-3 w-1/2">
          Full Stack Developer based in Kitchener who studied Computer Science,
          with a focus in AI at Queen's Univeristy.
        </p> */}
      </section>
      <DevExperience />
      <Projects />
    </main>
  );
}
