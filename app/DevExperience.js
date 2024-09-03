import React from "react";
import Image from "next/image";
import ExperienceTile from "@/components/experienceTile";

const DevExperience = () => {
  const experienceData = [];
  return (
    <div className="bg-white px-36 py-10" id="experience">
      <div className="pt-10 flex justify-center">
        <div className="relative w-fit">
          <h1 className="font-semibold text-[40px] text-center z-0 text-[#1A1A1E]">
            My Development Experience
          </h1>
          <div className="z-10 absolute top-0 -right-20">
            <Image
              src="/nextjs-github-pages/pinkstar.png"
              width={40}
              height={40}
              className="animate-spinSlow"
            />
          </div>
          <div className="z-10 absolute bottom-0 -left-20">
            <Image
              src="/nextjs-github-pages/bluestar.png"
              width={40}
              height={40}
              className="animate-spinSlow"
            />
          </div>
        </div>
      </div>
      <div className="my-9 grid grid-cols-2 gap-12">
        <ExperienceTile
          title="Junior Developer"
          position="Statistics Canada"
          dates="May 2024 - Present"
          description={[
            "Created a bilingual application in Next.js with integrated data validation and NextAuth for protected pages, enabling users to validate data files and view detailed validation reports",
            "Implemented CI/CD pipelines in GitLab for managing releases and feature branches, leveraging existing infrastructure to enhance development and deployment efficiency across multiple projects",
          ]}
          type="Professional"
        />
        <ExperienceTile
          title="Student Developer"
          position="Canada Revenue Agency"
          dates="June 2023 - April 2024"
          description={[
            "Developed and implemented unit tests using JUnit and Mockito, enhancing software reliability and code quality",
            "Collaboratively designed conditional rendering for Java Swing application components, enhancing user interface flexibility",
          ]}
          type="Professional"
        />
        <ExperienceTile
          title="Junior Analyst/Developer"
          position="Statistics Canada"
          dates="May 2021 - April 2023"
          description={[
            "Created a metadata search engine using React, Elasticsearch and Material-UI, enhancing search capabilities for efficient data retrieval",
            "Utilized OpenAPI to establish standardized RESTful APIs in Python, ensuring efficient data communication and integration",
          ]}
          type="Professional"
        />
        <ExperienceTile
          title="Web Developer"
          position="Queen's Women in Computing"
          dates="April 2024 - Present"
          description={[
            "Designed and developed intuitive and visually cohesive web pages that reflect the club's identity",
            "Utilized Next.js, Tailwind CSS, and CSS animations to build a responsive and engaging frontend for the website",
          ]}
          type="Extracurricular"
        />
        <ExperienceTile
          title="Team Lead & Web Dev"
          position="Queen’s Web Development Club"
          dates="January 2024 - April 2024"
          description={[
            "Led a development team of 4 people to design and create a website for QVSA",
            "Facilitated weekly development meetings, providing technical support and ensuring alignment with project goals while promoting active involvement from all team members",
            "Created website designs using Figma and utilized React and Tailwind CSS to create a responsive landing page",
          ]}
          type="Extracurricular"
        />
        <ExperienceTile
          title="Full Stack Developer"
          position="Queen’s University Computing Students Association (COMPSA)"
          dates="June 2023 - April 2024"
          description={[
            "Developed a responsive Admin Panel website with user authentication to facilitate real-time updates to the COMPSA website database using Next.js, Bulma CSS and Docker",
            "Collaborated to develop a responsive navigation bar and login modals with React and Tailwind CSS",
          ]}
          type="Extracurricular"
        />
      </div>
    </div>
  );
};

export default DevExperience;
