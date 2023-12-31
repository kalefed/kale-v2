import Link from "next/link"
import { syne } from "@/app/font"

export default function NavBar() {
    return (
        <div className={`flex flex-row justify-end pt-10 lg:text-lg md:text-base text-md ${syne.className}`}>
            <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="hover:text-[#759dc5]">experience</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#759dc5]">about</Link>
          </li>
          <li>
            <Link href="/KaleighFederResume.pdf" download="KaleighFederResume.pdf" className="hover:text-[#759dc5]">resume</Link>
          </li>
        </ul>
        </div>
    )
}