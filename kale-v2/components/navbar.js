import Link from "next/link"

export default function NavBar() {
    return (
        <div className="font-mono bg-blur flex flex-row justify-end pt-10">
            <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-[#759dc5]">experience</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#759dc5]">about</Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text-[#759dc5]">resume</Link>
          </li>
        </ul>
        </div>
    )
}