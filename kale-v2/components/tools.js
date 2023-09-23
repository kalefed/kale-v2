import { dm_mono, josefin_sans } from "@/app/font";
import Link from "next/link";
import Image from "next/image";
import nextJSIcon from "../public/images/nextjs.svg";
import reactIcon from "../public/images/react.svg";
import bulmaIcon from "../public/images/bulma.svg";
import tailwindIcon from "../public/images/tailwind.svg";
import materialUIIcon from "../public/images/materialUI.svg";
import bootstrapIcon from "../public/images/bootstrap.svg";
import flaskIcon from "../public/images/flask.svg";
import cssIcon from "../public/images/css.svg";
import htmlIcon from "../public/images/html.svg";
import swaggerIcon from "../public/images/swagger.svg";
import figmaIcon from "../public/images/figma.svg";
import githubIcon from "../public/images/github.svg";
import gitlabIcon from "../public/images/gitlab.svg";
import javaIcon from "../public/images/java.svg";
import javaScriptIcon from "../public/images/javascript.svg";
import jiraIcon from "../public/images/jira.svg";
import pythonIcon from "../public/images/python.svg";

export default function Tools({}) {

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center h-full">
      <h1
          className={`lg:text-6xl md:text-4xl text-3xl pb-10 ${josefin_sans.className}`}
        >
          languages & technical tools 
        </h1>
        <div className="grid grid-cols-7 gap-2 pb-16 pt-2">
          <Image priority src={cssIcon} height={65} width={65} alt="react" />
          <Image priority src={htmlIcon} height={65} width={65} alt="react" />
          <Image priority src={nextJSIcon} height={65} width={65} alt="NextJS"/>
          <Image priority src={reactIcon} height={65} width={65} alt="react" />
          <Image priority src={reactIcon} height={65} width={65} alt="react" />
          <Image priority src={bulmaIcon} height={65} width={65} alt="react" />
          <Image priority src={tailwindIcon} height={65} width={65} alt="react" />
          <Image priority src={materialUIIcon} height={65} width={65} alt="react" />
          <Image priority src={bootstrapIcon} height={65} width={65} alt="react" />
          <Image priority src={flaskIcon} height={65} width={65} alt="react" />
          <Image priority src={swaggerIcon} height={65} width={65} alt="react" />
          <Image priority src={figmaIcon} height={65} width={65} alt="react" />
          <Image priority src={githubIcon} height={65} width={65} alt="react" />
          <Image priority src={gitlabIcon} height={65} width={65} alt="react" />
          <Image priority src={javaIcon} height={65} width={65} alt="react" />
          <Image priority src={javaScriptIcon} height={65} width={65} alt="react" />
          <Image priority src={jiraIcon} height={65} width={65} alt="react" />
          <Image priority src={pythonIcon} height={65} width={65} alt="react" />
        </div>
        </div>
    </div>
  );
}
