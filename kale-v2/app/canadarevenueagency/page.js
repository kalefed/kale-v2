import { dm_mono, josefin_sans } from "../font";
import Link from "next/link";

import { FadeInUp } from "@/components/fadeInUp";

export default function CRA() {
  return (
    <div className="h-fit">
      <Link href="/">Back to Home</Link>
      <FadeInUp>
        <div className="flex flex-col h-full pt-11">
          <p
            className={`md:text-sm text-xs text-[#a8afb5] pb-5 ${dm_mono.className}`}
          >
            May 2023 - August 2023 [4 months]
          </p>
          <h1
            className={`lg:text-6xl md:text-4xl text-2xl ${josefin_sans.className}`}
          >
            Canada Revenue Agency
          </h1>
          <p className={`pt-5 ${dm_mono.className}`}>
            For the 4 month summer term, I worked as a Student Developer at the
            CRA.
          </p>

          <h2
            className={`text-[#818181] lg:text-2xl md:text-xl text-md pt-16 ${josefin_sans.className}`}
          >
            01. Internal GUI
          </h2>
          <p className={`pt-5 ${dm_mono.className}`}>
            I worked on a team responsible for an internal graphical user
            interface built using{" "}
            <span className="text-[#759dc5] italic">Java Swing</span>. I worked
            on creating resuable components which conditionally rendered the
            application's buttons based on the options provided due to a users
            permission levels to improve user experience. Improved logging
            through the use of descriptive id's as well as developing and
            implementing{" "}
            <span className="text-[#759dc5] italic">unit tests</span>, to
            enhancing code quality and software reliability.
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
