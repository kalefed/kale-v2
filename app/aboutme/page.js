import React from "react";
import Image from "next/image";
import About from "./About";

const page = () => {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <div className="flex flex-grow flex-col justify-center items-center">
          <h1 className="font-semibold text-[60px] text-center pt-12">
            Nice to meet you, I'm <br /> Kaleigh Feder
          </h1>
          <Image src="/me.png" width={800} height={350} />
        </div>
        <div className="mt-auto">
          <Image
            className="w-full"
            src="/heroWave.png"
            width={500}
            height={400}
          />
        </div>
      </div>
      <About />
    </div>
  );
};

export default page;