import Image from "next/image";

export default function page() {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10 font-poppins"
      id="projects"
    >
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-[60px] font-script text-center">
          Queen's Women in Computing
        </h1>
        <h2 className="text-lg font-poppins text-center text-secondary-col">
          May 2024 - Present
        </h2>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/kale-v2/qwic.png"
          width={700}
          height={200}
          alt="Say What picture"
          className="mb-10"
        />
        <div className="grid grid-cols-4 grid-rows-4 gap-x-8 gap-y-4 w-4/6">
          <div className="row-span-1 col-span-1">
            <h2 className="font-bold mb-2">Timeline</h2>
            <p>6 Months</p>
            <div>
              <h2 className="font-bold mb-2 mt-8">Tools</h2>
              <ul>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Prisma ORM</li>
                <li>Vercel</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 row-span-1">
            <h2 className="font-bold mb-2">Overview</h2>
            <p>
              I led a team of three developers using Agile methodologies to
              build QWIC’s website. I implemented efficient API endpoints with
              Prisma ORM to seamlessly interact with Vercel Postgres, ensuring
              optimal data handling. <br />
              <br />
              As part of the redesign process, I crafted the visual style, user
              experience, and mobile/web designs using Figma. <br />
              <br />I provided 1:1 mentorship and created a development guide to
              support the team, ensuring consistency in development practices.
            </p>
          </div>

          <div className="col-span-3 col-start-2 row-start-2">
            <h2 className="font-bold mb-2">My Role</h2>
            <p>Team Lead, Mentor, Full-Stack Developer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
