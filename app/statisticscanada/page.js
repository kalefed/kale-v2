import { dm_mono, dm_mono_bold, josefin_sans, jost } from "../font";
import Link from "next/link";
import Image from "next/image";
import { FadeInUp } from "@/components/fadeInUp";

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function StatCan() {
  return (
    <div className="h-fit">
      <IconButton size="medium" href={"/"}>
        <ArrowBackIcon fontSize="medium" />
      </IconButton>
      <FadeInUp>
        <div className="flex md:flex-row flex-col h-full pt-11 mb-11">
          <div className="basis-1/2">
            <h1
              className={`lg:text-5xl md:text-4xl text-3xl ${jost.className}`}
            >
              Statistics Canada
              <br />
              - Junior Analyst
            </h1>
            <p
              className={`lg:text-sm text-xs text-[#a8afb5] pt-5 ${dm_mono.className}`}
            >
              May 2021 - April 2023 [2 years]
            </p>
          </div>
          <div className="basis-3/4 md:pl-8 lg:text-base md:text-md text-sm pt-3">
          <p className={`font-semibold  ${jost.className}`}>Summary:</p>
            <p className={`${dm_mono.className}`}>
              Starting in the May 2021, I began my{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                16 month internship
              </span>{" "}
              at Statistics Canada, through the Queen's Undergraduate Internship
              Porgram (QUIP) as a Junior Analyst on the Metadata Hub Project, I
              transitioned to part time work for for 7 months after my term
              ended.
            </p>
            <p className={`pt-10 ${dm_mono.className}`}>
              During my time at Statistics Canada I worked on many different
              phases of the Metadata Hub Project. I created metadata mapping
              files according to provided standards using{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>YARRRML</span> and
              encoded metadata into{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                standard knowledge graph format
              </span>{" "}
              with a goal to improve the visibility and discoverability of
              statistical datasets.
            </p>

            <p className={`pt-10 ${dm_mono.className}`}>
              I created an ETL (extract, transform, load) pipeline using{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>Python</span> which
              leveraged the defined YARRRML linked data rules to transform the
              data so that metadata from various tools and sources could be
              integrated into one, central search platform.
            </p>

            <p className={`pt-10 ${dm_mono.className}`}>
              This work was then combined into the search and discovery
              platform. The backend was built using{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>Flask</span> and API
              technologies such as{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                Swagger (OpenAPI) and FastAPI
              </span>
              . The frontend was built using{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                React, Bootstrap and Material UI
              </span>
              . The website was responsive, a search bar, filters which could be
              toggled on and off, as well as pagination.
            </p>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
