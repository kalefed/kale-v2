"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useState } from "react";

export default function AccordianExperience() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));
  const experience_items = [
    {
      title: "Junior Developer",
      company: "Statistics Canada",
      year: "2024",
      id: "junior-dev",
      desc: "Developed a validator web app using Next.js, Tailwind CSS, React Query, next-intl and NextAuth to validate user-uploaded data files, displaying metadata errors directly to users and eliminating the need for developers to manually check logs.",
    },
    {
      title: "Student Developer",
      company: "Canada Revenue Agency",
      year: "2023",
      id: "student-developer",
      desc: "I developed and implemented unit tests, enhancing code quality and software reliability using JUnit. I also collaboratively designed conditional rendering for Java Swing application components, enhancing user interface flexibility.",
    },
    {
      title: "Junior Analyst/Developer",
      company: "Statistics Canada",
      year: "2023",
      id: "junior-analyst-dev",
      desc: (
        <>
          Built a metadata search engine with React, Elasticsearch, Docker,
          Material-UI, and Flask, enabling cross-dataset search across 3
          standards, improving search efficiency and accessibility through
          custom RDF mapping rules and keyword filtering.
          <br />
          <br />
          Designed and implemented ETL data pipelines to process and load data
          into a triple store using custom mapping rules, while developing an
          API using FastAPI to retrieve standardized metadata for streamlined
          search functionality.
        </>
      ),
    },
    {
      title: "Web Developer",
      company: "Queen's Women in Computing (QWIC)",
      year: "2024",
      id: "web-dev",
      desc: (
        <>
          I Led a team of 3 using Agile methodologies to develop QWIC’s website
          using Next.js, Tailwind CSS, Vercel and implemented API endpoints in
          Next.js using Prisma ORM to interact with Vercel Postgres for
          optimized data handling.
          <br />
          <br />
          Coordinated the redesign process, creating the overall visual style,
          user experience and mobile/web designs for the website in Figma.
        </>
      ),
    },
    {
      title: "Team Lead & Web Dev",
      company: "Queen’s Web Development Club",
      year: "2024",
      id: "team-lead-dev",
      desc: "Led and mentored a team of 4 to design and build a responsive website for a Queen’s student association during a 4-month development sprint using React, Tailwind CSS, Express.js, and MongoDB.",
    },
    {
      title: "Full Stack Developer",
      company: "Queen’s University Computing Students Association (COMPSA)",
      year: "2023",
      id: "full-stack-dev",
      desc: "Built a responsive admin panel with Next.js, Docker, and Bulma, enabling non-technical users to add, edit or delete events, team members, and content—automating website updates without requiring non-technical users to make code changes.",
    },
  ];

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      className="font-poppins text-xl"
    >
      {experience_items.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label="Accordion 1"
          title={<span className="text-lg">{item.title}</span>}
          subtitle={
            <span className="text-base">
              {item.company} - {item.year}
            </span>
          }
        >
          <span className="text-base"> {item.desc}</span>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
