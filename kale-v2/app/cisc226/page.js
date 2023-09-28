import { dm_mono, dm_mono_bold, jost } from "../font";
import { FadeInUp } from "@/components/fadeInUp";
import Link from "next/link";
import Image from "next/image";
import { IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

import pentagram from "..//..//assets/pentagram.png";
export default function CISC226() {
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
              Video Game Design Project
              <br />- The Pentagram
            </h1>
            <p
              className={`lg:text-sm text-xs text-[#a8afb5] pt-5 ${dm_mono.className}`}
            >
              January 2023 - April 2023
            </p>
          </div>
          <div className="basis-3/4 md:pl-8 lg:text-base md:text-md text-sm pt-3">
            <p className={`font-semibold  ${jost.className}`}>Summary:</p>
            <p className={`${dm_mono.className}`}>
              In my second year of computing, I took Video Game Design
              (CISC226). This course required a year long group project to
              create a video game applying the concepts learned in class, from
              an idea on paper to a fully functioning game. We created The
              Pentagram, a dete
            </p>
            <p className={`pt-10 ${dm_mono.className}`}>
              I have developed a recent love for playing video games, and was
              intirgued by the course in hopes to combine my passion for
              progamming and art. My primary role in the project was designing
              developing the art assets as well as the games storyline and
              puzzles.
            </p>
            <p className={`pt-10 font-semibold  ${jost.className}`}>
              About the Game:
            </p>
            <div className="flex justify-center pt-5">
              <Button
                variant="outlined"
                href="https://phantasymist.itch.io/the-pentagram"
                endIcon={<VideogameAssetIcon />}
              >
                click to play our game!
              </Button>
            </div>
            <div className="flex justify-center pt-5">
              <Image
                src={pentagram}
                alt="Game Poster"
                width={360}
                height={360}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
