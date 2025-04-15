import AccordianExperience from "@/components/Accordian";
import Image from "next/image";

const DevExperience = () => {
  return (
    <section
      className="bg-white mx-12 sm:mx-20 md:mx-56 lg:mx-72 py-10 flex flex-col justify-center items-center"
      id="experience"
    >
      <header className="my-4">
        <Image
          src="/kale-v2/devTitle.png"
          width={500}
          height={500}
          alt="Development Experience"
          className="scale-75 lg:scale-100"
        />
      </header>
      <AccordianExperience />
    </section>
  );
};

export default DevExperience;
