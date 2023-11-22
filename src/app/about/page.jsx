import HeadTitle from "@/components/HeadTitle";
import AboutMe from "@/components/aboutMe/AboutMe";

export const metadata = {
  title: "PortFolio | About Me",
  description: "ABOUT FUSEINI ABDUL WAHAB",
};

const About = () => {
  return (
    <div className="relative grid w-full h-full px-2 mx-auto py-14 sm:px-4 max-w-7xl">
      <HeadTitle title="About Me" text="biography"/>
      <AboutMe />
    </div>
  );
};

export default About;
