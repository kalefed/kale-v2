import Image from "next/image";

export default function Projects() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10"
      id="projects"
    >
      <header className="flex flex-col lg:flex-row items-center gap-5  mb-8 lg:mb-2">
        <h1 className="text-[60px] font-script -mb-10 lg:mb-0">Projects</h1>
        <h1 className="text-[50px] font-medium font-sans">I've Made</h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* project one */}
        <article>
          <div className="bg-[#d1c978] rounded-xl p-3 flex items-center justify-center h-[300px] oveflow-hidden">
            <Image
              src="/kale-v2/qwic.png"
              width={550}
              height={200}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <h2 className="text-lg pt-3 font-poppins">
            Outreach & Community Website
          </h2>
          <p className="text-secondary-col font-poppins">
            Queen's Women in Computing
          </p>
        </article>
        {/* project two */}
        <article>
          <div className="bg-[#F87A53] rounded-xl p-3 flex items-center justify-center h-[300px] overflow-hidden">
            <Image
              src="/kale-v2/app.png"
              width={550}
              height={200}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <h2 className="text-lg pt-3 font-poppins">
            Gameified Attendance App
          </h2>
          <p className="text-secondary-col font-poppins">
            QHacks Project & CISC325 Project
          </p>
        </article>
        {/* project three */}
        <article>
          <div className="bg-[#F87A53] rounded-xl p-3 flex items-center justify-center h-[300px] overflow-hidden">
            <Image
              src="/kale-v2/compsa.png"
              width={550}
              height={200}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <h2 className="text-lg pt-3 font-poppins">Admin Panel</h2>
          <p className="text-secondary-col font-poppins">
            Queen’s University Computing Students Association (COMPSA)
          </p>
        </article>
        {/* project four */}
        <article>
          <div className="bg-[#d1c978] rounded-xl p-3 flex items-center justify-center h-[300px] overflow-hidden">
            <Image
              src="/kale-v2/pentagram.png"
              width={550}
              height={200}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <h2 className="text-lg pt-3 font-poppins">
            The Pentagram - Video Game
          </h2>
          <p className="text-secondary-col font-poppins">
            CISC226 Game Design Project
          </p>
        </article>
        {/* project five */}
        <article>
          <div className="bg-[#d1c978] rounded-xl p-3 flex items-center justify-center h-[300px] overflow-hidden">
            <Image
              src="/kale-v2/qvsa.png"
              width={300}
              height={300}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <h2 className="text-lg pt-3 font-poppins">
            Student Association Website
          </h2>
          <p className="text-secondary-col font-poppins">
            Queen's Vietnamese Student Association (QVSA)
          </p>
        </article>
      </div>
    </section>
  );
}
