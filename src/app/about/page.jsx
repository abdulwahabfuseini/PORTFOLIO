import HeadTitle from "@/components/HeadTitle";
import AboutMe from "@/components/aboutMe/AboutMe";

export const metadata = {
  title: "PortFolio | About Me",
  description: "ABOUT FUSEINI ABDUL WAHAB",
};

const About = () => {
  return (
    <div className="relative grid w-full h-full px-3 py-6 mx-auto sm:py-8 lg: sm:px-4 max-w-7xl lg:py-14">
      <HeadTitle title="About Me" text="biography"/>
      <AboutMe />
    </div>
  );
};

export default About;
