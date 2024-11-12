import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const DevExperience = () => {
  const experience_items = [
    {
      title: "Junior Developer",
      company: "Statistics Canada",
      year: "2024",
      id: "junior-dev",
    },
    {
      title: "Student Developer",
      company: "Canada Revenue Agency",
      year: "2023",
      id: "student-developer",
    },
    {
      title: "Junior Analyst/Developer",
      company: "Statistics Canada",
      year: "2023",
      id: "junior-analyst-dev",
    },
    {
      title: "Web Developer",
      company: "Queen's Women in Computing (QWIC)",
      year: "2024",
      id: "web-dev",
    },
    {
      title: "Team Lead & Web Dev",
      company: "Queen’s Web Development Club",
      year: "2024",
      id: "team-lead-dev",
    },
    {
      title: "Full Stack Developer",
      company: "Queen’s University Computing Students Association (COMPSA)",
      year: "2023",
      id: "full-stack-dev",
    },
  ];

  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10"
      id="experience"
    >
      <header className="flex flex-col lg:flex-row items-center gap-5 mb-8 lg:mb-2">
        <h1 className="text-[60px] font-script -mb-10 lg:mb-0">Development</h1>
        <h1 className="text-[50px] font-medium font-sans">Experience</h1>
      </header>
      <ul>
        {experience_items.map((item, index) => (
          <li key={item.id}>
            <Link
              className="flex flex-row justify-between font-poppins py-2 px-1 group"
              href={"/projects#" + item.id}
            >
              <div className="flex flex-col lg:flex-row lg:gap-3">
                <span>{item.title}</span>
                <span className="text-secondary-col">{item.company}</span>
                <ArrowForwardIcon className="opacity-0 transition-opacity duration-200 ease-in group-hover:opacity-100" />
              </div>
              <time>{item.year}</time>
            </Link>

            {/* Add divider underneath item unless it is the last in teh list */}
            {index != experience_items.length - 1 && (
              <div className="border-b border-gray-300"></div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DevExperience;
