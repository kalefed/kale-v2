import { syne} from "@/app/font";
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
    <div className="h-screen" id="experience">
      <div className="flex flex-col justify-center h-full">
        <h1
          className={`lg:text-5xl md:text-4xl text-3xl pb-10 ${syne.className}`}
        >
          Experience
        </h1>

        <ul
          className={`border-t border-b border-gray-300 ${syne.className}`}
        >
          {data.map((item, index) => (
            <Link href={`/${pageLink[index]}`} passHref>
              <li
                key={index}
                className="border-gray-300 border-b p-2  md:text-lg sm:text-md hover:bg-gray-200"
                href={`/${pageLink[index]}`}
              >
                {item}
                <div className="flex justify-between">
                  {subData[index] && (
                    <p
                      className={`md:text-sm text-xs text-[#a8afb5] ${syne.className}`}
                    >
                      {subData[index]}
                    </p>
                  )}
                  <p
                    className={`text-sm text-[#a8afb5] ${syne.className}`}
                  >
                    {posType[index]}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
