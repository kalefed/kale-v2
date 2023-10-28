import { syne, roboto_mono } from "@/app/font";
import Link from "next/link";
import Image from "next/image";

export default function Experience({}) {
  const data = [
    "Junior Analyst // Statistics Canada",
    "Student Developer // Canada Revenue Agency",
    "Full Stack Developer // Queen's COMPSA",
    "Orientation Leader // Queen's Univeristy",
    "Student Subcommittee Coordinator // Statistics Canada",
    "Student Peer Mentor // Statistics Canada",
    "CISC226 Video Game Design Project // Queen's Univeristy",
  ];

  const subData = [
    "May 2021 - April 2023 [2 years]",
    "May 2023 - August 2023 [4 months]",
    "June 2023 - Present [4 months]",
    "September 2023",
    "May 2022 - September 2022 [5 months] ",
    "September 2021 - May 2022 [9 months]",
    "January 2023 - April 2023 [4 months]",
  ];

  const posType = [
    "Professional",
    "Professional",
    "Volunteer",
    "Volunteer",
    "Volunteer",
    "Volunteer",
    "Course Work",
  ];

  const pageLink = [
    "statisticscanada",
    "canadarevenueagency",
    "compsa",
    "orientation",
    "studentsubcommittee",
    "studentpeermentor",
    "cisc226",
  ];

  return (
    <div className="h-screen grid lg:grid-cols-8 md:grid-cols-8 grid-cols-1 grid-rows-5 gap-5 p-5">
        <div className="lg:col-start-2 lg:col-end-8 lg:row-start-1 lg:row-end-2 flex justify-center items-center">
          <h1
            className={`lg:text-5xl md:text-4xl text-3xl uppercase ${roboto_mono["300"]}`}
          >
            Take a look at my{" "}
            <span className="border-2 border-black inline-block rounded-full p-2">
              experience
            </span>
          </h1>
      </div>
    </div>
  );
}
