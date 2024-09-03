"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const isHomePage = usePathname() === "/";
  console.log(isHomePage);

  return (
    <div className="flex flex-row mx-44 justify-between text-secondary-col pt-6 font-medium">
      {isHomePage ? (
        <>
          <a className="hover:text-[#C6D794]" href="#experience">
            Experience
          </a>
          <a className="hover:text-[#C6D794]" href="#projects">
            Projects
          </a>
        </>
      ) : (
        <>
          <Link className="hover:text-[#C6D794]" href="/">
            Experience
          </Link>
          <Link className="hover:text-[#C6D794]" href="/">
            Projects
          </Link>
        </>
      )}
      <Link className="hover:text-[#C6D794]" href="/aboutme">
        About Me
      </Link>
      <a
        href="mailto:kaleighfeder@gmail.com"
        className="text-secondary-col hover:text-[#C6D794]"
      >
        Contact Me
      </a>
    </div>
  );
};

export default Navbar;
