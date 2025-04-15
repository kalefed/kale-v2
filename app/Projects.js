import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10 flex flex-col justify-center items-center"
      id="projects"
    >
      <header className="mt-4 mb-6">
        <Image
          src="/kale-v2/projectTitle.png"
          width={550}
          height={550}
          alt="Projects I've Made"
          className="scale-75 lg:scale-100"
        />
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* project one */}
        <article>
          <Link href="/projects/saywhat">
            <div className="bg-[#d1c978] rounded-xl p-3 flex items-center justify-center h-[300px] oveflow-hidden">
              <Image
                src="/kale-v2/saywhat.png"
                width={550}
                height={200}
                alt="Picture of the QWIC website"
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </Link>
          <div className="flex justify-between items-center pt-3">
            <h2 className="text-lg font-poppins font-bold">Say What?</h2>
            <p className="text-secondary-col font-poppins">
              Queen's hackHer - Best Education Winner
            </p>
          </div>
          <p className="font-poppins pt-3">
            Translate slang-heavy sentences into clear, standard English while
            simultaneously determining whether the sentiment is positive,
            neutral, or negative
          </p>
        </article>
        {/* project two */}
        <article>
          <Link href="/projects/qwic">
            <div className="bg-[#F87A53] rounded-xl p-3 flex items-center justify-center h-[300px] oveflow-hidden">
              <Image
                src="/kale-v2/qwic.png"
                width={550}
                height={200}
                alt="Picture of the QWIC website"
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </Link>
          <div className="flex justify-between items-center pt-3">
            <h2 className="text-lg font-poppins font-bold">
              Community Club Website
            </h2>
            <p className="text-secondary-col font-poppins">
              Queen's Women in Computing
            </p>
          </div>
          <p className="font-poppins pt-3">
            Led the design and development of Queen's Women in Computing's
            (QWIC's) website
          </p>
        </article>
        {/* project three */}
        <article>
          <div className="bg-[#F87A53] rounded-xl p-3 flex items-center justify-center h-[300px] oveflow-hidden">
            <Image
              src="/kale-v2/app.png"
              width={440}
              height={150}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="flex justify-between items-center pt-3">
            <h2 className="text-lg font-poppins font-bold">Rise</h2>
            <p className="text-secondary-col font-poppins">
              QHacks 24-hour Hackathon
            </p>
          </div>
          <p className="font-poppins pt-3">
            Encouraging increased lecture attendance using gamification
          </p>
        </article>
        {/* project four */}
        <article>
          <div className="bg-[#d1c978] rounded-xl p-3 flex items-center justify-center h-[300px] oveflow-hidden">
            <Image
              src="/kale-v2/compsa.png"
              width={550}
              height={200}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="flex justify-between items-center pt-3">
            <h2 className="text-lg font-poppins font-bold">Admin Panel</h2>
            <p className="text-secondary-col font-poppins">
              Queen's Computing Association (COMPSA)
            </p>
          </div>
          <p className="font-poppins pt-3">
            Automating website updates without requiring non-technical users to
            make code changes
          </p>
        </article>
        {/* project five */}
        <article>
          <div className="bg-[#d1c978] rounded-xl p-3 flex items-center justify-center h-[300px] oveflow-hidden">
            <Image
              src="/kale-v2/pentagram.png"
              width={500}
              height={200}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>{" "}
          <div className="flex justify-between items-center pt-3">
            <h2 className="text-lg font-poppins font-bold">The Pentagram</h2>
            <p className="text-secondary-col font-poppins">
              Game Design Project
            </p>
          </div>
          <p className="font-poppins pt-3">
            A murder mystery detective game which takes place on a desktop
            computer
          </p>
        </article>
        {/* project six */}
        <article>
          <div className="bg-[#F87A53] rounded-xl p-3 flex items-center justify-center h-[300px] oveflow-hidden">
            <Image
              src="/kale-v2/qvsa.png"
              width={300}
              height={100}
              alt="Picture of the QWIC website"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="flex justify-between items-center pt-3">
            <h2 className="text-lg font-poppins font-bold">
              Student Association Website
            </h2>
            <p className="text-secondary-col font-poppins">QWEB</p>
          </div>
          <p className="font-poppins pt-3">
            Wesbite for Queen's Vietnamese Student Association (QVSA)
          </p>
        </article>
      </div>
    </section>
  );
}
