import { dm_mono, dm_mono_bold, jost } from "../font";
import { FadeInUp } from "@/components/fadeInUp";
import Image from "next/image";
import { IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

import pentagram from "..//..//assets/pentagram.png";
export default function Subcommittee() {
  return (
    <div className="h-fit">
      <IconButton size="medium" href={"/kale-v2"}>
        <ArrowBackIcon fontSize="medium" />
      </IconButton>
      <FadeInUp>
        <div className="flex md:flex-row flex-col h-full pt-11 mb-11">
          <div className="basis-1/2">
            <h1
              className={`lg:text-5xl md:text-4xl text-3xl ${jost.className}`}
            >
              Statistics Canada
              <br />- Subcommittee Coordinator
            </h1>
            <p
              className={`lg:text-sm text-xs text-[#a8afb5] pt-5 ${dm_mono.className}`}
            >
              May 2022 - September 2022 [5 months]
            </p>
          </div>
          <div className="basis-3/4 md:pl-8 lg:text-base md:text-md text-sm pt-3">
            <p className={`font-semibold  ${jost.className}`}>Summary:</p>
            <p className={`${dm_mono.className}`}>
              During my internship at Statistics Canada I became the Coordinator
              of the Student Subcommittee, a student run club. In this role I
              was in charge of overseeing the Student Subcommittees events and
              coordinate with the professional network, in order to organize
              events and initiatives to benefit the student community at
              Statistics Canada.
            </p>
            <p className={`font-semibold pt-10  ${jost.className}`}>
              Some things I did:
            </p>
            <ul className={`list-disc list-inside ${dm_mono.className}`}>
              <li>Organized and led weekly meetings</li>
              <li>
                Brainstorm and organize events to improve the student experience
                and create a sense of community among students in a remote
                workplace.
              </li>
              <li>Communicate with other departments to coordinate events</li>
            </ul>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
