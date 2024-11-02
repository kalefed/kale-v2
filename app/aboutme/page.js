import React from "react";
import Image from "next/image";
import About from "./About";

const page = () => {
  return (
    <div className="bg-white px-36 py-10 mx-44">
      <div>
        <div className="flex flex-grow flex-col justify-center items-center">
          <div className="flex flex-row items-center gap-5">
            <h1 className="text-[50px] font-medium font-sans">
              Nice to meet you, I'm
            </h1>
            <h1 className="text-[60px] font-script">Kaleigh</h1>
          </div>
          <Image src="/kale-v2/me.png" width={800} height={350} />
        </div>
        <div className="mt-auto">
          <Image
            className="w-full"
            src="/kale-v2/heroWave.png"
            width={500}
            height={400}
          />
        </div>
      </div>
      <p className="text-[18px] font-poppins">
        I’m a fourth year computer science student (AI major) studying at
        Queen’s University. I have a specific interest in fullstack development
        and have over{" "}
        <span class="font-bold">3+ years of professional experience</span> as a
        developer as well as various developer roles through extracurriculars
      </p>
      <p className="text-[18px] mt-12 font-poppins">
        I’m passionate about <span class="font-bold">mentorship</span> and
        knowledge sharing in an efforts to break barriers and make tech more
        accessible. I’ve gotten involved through being an{" "}
        <span class="font-bold">orientation leader</span>, development
        <span class="font-bold"> team lead</span> and a{" "}
        <span class="font-bold">peer mentor</span>.
      </p>
      <p className="text-[18px] mt-12 font-poppins">
        I love all things <span class="font-bold">full stack development</span>,
        from creating user-centered designs to designing a database. I’ve sought
        out both professional and extracurricular activities which have allowed
        me to grow my skills as a developer and expose me to various
        technologies.
      </p>
    </div>
  );
};

export default page;
