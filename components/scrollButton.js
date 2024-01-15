"use client";

import Link from "next/link";
import arrow from "..//public/arrow.svg";
import Image from "next/image";
function scrollToContent() {
  const target = document.getElementById("experience");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

const ScrollButton = () => {
  return (
    <Link
      href="#experience"
      className="scroll-button is-medium"
      onClick={scrollToContent}
      scroll={false}
    >
      <span>
        <Image
          src={arrow}
          alt="My SVG"
          width={20}
          height={20}
          priority={true}
        />
      </span>
    </Link>
  );
};

export default ScrollButton;
