import React from "react";
import Image from "next/image";
const ProjectTile = ({ subtitle, title, description, thumbnail }) => {
  return (
    <div className="bg-[#1C2327] border border-1 border-gray-400 rounded-xl">
      <div className="flex flex-row">
        <div className="w-1/2 p-4">
          <p className="text-[18px] text-secondary-col">{subtitle}</p>
          <h1 className="text-[25px] font-semibold">{title}</h1>
          <p className="text-[16px]">{description}</p>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={thumbnail}
            width={500}
            height={175}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 origin-left"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
