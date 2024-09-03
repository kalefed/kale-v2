import React from "react";
import ProjectTile from "@/components/ProjectTile";
import QWIC from "..//public/QWICwebsite.png";
const Projects = () => {
  return (
    <div className="h-fit px-44 pb-12 pt-12" id="projects">
      <h1 className="font-semibold text-[40px] text-center">
        Featured Projects
      </h1>
      <div className="flex flex-col gap-12 pt-12">
        <ProjectTile
          subtitle="project for QWIC"
          title="QWIC Club Website"
          description="This project involved designing and developing a comprehensive website for a university club. The goal was to create a visually appealing, user-friendly platform that aligns with the club's brand identity and meets accessibility standards."
          contributions={[
            "Led the design and development process, creating intuitive and visually cohesive web pages that reflect the club's identity",
            "Leveraged Next.js, Tailwind CSS, and Framer Motion to develop a responsive, dynamic frontend, providing an engaging user experience across all devices",
            "Utilized Prisma and PostgreSQL to build a robust backend, ensuring efficient data management and seamless functionality.",
          ]}
          // thumbnail={}
        />
        <ProjectTile
          subtitle="project for COMPSA"
          title="COMPSA Admin Panel"
          description="This project involved developing a responsive Admin Panel for the COMPSA website, enabling real-time updates to the database. The panel was designed to streamline content management and enhance user experience for administrators."
          contributions={[
            "Designed and developed a responsive Admin Panel using Next.js, Bulma CSS, and Docker, ensuring seamless access and updates across various device",
            "Implemented secure user authentication to safeguard the admin functionalities and data integrity",
          ]}
          // thumbnail={QWIC}
        />
        <ProjectTile
          subtitle="Game Design Project (CISC226)"
          title="Video Game Design Project - The Pentagram"
          description="In my second year of computing, I took the Video Game Design course (CISC226), which required a year-long group project to create a video game from concept to completion. Our team developed 'The Pentagram', a detective-themed game that incorporated various gameplay mechanics and narrative elements."
          contributions={[
            "Collaboratively developed the game's art assets, working closely with team members to create visually engaging graphics and animations that brought the game's world to life.",
            "Played a key role in crafting the game's storyline and puzzles, ensuring a cohesive and immersive experience for players by working alongside peers to balance challenge and entertainment.",
          ]}
          // thumbnail={QWIC}
        />
        {/* <ProjectTile
          subtitle="QHacks App Project"
          title=" QHACKS Project - Productivity App"
          description=""
        /> */}
        <ProjectTile
          subtitle="Team project for QWEB"
          title="QVSA Club Website"
          description="Designed and programmed QVSA's webpage to communicate their club to students."
          contributions={[
            "Led the design and development process, creating intuitive and visually cohesive web pages that reflect the club's identity",
            "Leveraged Next.js, Tailwind CSS, and Framer Motion to develop a responsive, dynamic frontend, providing an engaging user experience across all devices",
            "Utilized Prisma and PostgreSQL to build a robust backend, ensuring efficient data management and seamless functionality.",
          ]}
          // thumbnail={QWIC}
        />
        <ProjectTile
          subtitle="HCI Design Project (CISC)"
          title="UI/UX Design Project - Prescence"
          description="Prototype of an application aiming to encourage students to attend class - and keep going!"
          contributions={[
            "Led the design and development process, creating intuitive and visually cohesive web pages that reflect the club's identity",
            "Leveraged Next.js, Tailwind CSS, and Framer Motion to develop a responsive, dynamic frontend, providing an engaging user experience across all devices",
            "Utilized Prisma and PostgreSQL to build a robust backend, ensuring efficient data management and seamless functionality.",
          ]}
          // thumbnail={QWIC}
        />
      </div>
    </div>
  );
};

export default Projects;
