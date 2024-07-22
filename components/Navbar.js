import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row mx-44 justify-between text-secondary-col pt-6 font-medium">
      <Link className="hover:text-[#C6D794]" href="/experience">
        Experience
      </Link>
      <Link className="hover:text-[#C6D794]" href="/projects">
        Projects
      </Link>
      <Link className="hover:text-[#C6D794]" href="/aboutme">
        About Me
      </Link>
      <Link
        className="hover:text-[#C6D794]"
        href="/KaleighFederResume.pdf"
        download="KaleighFederResume.pdf"
      >
        Resume
      </Link>
    </div>
  );
};

export default Navbar;
