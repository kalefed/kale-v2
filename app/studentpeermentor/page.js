import { dm_mono, dm_mono_bold, jost } from "../font";
import { FadeInUp } from "@/components/fadeInUp";
import Image from "next/image";
import { IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

import pentagram from "..//..//assets/pentagram.png";
export default function Mentor() {
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
              <br />- Peer Mentor
            </h1>
            <p
              className={`lg:text-sm text-xs text-[#a8afb5] pt-5 ${dm_mono.className}`}
            >
              September 2021 - May 2022 [9 months]
            </p>
          </div>
          <div className="basis-3/4 md:pl-8 lg:text-base md:text-md text-sm pt-3">
            <p className={`font-semibold  ${jost.className}`}>Summary:</p>
            <p className={`${dm_mono.className}`}>
              During my internship at Statistics Canada I volunteered as a
              student mentor through the Student Pals Program. This program was
              an initiative to partner current, more experienced students with
              new student employees within Statistics Canada, to provide
              guidance throughout their work term and the onboarding experience
            </p>
            <p className={`font-semibold pt-10  ${jost.className}`}>
              Some things I did:
            </p>
            <ul className={`list-disc list-inside ${dm_mono.className}`}>
              <li>
                Met biweekly with 1-2 students to aid in questions pertaining to
                onboarding, work-life balance and how they can be successful in
                their role.
              </li>
              <li>Encourage mentees to join subcommittee events</li>
            </ul>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
