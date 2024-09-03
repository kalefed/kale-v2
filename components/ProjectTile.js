import React from "react";
import Image from "next/image";
const ProjectTile = ({
  subtitle,
  title,
  description,
  contributions = [],
  thumbnail,
}) => {
  return (
    <div className="bg-[#1C2327] border border-1 border-gray-400 rounded-xl">
      <div className="flex flex-row">
        <div className="w-1/2 p-4">
          {/* <p className="text-[18px] text-secondary-col">{subtitle}</p> */}
          <h1 className="text-[25px] font-semibold mt-2">{title}</h1>
          <h3 className="mt-2">Project Overview</h3>
          <p className="text-[16px] text-secondary-col mt-2">{description}</p>
          <div>
            <h3 className=" mt-4">Key Contributions</h3>
            <ul className="list-disc ml-4 mt-2 text-secondary-col">
              {contributions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={thumbnail}
            width={500}
            height={175}
            // className="transition-transform duration-300 ease-in-out transform hover:scale-110 origin-left"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
