import React from "react";

const Footer = () => {
  return (
    <div className="bg-white rounded-t-2xl">
      <div className="flex flex-col gap-4 py-12 justify-center items-center">
        <h1 className="font-semibold text-[40px] text-center z-0 text-[#1A1A1E]">
          Interested in connecting or hiring <br />
          me for a full time new grad role?
        </h1>
        <p className="text-secondary-col text-[20px] text-center">
          I would love to hear from you!
        </p>
        <button className="bg-[#FAE88B] rounded-full px-6 py-2 text-black-bg w-[200px]">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Footer;
