import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiMysql,
  SiHtml5,
  SiSass,
  SiFigma,
  SiGit,
} from "react-icons/si";

export function Skills() {
  const skills = [
    { title: "JavaScript", icon: <SiJavascript size={36} /> },
    { title: "React", icon: <FaReact size={36} /> },
    { title: "TypeScript", icon: <SiTypescript size={36} /> },
    { title: "Next.js", icon: <SiNextdotjs size={36} /> },
    { title: "Node.js", icon: <FaNodeJs size={36} /> },
    { title: "Firebase", icon: <RiFirebaseFill size={36} /> },
    { title: "MySQL", icon: <GrMysql size={36} /> },
    { title: "HTML", icon: <SiHtml5 size={36} /> },
    { title: "CSS", icon: <FaCss3Alt size={36} /> },
    { title: "Tailwind", icon: <RiTailwindCssFill size={36} /> },
    { title: "Sass", icon: <SiSass size={36} /> },
    { title: "Figma", icon: <SiFigma size={36} /> },
    { title: "Git", icon: <SiGit size={36} /> },
  ];

  return (
    <div className="grid grid-cols-5 gap-6 mt-8 max-lg:grid-cols-3 max-md:grid-cols-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-row overflow-hidden bg-neutral-900 py-3 px-12 justify-center shadow-lg rounded-xl gap-4 items-center hover:scale-105 duration-300 transition-all max-md:gap-2"
        >
          <div className="mb-2 text-purple-600">{skill.icon}</div>
          <p className="text-white font-medium max-md:text-sm">{skill.title}</p>
        </div>
      ))}
    </div>
  );
}
