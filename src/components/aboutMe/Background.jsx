// const variants = {
//   hidden: {
//     opacity: 0
//   },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3
//     }
//   }
// }

import Button from "../Button";

const Background = () => {
  return (
    <div className="px-2">
      <div>
        <h1 className="text-3xl">Profile</h1>
        <p className="py-2 text-xl break-word ">
          I am a highly skilled and creative web developer in designing and
          building interactive and user-friendly websites and web applications.
          I am passionate about staying up-to-date with the latest web
          technologies and trends to deliver innovative and high-quality
          projects. My dedication to clean code, performance optimization, and
          excellent user experiences sets me apart in the field. I thrive in
          collaborative environments, where I can contribute my technical
          expertise to deliver innovative digital solutions
        </p>
      </div>
      <div className="pt-6">
        <h1 className="text-3xl">Objectives</h1>
        <p className="py-2 text-xl break-word ">
          As a frontend developer, my objective is to learn and grow in a dynamic
          development environment. I aim to use my expertise in HTML, CSS, JavaScript
          to create exceptional user interfaces while gaining hands-on experience with modern web
          frameworks and tools. My goal is to become a proficient web developer
          collaborating with a talented team to create user-friendly, visually
          appealing, and efficient websites and web applications.
        </p>
      </div>
       <div className="flex gap-5">
       <button className="px-4 py-2 my-5 text-xl text-white bg-green-400 rounded-lg hover:bg-white hover:text-background hover:scale-95">
        <a href="FUSEINI ABDUL WAHAB RESUME.pdf" target="_blank" rel="resume">
          Download Cv
        </a>
      </button>
      <Button url="/contact" text="Hire Me" />
       </div>
    </div>
  );
};

export default Background;
