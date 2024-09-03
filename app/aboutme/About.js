import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-fit">
      <div className="bg-white px-44">
        <div className="flex flex-col gap-12 pb-12">
          <div>
            <div className="pt-12 flex justify-center">
              <div className="relative w-fit">
                <h1 className="font-semibold text-[40px] text-center z-0 text-[#1A1A1E]">
                  Who Am I?
                </h1>
                <div className="z-10 absolute top-0 -right-20">
                  <Image
                    src="/pinkstar.png"
                    width={40}
                    height={40}
                    className="animate-spinSlow"
                  />
                </div>
                <div className="z-10 absolute bottom-0 -left-20">
                  <Image
                    src="/bluestar.png"
                    width={40}
                    height={40}
                    className="animate-spinSlow"
                  />
                </div>
              </div>
            </div>
            <p className="text-black-bg text-center text-[18px] mt-12">
              I’m a fourth year computer science student (AI major) studying at
              Queen’s University. I have a specific interest in fullstack
              development and have over{" "}
              <span class="font-bold">3+ years of professional experience</span>{" "}
              as a developer as well as various developer roles through
              extracurriculars
            </p>
          </div>
          <div>
            <div className="pt-12 flex justify-center">
              <div className="relative w-fit">
                <h1 className="font-semibold text-[40px] text-center z-0 text-[#1A1A1E]">
                  What I’m Passionate About
                </h1>
                <div className="z-10 absolute top-0 -right-20">
                  <Image
                    src="/pinkstar.png"
                    width={40}
                    height={40}
                    className="animate-spinSlow"
                  />
                </div>
                <div className="z-10 absolute bottom-0 -left-20">
                  <Image
                    src="/bluestar.png"
                    width={40}
                    height={40}
                    className="animate-spinSlow"
                  />
                </div>
              </div>
            </div>
            <p className="text-black-bg text-center text-[18px] mt-12">
              I’m passionate about <span class="font-bold">mentorship</span> and
              knowledge sharing in an efforts to break barriers and make tech
              more accessible. I’ve gotten involved through being an{" "}
              <span class="font-bold">orientation leader</span>, development
              <span class="font-bold"> team lead</span> and a{" "}
              <span class="font-bold">peer mentor</span>.
            </p>
            <p className="text-black-bg text-center text-[18px] mt-12">
              I love all things{" "}
              <span class="font-bold">full stack development</span>, from
              creating user-centered designs to designing a database. I’ve
              sought out both professional and extracurricular activities which
              have allowed me to grow my skills as a developer and expose me to
              various technologies.
            </p>
          </div>
          <div>
            <div className="pt-12 flex justify-center">
              <div className="relative w-fit">
                <h1 className="font-semibold text-[40px] text-center z-0 text-[#1A1A1E]">
                  Fun facts about me ٩(⸝⸝ᵕᴗᵕ⸝⸝)و ✧*.ﾟ
                </h1>
                <div className="z-10 absolute top-0 -right-20">
                  <Image
                    src="/pinkstar.png"
                    width={40}
                    height={40}
                    className="animate-spinSlow"
                  />
                </div>
                <div className="z-10 absolute bottom-0 -left-20">
                  <Image
                    src="/bluestar.png"
                    width={40}
                    height={40}
                    className="animate-spinSlow"
                  />
                </div>
              </div>
            </div>
            <p className="text-black-bg text-center text-[18px] mt-12">
              I spent my first two years studying Physics, until I found I had a
              passion for Computer Science
            </p>
            <p className="text-black-bg text-center text-[18px] mt-12">
              My drink of choice is a matcha latte, london fog, or a vanilla
              latte (perferably hot)
            </p>
            <p className="text-black-bg text-center text-[18px] mt-12">
              Almost all of my free time I spend reading fantasy and sci-fi
              novels. My favorites include Red Rising, Dune, A Psalm For the
              Wild Built
            </p>
            <p className="text-black-bg text-center text-[18px] mt-12">
              I love all things art, from graphic design, painting, digital art,
              pottery, clay, book binding and video editing
            </p>
            <p className="text-black-bg text-center text-[18px] mt-12">
              My favourite games include Animal Crossing, Hades, Civilization,
              Unpacking, Stardew Valley and Breath of the Wild.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="h-screen">
        <p>my link</p>
      </div> */}
    </div>
  );
};

export default About;
