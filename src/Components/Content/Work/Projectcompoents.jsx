// import React, { useState, useEffect } from "react";
// import InforCard from "./InforCard";

// function ProjectComponents({
//   Image,
//   Title,
//   Linkofcode,
//   LinkofLive,
//   projectType,
// }) {
//   const [showCard, setShowCard] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect if the device is mobile
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleShowCard = () => setShowCard(true);
//   const handleCloseCard = () => setShowCard(false);

//   return (
//     <div className="relative w-full sm:w-88 h-64 group overflow-hidden">
//       <img
//         className="h-full border border-black  rounded-sm w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105 z-10 relative"
//         src={Image}
//         alt="Project"
//         onClick={isMobile ? handleShowCard : null} // Click to show on mobile
//       />

//       <div
//         className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-300 bg-black bg-opacity-50 ${
//           isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//         }`}
//       >
//         <div className="text-white text-center px-2 py-14">
//           <h3 className="text-xl mt-6 font-bold">{Title}</h3>
//         </div>

//         <div className="flex justify-center mb-4">
//           <button className="bg-blue-500 rounded-md text-white px-4 py-2 mr-2 transform transition-transform duration-300 hover:scale-105 z-20">
//             <a href={Linkofcode} target="_blank" rel="noopener noreferrer">
//               Explore Code
//             </a>
//           </button>
//           <button className="bg-blue-600 rounded-md text-white px-4 py-2 mr-2 transform transition-transform duration-300 hover:scale-105 z-20">
//             <a href={LinkofLive} target="_blank" rel="noopener noreferrer">
//               Live Demo
//             </a>
//           </button>
//         </div>
//       </div>

//       {showCard && (
//         <div>
//           <div
//             className="fixed inset-0 bg-black opacity-50 z-40"
//             onClick={handleCloseCard}
//           ></div>
//           <div className="fixed inset-0 flex justify-center items-center z-50">
//             <div className="relative bg-gray-200 overflow-auto mt-12 mx-1 sm:mx-16 lg:mx-32 p-8 xl:h-[400px] h-[600px]  xl:w-full w-[348px] sm:w-[600px] lg:w-[800px] rounded-md shadow-lg">
//               <button
//                 className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded-md"
//                 onClick={handleCloseCard}
//               >
//                 ×
//               </button>
//               <InforCard project={projectType} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProjectComponents;
import React, { useState, useEffect } from "react";
import InforCard from "./InforCard";

function ProjectComponents({
  Image,
  Title,
  Linkofcode,
  LinkofLive,
  projectType,
}) {
  const [showCard, setShowCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowCard = () => setShowCard(true);
  const handleCloseCard = () => setShowCard(false);

  return (
    <div className="relative w-full sm:w-88 h-64 group overflow-hidden">
      <img
        className="h-full border border-black rounded-sm w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105 z-10 relative"
        src={Image}
        alt="Project"
        onClick={isMobile ? handleShowCard : null} // Click to show on mobile
      />

      {/* Buttons are permanently visible on mobile */}
      <div
        className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-300 bg-black bg-opacity-50 ${
          isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="text-white text-center px-2 py-14">
          <h3 className="text-xl mt-6 font-bold">{Title}</h3>
        </div>

        <div className="flex justify-center mb-4">
          <button className="bg-blue-500 rounded-md text-white px-4 py-2 mr-2 transform transition-transform duration-300 hover:scale-105 z-20">
            <a href={Linkofcode} target="_blank" rel="noopener noreferrer">
              Explore Code
            </a>
          </button>
          <button className="bg-blue-600 rounded-md text-white px-4 py-2 mr-2 transform transition-transform duration-300 hover:scale-105 z-20">
            <a href={LinkofLive} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </button>
        </div>
      </div>

      {showCard && (
        <div>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={handleCloseCard}
          ></div>
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="relative bg-gray-200 overflow-auto mt-12 mx-1 sm:mx-16 lg:mx-32 p-8 xl:h-[400px] h-[600px] xl:w-full w-[348px] sm:w-[600px] lg:w-[800px] rounded-md shadow-lg">
              <button
                className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded-md"
                onClick={handleCloseCard}
              >
                ×
              </button>
              <InforCard project={projectType} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectComponents;

// import React, { useState, useEffect } from "react";
// import InforCard from "./InforCard";

// function ProjectComponents({
//   Image,
//   Title,
//   Linkofcode,
//   LinkofLive,
//   projectType,
// }) {
//   const [showCard, setShowCard] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [clickCount, setClickCount] = useState(0);

//   // Detect if the device is mobile
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleShowCard = () => setShowCard(true);
//   const handleCloseCard = () => setShowCard(false);

//   const handleMobileClick = () => {
//     if (clickCount === 1) {
//       setShowCard(true); // Show InfoCard on double-click
//       setClickCount(0); // Reset click count
//     } else {
//       setClickCount(1);
//       setTimeout(() => setClickCount(0), 300); // Reset after 300ms if not double-clicked
//     }
//   };

//   return (
//     <div className="relative w-full sm:w-88 h-64 group overflow-hidden">
//       <img
//         className="h-full border border-black rounded-sm w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105 z-10 relative"
//         src={Image}
//         alt="Project"
//         onClick={isMobile ? handleMobileClick : null} // Double-click to show on mobile
//       />

//       <div
//         className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-300 bg-black bg-opacity-50 ${
//           isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//         }`}
//       >
//         <div className="text-white text-center px-2 py-14">
//           <h3 className="text-xl mt-6 font-bold">{Title}</h3>
//         </div>

//         <div className="flex justify-center mb-4">
//           <button className="bg-blue-500 rounded-md text-white px-4 py-2 mr-2 transform transition-transform duration-300 hover:scale-105 z-20">
//             <a href={Linkofcode} target="_blank" rel="noopener noreferrer">
//               Explore Code
//             </a>
//           </button>
//           <button className="bg-blue-600 rounded-md text-white px-4 py-2 mr-2 transform transition-transform duration-300 hover:scale-105 z-20">
//             <a href={LinkofLive} target="_blank" rel="noopener noreferrer">
//               Live Demo
//             </a>
//           </button>
//         </div>
//       </div>

//       {showCard && (
//         <div>
//           <div
//             className="fixed inset-0 bg-black opacity-50 z-40"
//             onClick={handleCloseCard}
//           ></div>
//           <div className="fixed inset-0 flex justify-center items-center z-50">
//             <div className="relative bg-gray-200 overflow-auto mt-12 mx-1 sm:mx-16 lg:mx-32 p-8 xl:h-[400px] h-[600px] xl:w-full w-[348px] sm:w-[600px] lg:w-[800px] rounded-md shadow-lg">
//               <button
//                 className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded-md"
//                 onClick={handleCloseCard}
//               >
//                 ×
//               </button>
//               <InforCard project={projectType} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProjectComponents;
