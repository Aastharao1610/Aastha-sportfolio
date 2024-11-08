// import React from "react";
// import SkillComponent from "./SkillComponent";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaJava,
//   FaPython,
//   FaNodeJs,
//   FaCode,
// } from "react-icons/fa";
// import { SiCplusplus } from "react-icons/si";
// const TailwindIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 54 33"
//     fill="currentColor"
//     className="w-8 h-8"
//   >
//     <path d="M10.74 0C6.53 0 3.19 2.36 1 7.08 3.2 4.72 5.52 3.67 7.94 3.94c1.97.22 3.23 1.46 4.44 2.67C14.47 9.92 16.4 11.92 22.06 11.92c4.21 0 7.55-2.36 9.74-7.08C29.6 7.28 27.28 8.33 24.86 8.06c-1.97-.22-3.23-1.46-4.44-2.67C18.93 2.99 16.99 1 11.34 1 7.12 1 3.79 3.36 1.6 8.08z" />
//     <path d="M27.6 11.08c-4.21 0-7.55 2.36-9.74 7.08 2.2-2.36 4.52-3.41 6.94-3.14 1.97.22 3.23 1.46 4.44 2.67 2.08 2.2 4.02 4.2 9.68 4.2 4.21 0 7.55-2.36 9.74-7.08-2.2 2.36-4.52 3.41-6.94 3.14-1.97-.22-3.23-1.46-4.44-2.67-2.08-2.2-4.02-4.2-9.68-4.2z" />
//   </svg>
// );
// const Skills = () => {
//   return (
//     <div className="bg-gradient-to-r from-[#1B1B1B] to-[#2C3E50] py-16 w-full">
//       <div className="text-white px-6 sm:px-10 md:px-20 lg:px-28 max-w-screen">
//         <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text- text-[#F0F3F4] mb-10">
//           Emerging Skills
//         </h1>
//         <hr className="w-1/2 sm:w-1/3 md:w-1/4 border-gray-500 mb-8" />

//         <div className="text-lg sm:text-xl uppercase mb-8 py-7 text-center text-[#CCD1D1]">
//           Core Skills
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
//           <SkillComponent
//             background="bg-[#334756] hover:bg-[#3A4750] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="HTML5"
//             Icon={FaHtml5}
//           />
//           <SkillComponent
//             background="bg-[#2F3E46] hover:bg-[#3A5A70] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="CSS3"
//             Icon={FaCss3Alt}
//           />
//           <SkillComponent
//             background="bg-[#1A535C] hover:bg-[#3A5A70] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="JavaScript"
//             Icon={FaJs}
//           />
//           <SkillComponent
//             background="bg-[#3D5A80] hover:bg-[#5A7390] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="React"
//             Icon={FaReact}
//           />
//           <SkillComponent
//             background="bg-[#334856] hover:bg-[#47667E] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="Tailwind CSS"
//             Icon={TailwindIcon}
//           />
//         </div>

//         <hr className="w-3/4 border-t border-gray-600 my-10 mx-auto" />

//         <div className="text-lg sm:text-xl uppercase mb-8 py-7 text-center text-[#CCD1D1]">
//           Additional Skills
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="Java"
//             Icon={FaJava}
//           />
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="Python"
//             Icon={FaPython}
//           />
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="C Lang"
//             Icon={FaCode}
//           />
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="C++"
//             Icon={SiCplusplus}
//           />
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg transform hover:scale-105 transition-all duration-200"
//             Skill="Node.js"
//             Icon={FaNodeJs}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Skills;

// import React from "react";
// import SkillComponent from "./SkillComponent";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaJava,
//   FaPython,
//   FaNodeJs,
//   FaCode,
// } from "react-icons/fa";
// import { SiCplusplus } from "react-icons/si";

// const TailwindIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 54 33"
//     fill="currentColor"
//     className="w-8 h-8"
//   >
//     <path d="M10.74 0C6.53 0 3.19 2.36 1 7.08 3.2 4.72 5.52 3.67 7.94 3.94c1.97.22 3.23 1.46 4.44 2.67C14.47 9.92 16.4 11.92 22.06 11.92c4.21 0 7.55-2.36 9.74-7.08C29.6 7.28 27.28 8.33 24.86 8.06c-1.97-.22-3.23-1.46-4.44-2.67C18.93 2.99 16.99 1 11.34 1 7.12 1 3.79 3.36 1.6 8.08z" />
//     <path d="M27.6 11.08c-4.21 0-7.55 2.36-9.74 7.08 2.2-2.36 4.52-3.41 6.94-3.14 1.97.22 3.23 1.46 4.44 2.67 2.08 2.2 4.02 4.2 9.68 4.2 4.21 0 7.55-2.36 9.74-7.08-2.2 2.36-4.52 3.41-6.94 3.14-1.97-.22-3.23-1.46-4.44-2.67-2.08-2.2-4.02-4.2-9.68-4.2z" />
//   </svg>
// );

// const Skills = () => {
//   return (
//     <div className="bg-gradient-to-r from-[#1B1B1B] to-[#2C3E50] py-10 w-full">
//       <div className="text-white px-4 sm:px-8 md:px-16 max-w-screen">
//         <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#F0F3F4] mb-8 text-center">
//           Emerging Skills
//         </h1>
//         <hr className="w-2/3 sm:w-1/2 border-gray-500 mb-6 mx-auto" />

//         <div className="text-md sm:text-lg uppercase mb-6 text-center text-[#CCD1D1]">
//           Core Skills
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 place-items-center">
//           <SkillComponent
//             background="bg-[#334756] hover:bg-[#3A4750] shadow-lg"
//             Skill="HTML5"
//             Icon={FaHtml5}
//           />
//           <SkillComponent
//             background="bg-[#2F3E46] hover:bg-[#3A5A70] shadow-lg"
//             Skill="CSS3"
//             Icon={FaCss3Alt}
//           />
//           <SkillComponent
//             background="bg-[#1A535C] hover:bg-[#3A5A70] shadow-lg"
//             Skill="JavaScript"
//             Icon={FaJs}
//           />
//           <SkillComponent
//             background="bg-[#3D5A80] hover:bg-[#5A7390] shadow-lg"
//             Skill="React"
//             Icon={FaReact}
//           />
//           <SkillComponent
//             background="bg-[#334856] hover:bg-[#47667E] shadow-lg"
//             Skill="Tailwind CSS"
//             Icon={TailwindIcon}
//           />
//         </div>

//         <hr className="w-2/3 border-t border-gray-600 my-8 mx-auto" />

//         <div className="text-md sm:text-lg uppercase mb-6 text-center text-[#CCD1D1]">
//           Additional Skills
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 place-items-center">
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg"
//             Skill="Java"
//             Icon={FaJava}
//           />
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg"
//             Skill="Python"
//             Icon={FaPython}
//           />
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg"
//             Skill="C Lang"
//             Icon={FaCode}
//           />
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg"
//             Skill="C++"
//             Icon={SiCplusplus}
//           />
//           <SkillComponent
//             background="bg-[#283747] hover:bg-[#34495E] shadow-lg"
//             Skill="Node.js"
//             Icon={FaNodeJs}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

// import React from "react";
// import SkillComponent from "./SkillComponent";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaJava,
//   FaPython,
//   FaNodeJs,
//   FaCode,
// } from "react-icons/fa";
// import { SiCplusplus } from "react-icons/si";

// const Skills = () => {
//   return (
//     <div className="bg-[#1B1B1B] py-16 w-full">
//       <div className="text-white px-6 sm:px-10 md:px-20 lg:px-28 max-w-screen">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 font-bold tracking-wide text-center sm:text-left">
//           Emerging Skills
//         </h1>
//         <hr className="w-1/2 sm:w-1/3 md:w-1/4 border-gray-500 mb-8 sm:mb-10 mx-auto sm:mx-0" />

//         {/* Core Skills */}
//         <div className="text-lg sm:text-xl uppercase mb-6 sm:mb-8 text-center sm:text-left">
//           Core Skills
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 place-items-center">
//           <SkillComponent
//             background="bg-gradient-to-r from-[#3A506B] to-[#5BC0BE]"
//             Skill="HTML5"
//             Icon={FaHtml5}
//           />
//           <SkillComponent
//             background="bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]"
//             Skill="CSS3"
//           />
//           <SkillComponent
//             background="bg-gradient-to-r from-[#0F2027] to-[#203A43]"
//             Skill="JavaScript"
//           />
//           <SkillComponent
//             background="bg-gradient-to-r from-[#1D3557] to-[#457B9D]"
//             Skill="React"
//           />
//           <SkillComponent
//             background="bg-gradient-to-r from-[#2E3440] to-[#4C566A]"
//             Skill="Tailwind CSS"
//           />
//         </div>

//         {/* Additional Skills */}
//         <div className="text-lg sm:text-xl uppercase mt-12 sm:mt-16 mb-6 sm:mb-8 text-center sm:text-left">
//           Additional Skills
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 place-items-center">
//           <SkillComponent
//             background="bg-gradient-to-r from-[#53354A] to-[#903749]"
//             Skill="C Language"
//           />
//           <SkillComponent
//             background="bg-gradient-to-r from-[#3A506B] to-[#5BC0BE]"
//             Skill="C++"
//           />
//           <SkillComponent
//             background="bg-gradient-to-r from-[#353535] to-[#4D4D4D]"
//             Skill="Java"
//           />
//           <SkillComponent
//             background="bg-gradient-to-r from-[#1D3557] to-[#457B9D]"
//             Skill="Python"
//           />
//           <SkillComponent
//             background="bg-gradient-to-r from-[#2F3542] to-[#57606f]"
//             Skill="Node.js"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Skills;

import React from "react";
import SkillComponent from "./SkillComponent";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const TailwindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 33"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M10.74 0C6.53 0 3.19 2.36 1 7.08 3.2 4.72 5.52 3.67 7.94 3.94c1.97.22 3.23 1.46 4.44 2.67C14.47 9.92 16.4 11.92 22.06 11.92c4.21 0 7.55-2.36 9.74-7.08C29.6 7.28 27.28 8.33 24.86 8.06c-1.97-.22-3.23-1.46-4.44-2.67C18.93 2.99 16.99 1 11.34 1 7.12 1 3.79 3.36 1.6 8.08z" />
    <path d="M27.6 11.08c-4.21 0-7.55 2.36-9.74 7.08 2.2-2.36 4.52-3.41 6.94-3.14 1.97.22 3.23 1.46 4.44 2.67 2.08 2.2 4.02 4.2 9.68 4.2 4.21 0 7.55-2.36 9.74-7.08-2.2 2.36-4.52 3.41-6.94 3.14-1.97-.22-3.23-1.46-4.44-2.67-2.08-2.2-4.02-4.2-9.68-4.2z" />
  </svg>
);
const Skills = () => {
  return (
    <div className="bg-[#1B1B1B] py-16 w-full">
      <div className="text-white px-6 sm:px-10 md:px-20 lg:px-28 max-w-screen">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 font-bold tracking-wide text-center sm:text-left">
          Emerging Skills
        </h1>
        <hr className="w-1/2 sm:w-1/3 md:w-1/4 border-gray-500 mb-8 sm:mb-10 mx-auto sm:mx-0" />
        {/* Core Skills */}
        {/* <div className="text-lg sm:text-xl uppercase mb-6 sm:mb-8 py-6 text-center ">
          Core Skills
        </div> */}
        <div className="text-lg sm:text-xl uppercase mb-8 py-7 text-center  sm:text-left text-[#CCD1D1]">
          Core Skills
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 place-items-center">
          <SkillComponent
            background="bg-gradient-to-r from-[#3A506B] to-[#5BC0BE]"
            Skill="HTML5"
            Icon={FaHtml5}
          />
          <SkillComponent
            background="bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]"
            Skill="CSS3"
            Icon={FaCss3Alt}
          />
          <SkillComponent
            background="bg-gradient-to-r from-[#0F2027] to-[#203A43]"
            Skill="JavaScript"
            Icon={FaJs}
          />
          <SkillComponent
            background="bg-gradient-to-r from-[#1D3557] to-[#457B9D]"
            Skill="React"
            Icon={FaReact}
          />
          <SkillComponent
            background="bg-gradient-to-r from-[#2E3440] to-[#4C566A]"
            Skill="Tailwind CSS"
            Icon={TailwindIcon} // You can change this to the TailwindIcon if you want
          />
        </div>
        <hr className="xl:w-[1100px] border-t border-gray-600 my-12 mx-auto" />
        {/* Additional Skills */}
        {/* <div className="text-lg sm:text-xl py-6 uppercase mt-12 sm:mt-16 mb-6 sm:mb-8 text-center ">
          Additional Skills
        </div> */}

        <div className="text-lg sm:text-xl uppercase mb-8 py-7 text-center sm:text-left text-[#CCD1D1]">
          Additional Skills
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 place-items-center">
          <SkillComponent
            background="bg-gradient-to-r from-[#53354A] to-[#903749]"
            Skill="C Language"
            Icon={FaCode}
          />
          <SkillComponent
            background="bg-gradient-to-r from-[#3A506B] to-[#5BC0BE]"
            Skill="C++"
            Icon={SiCplusplus}
          />
          <SkillComponent
            background="bg-gradient-to-r from-[#353535] to-[#4D4D4D]"
            Skill="Java"
            Icon={FaJava}
          />
          <SkillComponent
            background="bg-gradient-to-r from-[#1D3557] to-[#457B9D]"
            Skill="Python"
            Icon={FaPython}
          />
          <SkillComponent
            background="bg-gradient-to-r from-[#2F3542] to-[#57606f]"
            Skill="Node.js"
            Icon={FaNodeJs}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
