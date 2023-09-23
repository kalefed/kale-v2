import { dm_mono, josefin_sans } from "@/app/font";

export default function Experience() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center h-full">
        <h1
          className={`lg:text-6xl md:text-4xl text-2xl ${josefin_sans.className}`}
        >
          experience
        </h1>
        <ol className={`text-2xl list-decimal pl-10 ${dm_mono.className}`}>
          <li>Statistics Canada // Junior Analyst</li>
          <p className="text-lg mb-6 text-slate-600">
            16 MONTH INTERNSHIP [2021]
          </p>
          <li>Canada Revenue Agency // Student Developer</li>
          <p className="text-lg mb-6 text-slate-600">
            [MAY 2023 - AUGUST 2023]
          </p>
          <li>Full Stack Developer // Queen's COMPSA</li>
          <p className="text-lg mb-6 text-slate-600">
            VOLUNTEER [JUNE 2023 - PRESENT]
          </p>
          <li>Student Subcommittee Coordinator // Statistics Canada</li>
          <p className="text-lg mb-6 text-slate-600">
            VOLUNTEER [JUNE 2023 - PRESENT]
          </p>
          <li>Student Peer Mentor // Statistics Canada</li>
          <p className="text-lg mb-6 text-slate-600">
            VOLUNTEER [JUNE 2023 - PRESENT]
          </p>
        </ol>
      </div>
    </div>
  );
}
