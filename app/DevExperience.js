import AccordianExperience from "@/components/Accordian";

const DevExperience = () => {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10"
      id="experience"
    >
      <header className="flex flex-col lg:flex-row items-center gap-5 mb-8 lg:mb-2">
        <h1 className="text-[60px] font-script -mb-10 lg:mb-0">Development</h1>
        <h1 className="text-[50px] font-medium font-sans">Experience</h1>
      </header>
      <AccordianExperience />
    </section>
  );
};

export default DevExperience;
