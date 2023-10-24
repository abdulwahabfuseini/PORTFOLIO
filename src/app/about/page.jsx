import AboutMe from "@/components/aboutMe/AboutMe";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
    title: "PortFolio | About Me",
    description: "ABOUT FUSEINI ABDUL WAHAB",
  };
  
const About = () => {
  return (
    <div  className='relative grid w-full h-full px-2 py-20 mx-auto sm:px-4 max-w-7xl'>
       <Suspense fallback={<Loading />}>
       <AboutMe />
       </Suspense>
    </div>
  )
}

export default About