import Link from "next/link"

export default function NavBar() {
    return (
        <div className="font-mono bg-blur flex flex-row justify-end pt-10">
            <ul className="flex space-x-4">
          <li>
            <Link href="/">experience</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/resume">resume</Link>
          </li>
        </ul>
        </div>
    )
}