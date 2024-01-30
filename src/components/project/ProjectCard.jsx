import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative overflow-hidden  border py-1.5 rounded shadow-lg shadow-indigo-500/20">
      <div className="flex items-center justify-between px-2 py-3 text-blue-600">
        <div className="flex items-center gap-1">
          <FaEye />
          <a href={project?.link} target="_blank" className="text-sm font-semibold lg:hover:underline lg:hover:text-green-400 ">
            View Demo
          </a>
        </div>
        <div className="flex items-center gap-1">
          <a href={project?.code} target="_blank" className="text-sm font-semibold lg:hover:underline lg:hover:text-green-400 ">
            View Code
          </a>
          <FaGithub />
        </div>
      </div>
      <div className="relative group">
        <Image
          width={800}
          height={800}
          objectFit="contain"
          src={`/images/${project?.imgUrl}`}
          alt="project"
          quality={100}
          className="object-contai h-52 sm:h-64"
          draggable="false"
        />
        <div className="absolute top-0 left-0 right-0 hidden w-full h-full py-12 text-white sm:py-16 group-hover:block bg-background bg-opacity-90">
          <a
            href={project?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="grid gap-1 text-center cursor-pointer place-items-center"
          >
            <Image
              width={40}
              height={40}
              src={`/images/${project?.connect}`}
              alt="link"
              objectFit="contain"
              draggable="false"
            />
            <h1>{project?.projectName}</h1>
            <span> {project?.link}</span>
          </a>
        </div>
      </div>
      <h1 className="py-2 text-xl text-center font-semibold">{project?.projectName}</h1>
     
    </div>
  );
};

export default ProjectCard;
