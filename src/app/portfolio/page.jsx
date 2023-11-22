import HeadTitle from "@/components/HeadTitle";
import Project from "@/components/project/Project";

export const metadata = {
  title: "PortFolio | Latest Projects",
  description: "LATEST PROJECT",
};

const Portfolio = () => {
  return (
    <div className="grid w-full h-full px-3 py-10 mx-auto sm:px-4 max-w-7xl">
        <HeadTitle title="Latest Projects" text="Portfolio"/>
      <Project />
    </div>
  );
};

export default Portfolio;
