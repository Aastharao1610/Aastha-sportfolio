// import React from 'react';
// import './Craft.css'; // You may not need this if all styles are handled by Tailwind

// function Craft() {
//   return (
//     <>
//       <div className='h-auto py-12 px-24 sm:py-16'>
//         <div className="container mx-auto px-4">
//         <h2 className="xl:text-left my-craft text-center text-3xl sm:text-4xl font-bold tracking-wide mb-4 sm:mb-6 ml-4 sm:ml-6">My Craft</h2>
//           <hr className='w-1/3 line sm:w-2/12 h-[2px] xl:ml-4 sm:ml-5 mx-auto bg-black mb-8 sm:mb-10' />

//           {/* Grid Layout for 4 Items */}
//           <div className="grid grid-cols-1 gap-y-8 sm:gap-y-10 md:grid-cols-2 relative px-4 sm:px-6">

//             {/* Horizontal line */}
//             <div className="horizontal-line md:block  absolute top-1/2 left-0 w-full h-[2px] bg-black"></div>

//             {/* Vertical line */}
//             <div className="vertical-line md:block absolute top-0 left-1/2 h-full w-[2px] bg-black"></div>

//             {/* Web Development */}
//             <div className="group p-6 sm:p-12 rounded-lg transition duration-300 hover:bg-gray-100 flex flex-col items-center">
//               <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-center">Frontend Web Development</h3>
//               <p className="text-base sm:text-lg text-gray-900 font-light group-hover:text-gray-500 transition duration-300 text-center">
//                 I enjoy building websites using HTML, CSS, and JavaScript. My focus is on writing clean, simple code to create websites that are easy to use and visually appealing.
//               </p>
//             </div>

//             {/* Responsive Design */}
//             <div className="group p-6 sm:p-12 rounded-lg transition duration-300 hover:bg-gray-100 flex flex-col items-center">
//               <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-center">Responsive Design</h3>
//               <p className="text-base sm:text-lg text-gray-900 font-light group-hover:text-gray-500 transition duration-300 text-center">
//                 I make sure that the websites I create look great and work well on any device, whether it's a phone, tablet, or computer.
//               </p>
//             </div>

//             {/* Problem Solving */}
//             <div className="group p-6 sm:p-12 rounded-lg transition duration-300 hover:bg-gray-100 flex flex-col items-center">
//               <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-center">Problem Solving</h3>
//               <p className="text-base sm:text-lg text-gray-900 font-light group-hover:text-gray-500 transition duration-300 text-center">
//                 I love figuring out solutions to coding challenges and improving the user experience by ensuring everything runs smoothly.
//               </p>
//             </div>

//             {/* Learning & Growing */}
//             <div className="group p-6 sm:p-12 rounded-lg transition duration-300 hover:bg-gray-100 flex flex-col items-center">
//               <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-center">Learning & Growing</h3>
//               <p className="text-base sm:text-lg text-gray-900 font-light group-hover:text-gray-500 transition duration-300 text-center">
//                 As a developer, I’m constantly learning new techniques and applying them to improve my work and take on bigger challenges.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Craft;
import React from "react";
import "./Craft.css";

function Craft() {
  return (
    <div className="h-auto py-12 px-6 sm:py-16 sm:px-24">
      <div className="container mx-auto px-4">
        <h2 className="my-craft text-center xl:text-left text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-4 sm:mb-6">
          My Craft
        </h2>
        <hr className="w-1/3 sm:w-2/12 h-[2px] bg-black mx-auto xl:ml-0 mb-6 sm:mb-8" />

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-10 md:grid-cols-2 relative sm:px-6">
          {/* Horizontal Line */}
          <div className="horizontal-line  md:block absolute top-1/2 left-0 w-full h-[2px] bg-black"></div>

          {/* Vertical Line */}
          <div className="vertical-line  md:block absolute top-0 left-1/2 h-full w-[2px] bg-black"></div>

          {/* Frontend Web Development */}
          <div className="group p-4 sm:p-8 md:p-12 rounded-lg transition duration-300 hover:bg-gray-100 flex flex-col items-center text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
              Frontend Web Development
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 font-light group-hover:text-gray-500 transition duration-300">
              I enjoy building websites using HTML, CSS, and JavaScript. My
              focus is on writing clean, simple code to create websites that are
              easy to use and visually appealing.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="group p-4 sm:p-8 md:p-12 rounded-lg transition duration-300 hover:bg-gray-100 flex flex-col items-center text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
              Responsive Design
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 font-light group-hover:text-gray-500 transition duration-300">
              I make sure that the websites I create look great and work well on
              any device, whether it's a phone, tablet, or computer.
            </p>
          </div>

          {/* Problem Solving */}
          <div className="group p-4 sm:p-8 md:p-12 rounded-lg transition duration-300 hover:bg-gray-100 flex flex-col items-center text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
              Problem Solving
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 font-light group-hover:text-gray-500 transition duration-300">
              I love figuring out solutions to coding challenges and improving
              the user experience by ensuring everything runs smoothly.
            </p>
          </div>

          {/* Learning & Growing */}
          <div className="group p-4 sm:p-8 md:p-12 rounded-lg transition duration-300 hover:bg-gray-100 flex flex-col items-center text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
              Learning & Growing
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 font-light group-hover:text-gray-500 transition duration-300">
              As a developer, I’m constantly learning new techniques and
              applying them to improve my work and take on bigger challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Craft;
