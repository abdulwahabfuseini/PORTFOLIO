import Image from "next/image";


const ProjectCard = ({ project }) => {
  return (
    <div className="relative overflow-hidden border-2 rounded-lg group">
      <Image
        width={800}
        height={800}
        src={`/images/${project?.imgUrl}`}
        alt="project"
        quality={100}
        className="h-52 sm:h-60 hover:scale-110"
        draggable="false"
      />
      <div className="p-3 bg-background">
        <h1 className="py-2 text-center text-2xl">{project?.projectName}</h1>
        <p className="text-lg break-word">{project?.desc}</p>
      </div>
      <div className="absolute top-0 left-0 right-0 hidden w-full h-full py-20 group-hover:block bg-background bg-opacity-90">
        <a href={project?.link} target="_blank" rel="noopener noreferrer"className="grid gap-4 place-items-center">
          <Image
            width={80}
            height={80}
            src={`/images/${project?.connect}`}
            alt="link"
            draggable="false"
          />
          <h1 className="py-2 text-2xl">{project?.projectName}</h1>
          <span className="text-xl"> {project?.link}</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
