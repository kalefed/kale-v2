import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10 flex flex-col justify-center items-center"
      id="projects"
    >
      <header className="mt-4">
        <Image
          src="/kale-v2/projectTitle.png"
          width={550}
          height={550}
          alt="Projects I've Made"
          className="scale-75 lg:scale-100"
        />
      </header>
      <p className="font-poppins pt-3 text-center mb-6">
        Click on each project to learn about the technologies used and my
        contributions
      </p>
      <div className="relative">
        <Image
          src="/kale-v2/corkBoard.jpg"
          width={1000}
          height={1000}
          alt="Corkboard"
          className="scale-75 lg:scale-100"
        />
        <Link href="/projects/saywhat">
          <Image
            src="/kale-v2/hackHerBoard.png"
            width={350}
            height={350}
            alt="Say What - HackHer 2025"
            className="scale-75 lg:scale-100 absolute top-10 left-10 -rotate-3 hover:rotate-6 transition"
          />
        </Link>
        <Link href="/projects/qwic">
          <Image
            src="/kale-v2/qwicBoard.png"
            width={350}
            height={350}
            alt="QWIC Club Website"
            className="scale-75 lg:scale-100 absolute top-10 right-20 rotate-3 hover:-rotate-6 transition"
          />
        </Link>
        <Image
          src="/kale-v2/compsaBoard.png"
          width={350}
          height={350}
          alt="Compsa Admin Panel"
          className="scale-75 lg:scale-100 absolute bottom-10 left-10 rotate-3 hover:rotate-6 transition"
        />
        <Image
          src="/kale-v2/qhacksBoard.png"
          width={325}
          height={325}
          alt="QHacks 2024"
          className="scale-75 lg:scale-100 absolute bottom-10 right-16 rotate-3 hover:rotate-6 transition"
        />
      </div>
    </section>
  );
}
