import React from "react";
import Image from "next/image";

const DevExperience = () => {
  return (
    <div className="bg-white h-screen px-36">
      <div className="pt-10 flex justify-center">
        <div className="relative w-fit">
          <h1 className="font-semibold text-[40px] text-center z-0 text-[#1A1A1E]">
            My Development Experience
          </h1>
          <div className="z-10 absolute top-0 -right-20">
            <Image src="/pinkstar.png" width={40} height={40} />
          </div>
          <div className="z-10 absolute bottom-0 -left-20">
            <Image src="/bluestar.png" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevExperience;
