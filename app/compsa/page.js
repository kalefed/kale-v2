import { dm_mono, dm_mono_bold, jost } from "../font";
import { FadeInUp } from "@/components/fadeInUp";

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Compsa() {
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
              COMPSA
              <br />- Full-Stack Developer
            </h1>
            <p
              className={`lg:text-sm text-xs text-[#a8afb5] pt-5 ${dm_mono.className}`}
            >
              June 2023 - Present
            </p>
          </div>
          <div className="basis-3/4 md:pl-8 lg:text-base md:text-md text-sm pt-3">
            <p className={`font-semibold  ${jost.className}`}>Summary:</p>
            <p className={`${dm_mono.className}`}>
              Starting in the June 2023, I began a volunteer position at the
              Queen's Computing Students Association (COMPSA) as a full-stack
              developer.
            </p>
            <p className={`pt-10 ${dm_mono.className}`}>
              During my time at COMPSA I've been working on a team of 3 to
              design and develop a{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                responsive
              </span>{" "}
              Admin panel for the COMPSA website to allow authorized users to
              interact with the API and display the database in an intuitive and
              user-friendly way. This is being developed using{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                Next.js
              </span>{" "}
              and the styling has been done leveraging{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                Bulma
              </span>{" "}
            </p>

            <p className={`pt-10 font-semibold  ${jost.className}`}>
              Some things I have helped create:
            </p>
            <ul className={`list-disc list-inside ${dm_mono.className}`}>
              <li>Responsive hamburger navigation bar</li>
              <li>Designing website components</li>
              <li>
                Forms used to add new resources, which are displayed on a modal
              </li>
            </ul>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
