import { dm_mono, josefin_sans } from "../font";
import Link from "next/link";
import Image from "next/image";
import { FadeInUp } from "@/components/fadeInUp";
import javaScriptIcon from "..//..//public/images/javascript.svg"
import cssIcon from "..//..//public/images/css.svg"
import htmlIcon from "..//..//public/images/html.svg"
import nextIcon from "..//..//public/images/nextjs.svg"
import githubIcon from "..//..//public/images/github.svg"
import bulmaIcon from "..//..//public/images/bulma.svg"

export default function Compsa() {
  return (
    <div className="h-fit">
      <Link href="/">Back to Home</Link>
      <FadeInUp>
        <div className="flex flex-col h-full pt-11">
          <p
            className={`md:text-sm text-xs text-[#a8afb5] pb-5 ${dm_mono.className}`}
          >
            June 2023 - Present [4 months]
          </p>
          <h1
            className={`lg:text-5xl md:text-4xl text-2xl ${josefin_sans.className}`}
          >
            Queen's University's Computing Students Association (COMPSA)
          </h1>
          <p className={`pt-5 ${dm_mono.className}`}>
            In June 2023, I began a volunteer position as a{" "}
            <span className="text-[#759dc5] italic">Full Stack Developer</span>{" "}
            on the COMPSA tech team.
          </p>
          <h2
            className={`text-[#818181] lg:text-2xl md:text-xl text-md pt-16 pb-4 ${josefin_sans.className}`}
          >
            01. Overview of technologies I worked with
          </h2>
          <div className="flex flex-row gap-5">
          <Image priority src={javaScriptIcon} height={50} width={50} alt="react" />
          <Image priority src={cssIcon} height={50} width={50} alt="react" />
          <Image priority src={htmlIcon} height={50} width={50} alt="react" />
          <Image priority src={bulmaIcon} height={50} width={50} alt="react" />
          <Image priority src={nextIcon} height={50} width={50} alt="react" />
          <Image priority src={githubIcon} height={50} width={50} alt="react" />
          </div>

          <h2
            className={`text-[#818181] lg:text-2xl md:text-xl text-md pt-16 ${josefin_sans.className}`}
          >
            02. Admin Panel
          </h2>
          <p className={`pt-5 ${dm_mono.className}`}>
            I have been working on a team of 3 to design and develop a
            responsive Admin panel for the COMPSA website to allow authorized
            users to interact with the API and display the database in an
            intuitive and user-friendly way.
          </p>
          <h2
            className={`text-[#818181] lg:text-2xl md:text-xl text-md pt-16 ${josefin_sans.className}`}
          >
            03. Key Takeaways
          </h2>
          <p className={`pt-5 pb-36 ${dm_mono.className}`}>
            This experience further confirmed my desire to work in a Frontedn or
            Full stack development role and allowed me to grow and strengthen my
            programming skills with Java.
          </p>
        </div>
      </FadeInUp>
    </div>
  );
}
