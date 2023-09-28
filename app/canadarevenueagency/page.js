import { dm_mono, dm_mono_bold, jost } from "../font";
import { FadeInUp } from "@/components/fadeInUp";

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CRA() {
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
              Canada Revenue Agency
              <br />- Student Developer
            </h1>
            <p
              className={`lg:text-sm text-xs text-[#a8afb5] pt-5 ${dm_mono.className}`}
            >
              May 2023 - August 2023 [4 months]
            </p>
          </div>
          <div className="basis-3/4 md:pl-8 lg:text-base md:text-md text-sm pt-3">
            <p className={`font-semibold  ${jost.className}`}>Summary:</p>
            <p className={`${dm_mono.className}`}>
              Starting in the May 2023, I began my{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                4 month summer internship
              </span>{" "}
              at the Canada Revenue Agency as a Student Developer under the
              Information Technology Branch (ITB).
            </p>
            <p className={`pt-10 ${dm_mono.className}`}>
              During my time at the CRA I worked on an internal GUI build on{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                Java Swing
              </span>{" "}
              I worked on creating{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                resuable components
              </span>{" "}
              which conditionally rendered the application's buttons based on
              the options provided due to a users permission levels to improve
              user experience. Improved logging through the use of descriptive
              id's as well as developing and implementing{" "}
              <span className={`text-[#759dc5] ${dm_mono_bold.className}`}>
                unit tests
              </span>
              , to enhancing code quality and software reliability.
            </p>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
