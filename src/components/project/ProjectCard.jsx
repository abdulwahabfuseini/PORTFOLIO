import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative overflow-hidden  bg-background p-1.5 rounded">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <FaEye />
          <a href={project?.link} target="_blank" className="text-sm">
            View Demo
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href={project?.code} target="_blank" className="text-sm">
            View Code
          </a>
          <FaGithub />
        </div>
      </div>
      <div className="group relative">
        <Image
          width={800}
          height={800}
          src={`/images/${project?.imgUrl}`}
          alt="project"
          quality={100}
          className="h-52 sm:h-60"
          draggable="false"
        />
        <div className="absolute top-0 left-0 right-0 hidden w-full h-full py-20 group-hover:block bg-background bg-opacity-90">
          <a
            href={project?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="grid gap-1 cursor-pointer place-items-center text-center"
          >
            <Image
              width={40}
              height={40}
              src={`/images/${project?.connect}`}
              alt="link"
              draggable="false"
            />
            <h1>{project?.projectName}</h1>
            <span> {project?.link}</span>
          </a>
        </div>
      </div>
      <h1 className="text-xl text-center py-2">{project?.projectName}</h1>
     
    </div>
  );
};

export default ProjectCard;
