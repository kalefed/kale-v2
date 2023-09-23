import { dm_mono, josefin_sans } from "../font";
import Link from "next/link";
import Image from "next/image";
import { FadeInUp } from "@/components/fadeInUp";

import pythonIcon from "..//..//public/images/python.svg";
import flaskIcon from "..//..//public/images/flask.svg";
import javaScriptIcon from "..//..//public/images/javascript.svg";
import cssIcon from "..//..//public/images/css.svg";
import htmlIcon from "..//..//public/images/html.svg";
import reactIcon from "..//..//public/images/react.svg";
import gitlabIcon from "..//..//public/images/gitlab.svg";
import jiraIcon from "..//..//public/images/jira.svg";

export default function StatCan() {
  return (
    <div className="h-fit">
      <Link href="/">Back to Home</Link>
      <FadeInUp>
        <div className="flex flex-col h-full pt-11">
          <p
            className={`md:text-sm text-xs text-[#a8afb5] pb-5 ${dm_mono.className}`}
          >
            May 2021 - April 2023 [2 years]
          </p>
          <h1
            className={`lg:text-6xl md:text-4xl text-2xl ${josefin_sans.className}`}
          >
            Statistics Canada
          </h1>
          <p className={`pt-5 ${dm_mono.className}`}>
            As part of my 16 month internship through the Queen's Internship
            Program, I worked as a Junior Analyst at Statistics Canada, and
            continued to work there part time after my 16 month term.
          </p>
          <h2
            className={`text-[#818181] lg:text-2xl md:text-xl text-md pt-16 pb-4 ${josefin_sans.className}`}
          >
            01. Overview of technologies I worked with
          </h2>
          <div className="flex flex-row gap-5">
            <Image
              priority
              src={pythonIcon}
              height={50}
              width={50}
              alt="react"
            />
            <Image
              priority
              src={flaskIcon}
              height={50}
              width={50}
              alt="react"
            />
            <Image
              priority
              src={javaScriptIcon}
              height={50}
              width={50}
              alt="react"
            />
            <Image priority src={cssIcon} height={50} width={50} alt="react" />
            <Image priority src={htmlIcon} height={50} width={50} alt="react" />
            <Image
              priority
              src={reactIcon}
              height={50}
              width={50}
              alt="react"
            />
            <Image
              priority
              src={gitlabIcon}
              height={50}
              width={50}
              alt="react"
            />
            <Image priority src={jiraIcon} height={50} width={50} alt="react" />
          </div>

          <h2
            className={`text-[#818181] lg:text-2xl md:text-xl text-md pt-16 ${josefin_sans.className}`}
          >
            02. Encoding Metadata
          </h2>
          <p className={`pt-5 ${dm_mono.className}`}>
            Created metadata mapping files according to provided standards using{" "}
            <span className="text-[#759dc5] italic">YARRRML</span>, and encoded
            metadata into{" "}
            <span className="text-[#759dc5] italic">
              standard knowledge graph format
            </span>{" "}
            in line with StatDCAT-AP and DCAT-AP to improve the visibility and
            discoverability of statistical datasets as well as implementing a{" "}
            <span className="text-[#759dc5] italic">SKOS data model </span> to
            leverage linked data.
          </p>

          <p className={`pt-5 ${dm_mono.className}`}>
            Using <span className="text-[#759dc5] italic">Python</span>, I
            created an ETL (extract, transform, load) pipeline which leveraged
            the defined YARRRML linked data rules to transform the data so that
            metadata from various tools and sources could be integrated into
            one, central search platform.
          </p>

          <h2
            className={`text-[#818181] lg:text-2xl md:text-xl text-md pt-16 ${josefin_sans.className}`}
          >
            03. Search and Discovery Platform
          </h2>
          <p className={`pt-2 ${dm_mono.className}`}>
            I built an internal search and discovery platform, think of a
            google-inspired platform to search for metadata.
          </p>
          <p className={`pt-5 ${dm_mono.className}`}>
            I worked on the backend using{" "}
            <span className="text-[#759dc5] italic">Flask</span>, and numerous
            api technologies such as FastAPI, to design RESTful API's and{" "}
            <span className="text-[#759dc5] italic">Swagger (OpenAPI)</span> to
            create API documentation.
          </p>
          <p className={`pt-5 ${dm_mono.className}`}>
            The frontend was built using{" "}
            <span className="text-[#759dc5] italic">React</span> and{" "}
            <span className="text-[#759dc5] italic">Material UI</span>. I first
            brainstormed the website design by drawing out wire frames, and
            eventually transferring it to a figma design. The website was
            responsive, a search bar, filters which could be toggled on and off,
            as well as pagination.
          </p>

          <h2
            className={`text-[#818181] lg:text-2xl md:text-xl text-md pt-16 ${josefin_sans.className}`}
          >
            04. Key Takeaways
          </h2>
          <p className={`pt-5 pb-36 ${dm_mono.className}`}>
            I started off working in this job as a Physics student, being able
            to work in a developer role allowed me to explore my passion for
            programming and make the switch to pursuing a Computer Science
            degree, as well as a passion for Frontend and Full Stack
            development.
          </p>
        </div>
      </FadeInUp>
    </div>
  );
}
