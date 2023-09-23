import { dm_mono, josefin_sans } from "./font";

import Experience from "@/components/experience";
import { FadeInUp } from "@/components/fadeInUp";

export default function Home() {
  return (
    <div>
      <main className="h-[calc(100vh-65px)] bg-fixed">
        <div className="flex items-center justify-between h-full">
          <div className="flex flex-col pr-10">
            <FadeInUp>
              <h1
                className={`lg:text-7xl md:text-5xl text-2xl ${josefin_sans.className}`}
              >
                hi there <br /> i'm{" "}
                <span className="text-[#759dc5] italic">kaleigh</span> 🐻
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p
                className={`lg:text-2xl md:text-xl text-lg ${dm_mono.className}`}
              >
                an aspiring frontend developer
                <br />
                and computer science student
              </p>
            </FadeInUp>
          </div>
        </div>
        {/* Apply star background classes to elements */}
        <div className="star-background-1"></div>
        <div className="star-background-2"></div>
      </main>
      <Experience />
    </div>
  );
}
