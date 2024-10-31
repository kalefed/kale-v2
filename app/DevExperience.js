import React from "react";
import Image from "next/image";
import ExperienceTile from "@/components/experienceTile";

const DevExperience = () => {
  const experience_items = [
    {
      title: "Junior Developer",
      company: "Statistics Canada",
      year: "2024",
    },
    {
      title: "Student Developer",
      company: "Canada Revenue Agency",
      year: "2023",
    },
    {
      title: "Junior Analyst/Developer",
      company: "Statistics Canada",
      year: "2023",
    },
    {
      title: "Web Developer",
      company: "Queen's Women in Computing (QWIC)",
      year: "2024",
    },
    {
      title: "Team Lead & Web Dev",
      company: "Queen’s Web Development Club",
      year: "2024",
    },
    {
      title: "Full Stack Developer",
      company: "Queen’s University Computing Students Association (COMPSA)",
      year: "2023",
    },
  ];

  return (
    <div className="bg-white px-36 py-10 mx-44" id="experience">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-[60px] font-script">Development</h1>
        <h1 className="text-[50px] font-medium font-sans">Experience</h1>
      </div>
      <div>
        <ul>
          {experience_items.map((item, index) => (
            <li key={index}>
              <div className="flex flex-row justify-between font-poppins py-2">
                <div className="flex flex-row gap-3">
                  <p>{item.title}</p>
                  <p className="text-secondary-col">{item.company}</p>
                </div>
                <p>{item.year}</p>
              </div>
              {/* Add divider underneath item unless it is the last in teh list */}
              {index != experience_items.length - 1 && (
                <div className="border-b border-gray-300 my-1"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevExperience;
