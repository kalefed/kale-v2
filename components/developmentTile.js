import React from "react";

const developmentTile = ({ title }) => {
  return (
    <div className="border rounded-xl">
      <h1 className="text-[25px] font-semibold mt-2 text-[#1A1A1E]">{title}</h1>
    </div>
  );
};

export default developmentTile;
