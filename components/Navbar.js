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
    <div className="lg:w-1/3">
      <div className="flex flex-row justify-between pt-6 gap-2 font-poppins text-[12px] md:text-lg">
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
          className=" hover:text-[#C6D794]"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
