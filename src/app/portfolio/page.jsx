import HeadTitle from "@/components/HeadTitle";
import Project from "@/components/project/Project";

export const metadata = {
  title: "PortFolio | Latest Projects",
  description: "LATEST PROJECT",
};

const Portfolio = () => {
  return (
    <div className="grid w-full h-full px-3 py-6 mx-auto sm:py-8 lg:py-20 max-w-7xl sm:px-4">
        <HeadTitle title="Latest Projects" text="Portfolio"/>
      <Project />
    </div>
  );
};

export default Portfolio;
