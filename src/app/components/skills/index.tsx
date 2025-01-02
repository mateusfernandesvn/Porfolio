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
    { title: "JavaScript", icon: <SiJavascript size={40} /> },
    { title: "React", icon: <FaReact size={40} /> },
    { title: "TypeScript", icon: <SiTypescript size={40} /> },
    { title: "Next.js", icon: <SiNextdotjs size={40} /> },
    { title: "Node.js", icon: <FaNodeJs size={40} /> },
    { title: "Firebase", icon: <RiFirebaseFill size={40} /> },
    { title: "MySQL", icon: <GrMysql size={40} /> },
    { title: "HTML", icon: <SiHtml5 size={40} /> },
    { title: "CSS", icon: <FaCss3Alt size={40} /> },
    { title: "Tailwind", icon: <RiTailwindCssFill size={40} /> },
    { title: "Sass", icon: <SiSass size={40} /> },
    { title: "Figma", icon: <SiFigma size={40} /> },
    { title: "Git", icon: <SiGit size={40} /> },
  ];

  return (
    <div className="grid grid-cols-5 gap-6 mt-8  max-md:grid-cols-3 ">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-row bg-white py-2 px-6 justify-center shadow-lg rounded-xl gap-6 items-center hover:scale-105 duration-300 transition-all"
        >
          <div className="mb-2 text-purple-600">{skill.icon}</div>
          <p className="text-black font-medium">{skill.title}</p>
        </div>
      ))}
    </div>
  );
}
