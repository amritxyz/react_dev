// Frontend/General
import { FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";

// Devicons (for programming languages & frameworks)
import { SiTailwindcss, SiNodedotjs } from "react-icons/si";

import { DiMongodb, DiGit, DiReact } from "react-icons/di";

import { RiNextjsFill } from "react-icons/ri";

// Simple Icons (modern tech logos)
import {
  SiTypescript,
  SiReactquery,
  SiExpress,
  SiTypeorm,
  SiPrisma,
} from "react-icons/si";

// Material Design Icons
import { MdHttp } from "react-icons/md";

// VSCode Icons
import { VscKey } from "react-icons/vsc";

// Bootstrap Icons
import { BiLogoPostgresql } from "react-icons/bi";

// Font Awesome (other tools)
import { FaDocker } from "react-icons/fa";

const categoryIconMap = {
  Frontend: <FaLaptopCode />,
  Backend: <FaServer />,
  "Database & Tools": <FaDatabase />,
};

const techIconMap = {
  React: <DiReact />,
  "Next.js": <RiNextjsFill />,
  "Tailwind CSS": <SiTailwindcss />,
  "React Query": <SiReactquery />,
  TypeScript: <SiTypescript />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  "REST API": <MdHttp />,
  GraphQL: <SiExpress />, // Placeholder, use a better one if needed
  Authentication: <VscKey />,
  MongoDB: <DiMongodb />,
  PostgreSQL: <BiLogoPostgresql />,
  TypeORM: <SiTypeorm />,
  Prisma: <SiPrisma />,
  Git: <DiGit />,
  Docker: <FaDocker />,
};

const Skill = () => {
  const skills = [
    {
      key: "Frontend",
      langs: ["React", "Next.js", "Tailwind CSS", "React Query", "TypeScript"],
    },
    {
      key: "Backend",
      langs: ["Node.js", "Express", "REST API", "GraphQL", "Authentication"],
    },
    {
      key: "Database & Tools",
      langs: ["MongoDB", "PostgreSQL", "TypeORM", "Prisma", "Git", "Docker"],
    },
  ];

  return (
    <>
      <div id="skills" className="text-center md:mt-8 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-[#fdf6e3] font-bold inline-block ">
          My Skills
          <span className="block h-1 w-24 bg-[#2aa198] mx-auto mt-2 rounded"></span>
        </h1>
        <div className="text-[#839496] text-2xl mt-5 w-xl">
          As a full stack developer, I work across the entire development spectrum,
          from crafting responsive frontends to building robust backend systems.
        </div>
      </div>
      <div className="h-[60vh] flex flex-wrap items-center justify-around px-1 py-10 bg-[#002b36]">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-center w-full md:w-1/3 mb-8 md:mb-0 md:p-9">
            <div className="shadow-xl ring-2 ring-cyan-500/30 w-full max-w-full px-10 py-30 rounded-xl transition-transform duration-300 hover:scale-105 bg-[#073642] text-[#eee8d5]">
              <h2 className="text-4xl sm:text-3xl mb-4 font-bold text-center flex flex-col items-center justify-center gap-2">
                {categoryIconMap[skill.key]}
                {skill.key}
              </h2>
              <ul className="flex flex-wrap justify-center gap-3">
                {skill.langs.map((lang, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#fdf6e3] text-[1.23rem] px-3 py-1 bg-[#2aa198] rounded-full">
                    {techIconMap[lang]}
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skill;
