import React from "react";

const ExperienceTile = ({ title, position, dates, description, type }) => {
  return (
    <div className="border border-darker-grey rounded-xl p-8 col-span-1">
      <div className="">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-[25px] font-semibold text-[#1A1A1E]">
              {title}
            </h1>
            <h2 className="text-darker-grey font-semibold">{position}</h2>
            <h2 className="text-secondary-col">{dates}</h2>
          </div>
          {type === "Professional" ? (
            <div className="bg-[#FAE88B] rounded-full py-2 px-4 text-center w-1/3 h-min -rotate-12 mt-4">
              <p className="text-[#1A1A1E] font-semibold">Professional</p>
            </div>
          ) : (
            <div className="bg-[#58D8FF] rounded-full py-2 px-4 text-center w-1/3 h-min -rotate-12 mt-4">
              <p className="text-[#1A1A1E] font-semibold">Extracurricular</p>
            </div>
          )}
        </div>
        <div className="pt-1">
          <ul className="list-disc ml-4 mt-2 text-darker-grey">
            {description.map((element, index) => (
              <li className="pt-1" key={index}>
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTile;
