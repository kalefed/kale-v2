import Image from "next/image";

export default function page() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10 font-poppins"
      id="projects"
    >
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-[60px] font-script text-center">Say What?</h1>
        <h2 className="text-lg font-poppins text-center ">
          Best Education Hack Winner
        </h2>
        <h2 className="text-lg font-poppins text-center text-secondary-col">
          March 2025
        </h2>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/kale-v2/saywhat.png"
          width={700}
          height={200}
          alt="Say What picture"
          className="mb-10"
        />
        <div className="grid grid-cols-4 grid-rows-4 gap-x-8 gap-y-4 w-4/6">
          <div className="row-span-1 col-span-1">
            <h2 className="font-bold mb-2">Timeline</h2>
            <p>24 hours</p>
          </div>
          <div className="col-span-3 row-span-3">
            <h2 className="font-bold mb-2">Overview</h2>
            <p>Project made for Queen's Women in Computing Hackathon!</p>
            <br />
            <p>
              "say what?" converts slang-heavy sentences into clear, standard
              English while simultaneously determining whether the sentiment is
              positive, neutral, or negative.
            </p>
            <br />
            <p>
              By blending generative AI with an evolving slang dictionary, it
              ensures that no matter how obscure the phrase, users receive both
              a proper English translation and an understanding of its emotional
              tone.
            </p>
          </div>
          <div className="row-span-3 row-start-2">
            <h2 className="font-bold mb-2">Tools</h2>
            <ul>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Zustand</li>
              <li>Motion</li>
              <li>FastAPI</li>
              <li>Pydantic</li>
              <li>OpenAI API</li>
              <li>VADER</li>
              <li>Demojify</li>
              <li>Urban Dictionary API</li>
            </ul>
          </div>
          <div className="col-span-3 col-start-2 row-start-4">
            <h2 className="font-bold mb-2">My Role</h2>
            <p>
              I led the project, independently creating the frontend, and
              created the API.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
