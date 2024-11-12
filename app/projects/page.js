import React from "react";

export default function Projects() {
  return (
    <div className="bg-white px-36 py-10 mx-44 flex flex-col gap-8">
      {/* Junior Dev @ Stat Can */}
      <div id="junior-dev">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-[60px] font-script">Junior Developer</h1>
          <h1 className="text-[50px] font-medium font-sans">
            @ Statistics Canada
          </h1>
        </div>
        <h2 className="text-secondary-col font-poppins my-3">
          May 2024 - Present
        </h2>
        <div className="flex flex-col gap-3">
          <p className="font-poppins">
            I am currently working in the Center for Statistical Data Standards
            at Statistics Canada as a Junior Developer.
          </p>
          <p className="font-poppins">
            My main project has been developing an internal data validation
            platform. I am resposinble for the frontend development of the
            project, which I have been developing with Next.js, Tailwind CSS,
            MUI components and NextAuth. Users are able to log in, upload data
            files and view a detailed validation report.
          </p>
        </div>
      </div>
      {/* Junior Dev/Analyst @ Stat Can */}
      <div id="junior-analyst-dev">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-[60px] font-script">Junior Analyst</h1>
          <h1 className="text-[50px] font-medium font-sans">
            @ Statistics Canada
          </h1>
        </div>
        <h2 className="text-secondary-col font-poppins my-3">
          May 2021 - April 2023
        </h2>
        <div className="flex flex-col gap-3">
          <p className="font-poppins">
            I did a 16-month QUIP (Queen's Undergraduate Internship Program)
            with Statistics Canada as a Junior analyst/developer in the Center
            for Statistical Data Standards.
          </p>
          <p className="font-poppins">
            During my time here I worked on a metadata search engine. First
            working on creating mappings for data into one standard to enable
            interoperable search. I then developed ETL pipelines leveraging
            Python, to extract the data, transform with the mappings and load
            into a triple store.
          </p>
          <p className="font-poppins">
            The second phase of the project was learning React, Boostrap, CSS
            and HTML to create the responsive frontend, allowing a user to
            search and apply various filters to discover datasets.
          </p>
        </div>
      </div>
      {/* Student Dev @ CRA */}
      <div id="student-developer">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-[60px] font-script">Student Developer</h1>
          <h1 className="text-[50px] font-medium font-sans">@ CRA</h1>
        </div>
        <h2 className="text-secondary-col font-poppins my-3">
          May 2023 - August 2023
        </h2>
        <div className="flex flex-col gap-3">
          <p className="font-poppins"></p>
          <p className="font-poppins">
            I developed and implemented unit tests, enhancing code quality and
            software reliability using JUnit. I also collaboratively designed
            conditional rendering for Java Swing application components,
            enhancing user interface flexibility
          </p>
        </div>
      </div>
      {/* web dev @ QWIC */}
      <div id="web-dev">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-[60px] font-script">Web Developer</h1>
          <h1 className="text-[50px] font-medium font-sans">@ QWIC</h1>
        </div>
        <h2 className="text-secondary-col font-poppins my-3">
          May 2024 - Present
        </h2>
        <div className="flex flex-col gap-3">
          <p className="font-poppins">
            I am currently a web developer on Queen's Women in Computing,
            working on a team of 3 to build QWIC's website.
          </p>
          <p className="font-poppins">
            I worked on 5 different page designs on Figma, idealizing the
            website design and creating illustrative art asssets for the
            website. I led the development of the website, using Next.js,
            Tailwind CSS and Vercel.
          </p>
          <p className="font-poppins">
            Next steps for this project is backend development.
          </p>
        </div>
      </div>
      {/* team lead @ QWEB */}
      <div id="web-dev">
        <div className="flex flex-row items-center gap-5">
          <h1 className="text-[60px] font-script">Team Lead</h1>
          <h1 className="text-[50px] font-medium font-sans">@ QWEB</h1>
        </div>
        <h2 className="text-secondary-col font-poppins my-3">
          May 2024 - Present
        </h2>
        <div className="flex flex-col gap-3">
          <p className="font-poppins">
            I led a team of 4 developers with no previous web development
            experience, organizing sprint and development timelines, providing
            support and aiding in both website design and development.
          </p>
          <p className="font-poppins">
            The website was built using React, Tailwind CSS and PostgreSQL.
          </p>
        </div>
      </div>
    </div>
  );
}
