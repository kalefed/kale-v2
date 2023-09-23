import { dm_mono, josefin_sans } from "@/app/font";
import Link from "next/link";

export default function Experience() {
  const data = [
    "Junior Analyst // Statistics Canada",
    "Student Developer // Canada Revenue Agency",
    "Full Stack Developer // Queen's COMPSA",
    "Student Subcommittee Coordinator // Statistics Canada",
    "Student Peer Mentor // Statistics Canada",
    "CISC226 Video Game Design Artist // Queen's Univeristy",
  ];

  const subData = [
    "May 2021 - April 2023 [2 years]",
    "May 2023 - August 2023 [4 months]",
    "June 2023 - Present [4 months]",
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
    "Course Work",
  ];

  const pageLink = [
    "statisticscanada",
    "canadarevenueagency",
    "compsa",
    "studentsubcommittee",
    "studentpeermentor",
    "cisc226",
  ];

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center h-full">
        <h1
          className={`lg:text-6xl md:text-4xl text-3xl pb-10 ${josefin_sans.className}`}
        >
          experience
        </h1>
        <ul
          className={`border-t border-b border-gray-300 ${dm_mono.className}`}
        >
          {data.map((item, index) => (
            <Link href={`/${pageLink[index]}`} passHref>
            <li
              key={index}
              className="border-gray-300 border-b p-2  md:text-lg sm:text-md hover:bg-gray-100"
              href={`/${pageLink[index]}`}
            >
              {item}
              <div className="flex justify-between">
                {subData[index] && (
                  <p
                    className={`md:text-sm text-xs text-[#a8afb5] ${josefin_sans.className}`}
                  >
                    {subData[index]}
                  </p>
                )}
                <p
                  className={`text-sm text-[#a8afb5] ${josefin_sans.className}`}
                >
                  {posType[index]}
                </p>
              </div>
            </li></Link>
          ))}
        </ul>

        <p
          className={`lg:text-sm md:text-sm text-xs pt-10 ${josefin_sans.className}`}
        >
          I am currently looking for full-time intern work opportunities for
          Summer 2024. If you think I'd be a good match please reach out!
        </p>
      </div>
    </div>
  );
}
