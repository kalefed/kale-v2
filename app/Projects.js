import React from "react";
import ProjectTile from "@/components/ProjectTile";
import QWIC from "../public/QWICwebsite.png";
const Projects = () => {
  return (
    <div className="h-fit px-44 pb-12 pt-12">
      <h1 className="font-semibold text-[40px] text-center">
        Projects I've Done
      </h1>
      <div className="flex flex-col gap-12 pt-12">
        <ProjectTile
          subtitle="project for QWIC"
          title="Club Website"
          description="Designed and programmed QWIC's webpage to communicate our mission statement to potential sponsors and to students."
          thumbnail={QWIC}
        />
        <ProjectTile
          subtitle="project for COMPSA"
          title="Admin Panel"
          description="Designed and developed a responsive Admin panel for the COMPSA website to allow authorized users to interact with the API and display the database in an intuitive and user-friendly way."
          thumbnail={QWIC}
        />
        <ProjectTile
          subtitle="Game Design Project (CISC226)"
          title="The Pentagram"
          description="The Pentagram is a detective game set on an old desktop computer. Navigate the computer to find clues and solve mysteries to discover what the secret organization, 'The Pentagram' has been up to and why they've been doing it."
          thumbnail={QWIC}
        />
        <ProjectTile subtitle="QHacks Project" title=" __ App" description="" />
        <ProjectTile
          subtitle="Team project for QWEB"
          title="Club Website"
          description="Designed and programmed QVSA's webpage to communicate their club to students."
          thumbnail={QWIC}
        />
        <ProjectTile
          subtitle="HCI Design Project (CISC)"
          title="Prescence"
          description="Prototype of an application aiming to encourage students to attend class - and keep going!"
          thumbnail={QWIC}
        />
      </div>
    </div>
  );
};

export default Projects;
