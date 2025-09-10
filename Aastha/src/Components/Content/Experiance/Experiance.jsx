// import ExperienceCard from "./ExperianceCard";

// function Experiance() {
//   return (
//     <>
//       <div className=" mx-20 my-7">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl xl:mb-4 mb-8 sm:mb-12 font-semibold py-4 text-center sm:text-left">
//           Where I've worked
//         </h1>
//         <hr className="w-1/2 sm:w-1/3 md:w-1/4 border-gray-500 mb-8 sm:mb-10 mx-auto sm:mx-0" />
//       </div>
//       <div className="flex flex-col items-center">

//         <ExperienceCard
//           company="Bliss Web Solution"
//           position="Full Stack developer"
//           Image={"/Exp/webalchemy.jpeg"}
//           period="March 2025 - Present"
//           description="Redesigned the UI with React.js for a modern, mobile-responsive look, creating reusable components and enhancing accessibility."
//         />
//         <ExperienceCard
//           company="Web Alchemy Digital Solutions"
//           position="Frontend Developer Intern"
//           Image={"/Exp/webalchemy.jpeg"}
//           period="May 2024 - August 2024"
//           description="Redesigned the UI with React.js for a modern, mobile-responsive look, creating reusable components and enhancing accessibility."
//         />

//       </div>

//       <div className="bg-black text-white w-full py-12 text-center capitalize text-2xl">
//         <a
//           href="/Resume/Aastharesume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white  hover:text-gray-300"
//         >
//           View my Resume <span className="ml-1">→</span>
//         </a>
//       </div>
//     </>
//   );
// }

// export default Experiance;

// // import React from "react";
// // import { FaCircle } from "react-icons/fa";

// // const Experience = () => {
// //   return (
// //     <div className=" mx-20 my-7">
// //       <h1 className="text-3xl font-bold mb-10">Where I've Worked</h1>

// //       <div className="relative border-l-2 border-gray-300 ">
// //         {/* Bliss */}
// //         <div className="mb-10">
// //           {/* Company Dot */}
// //           <div className="absolute -left-[14px] bg-black rounded-full h-6 w-6 border-2 border-white"></div>
// //           <div>
// //             <h2 className="text-2xl font-bold text-gray-800">Bliss Web Solution</h2>

// //             {/* Role 1 */}
// //             <div className="ml-6 mt-4 relative">
// //               <FaCircle className="absolute -left-9 text-gray-400 text-xs" />
// //               <h4 className="text-lg font-semibold text-gray-700">Trainee</h4>
// //               <p className="text-sm text-gray-500">Jan 2025 - Mar 2025</p>
// //               <p className="text-gray-600 mt-2">
// //                 Learned full-stack fundamentals, worked on small features, and assisted senior developers.
// //               </p>
// //             </div>

// //             {/* Role 2 */}
// //             <div className="ml-6 mt-6 relative">
// //               <FaCircle className="absolute -left-9 text-indigo-500 text-xs" />
// //               <h4 className="text-lg font-semibold text-gray-700">Full Stack Developer</h4>
// //               <p className="text-sm text-gray-500">Mar 2025 - Present</p>
// //               <p className="text-gray-600 mt-2">
// //                 Building scalable web apps with React.js, Node.js, and Next.js. Redesigned UI for responsiveness and accessibility.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Web Alchemy */}
// //         <div className="mb-10">
// //           {/* Company Dot */}
// //           <div className="absolute -left-[14px] bg-blue-600 rounded-full h-6 w-6 border-2 border-white"></div>
// //           <div>
// //             <h2 className="text-2xl font-bold text-gray-800">Web Alchemy Digital Solutions</h2>

// //             <div className="ml-6 mt-4 relative">
// //               <FaCircle className="absolute -left-9 text-blue-400 text-xs" />
// //               <h4 className="text-lg font-semibold text-gray-700">Frontend Developer Intern</h4>
// //               <p className="text-sm text-gray-500">May 2024 - Aug 2024</p>
// //               <p className="text-gray-600 mt-2">
// //                 Developed reusable React components, optimized performance, and collaborated on UI redesign projects.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Resume link */}
// //       <div className="bg-black text-white w-full py-8 text-center capitalize text-xl mt-12">
// //         <a
// //           href="/Resume/AasthaRao.pdf"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="hover:text-gray-300"
// //         >
// //           View my Resume →
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Experience


import React from "react";

const experiences = [
  {
    company: "Bliss Web Solution",
    roles: [
      {
        title: "Full Stack Developer",
        duration: "August 2025 - Present",
        description:
          "Building scalable web apps with React.js, Node.js, and Next.js.And Constanly growing with new technolgies and new Experiance",
      },
      {


        title: "Trainee",
        duration: "Mar 2025 - July 2025",
        description:
          "Learned full-stack fundamentals, worked on small features, and assisted senior developers.",
      },
    ],
  },
  {
    company: "Web Alchemy Digital Solutions",
    roles: [
      {
        title: "Frontend Developer Intern",
        duration: "May 2024 - Aug 2024",
        description:
          "Developed reusable React components, optimized performance, and collaborated on UI redesign projects.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <>
      <div className="mx-24 my-12">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 ">
          Where I've Worked
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-gray-300 pl-6 relative"
            >
              <div className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-gray-800"></div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{exp.company}</h2>

              <div className="space-y-4">
                {exp.roles.map((role, idx) => (
                  <div key={idx} className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-700">{role.title}</h4>
                    <p className="text-sm text-gray-500">{role.duration}</p>
                    <p className="text-gray-600 mt-1">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white w-full py-8 text-center capitalize text-xl mt-12">
        <a
          href="/Resume/AasthaRao.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          View my Resume →
        </a>
      </div>

    </>
  );
};

export default Experience;
