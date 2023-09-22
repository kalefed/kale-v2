import { dm_mono, josefin_sans } from "./font";
import Image from "next/image";
import profile from "../assets/profile.png";
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {

  return (
    <main className="h-[calc(100vh-65px)] bg-fixed">
      <div className="flex items-center justify-between h-full">
        <div className="flex flex-col pr-10">
          <h1
            className={`lg:text-7xl md:text-5xl text-2xl ${josefin_sans.className}`}
          >
            hi there <br /> i'm{" "}
            <span className="text-[#759dc5] italic">kaleigh</span>
          </h1>
          <p className={`lg:text-2xl md:text-xl text-lg ${dm_mono.className}`}>
            an aspiring frontend developer
            <br />
            and computer science student
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={profile}
            alt="Picture of the author"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
    </main>
  );
}
