import Link from "next/link";
import { dm_sans } from "@/app/font";

export default function NavBar() {
  return (
    <div
      className={`flex flex-row justify-between items-center pt-10 lg:text-lg md:text-base text-md ${dm_sans.className}`}
    >
      <div className="text-xl">kf.</div>
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/" className="hover:text-[#759dc5]">
            Experience
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-[#759dc5]">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/KaleighFederResume.pdf"
            download="KaleighFederResume.pdf"
            className="hover:text-[#759dc5]"
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}
