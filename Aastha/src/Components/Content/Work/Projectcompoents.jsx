// import React, { useState } from "react";
// import InforCard from "./InforCard";

// function ProjectComponents({
//   Image,
//   Title,
//   Linkofcode,
//   LinkofLive,
//   projectType,
// }) {
//   const [showCard, setShowCard] = useState(false); // State to manage card visibility

//   // Function to show the card
//   const handleShowCard = () => {
//     console.log("Image clicked"); // Should print to console when the image is clicked
//     setShowCard(true);
//   };

//   // Function to close the card
//   const handleCloseCard = () => {
//     setShowCard(false);
//   };

//   return (
//     <div className="relative w-full sm:w-88   h-64 group overflow-hidden">
//       {" "}
//       {/* Use responsive width */}
//       {/* Image */}
//       <img
//         className="h-full border border-black rounded-xl w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105 z-10 relative" // Ensure it's on top
//         src={Image}
//         alt="Project"
//         onClick={handleShowCard} // Show card when the image is clicked
//       />
//       {/* Text Overlay */}
//       <div className="absolute inset-0 flex flex-col justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
//         <div className="text-white text-center px-2 py-14">
//           <h3 className="text-xl mt-6 font-bold">{Title}</h3>
//         </div>

//         {/* Buttons positioned at the bottom */}
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
//       {/* Conditionally render the InforCard with overlay */}
//       {showCard && (
//         <div>
//           {/* Overlay */}
//           <div
//             className="fixed inset-0 bg-black opacity-50 z-40"
//             onClick={handleCloseCard}
//           ></div>

//           {/* Card */}
//           <div className="fixed inset-0 flex justify-center items-center z-50">
//             <div className="relative bg-gray-200 overflow-auto mt-12 mx-1 sm:mx-16 lg:mx-32 p-8 xl:h-[400px] h-[600px]  xl:w-full w-[348px]   sm:w-[600px] lg:w-[800px] rounded-md shadow-lg">
//               {" "}
//               {/* Responsive width for card */}
//               {/* Close button at the top-right corner */}
//               <button
//                 className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded-md"
//                 onClick={handleCloseCard}
//               >
//                 ×
//               </button>
//               <InforCard project={projectType} />{" "}
//               {/* Pass projectType to InforCard */}
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
        className="h-full border border-black  rounded-sm w-full transition-transform duration-300 ease-in-out transform group-hover:scale-105 z-10 relative"
        src={Image}
        alt="Project"
        onClick={isMobile ? handleShowCard : null} // Click to show on mobile
      />

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
            <div className="relative bg-gray-200 overflow-auto mt-12 mx-1 sm:mx-16 lg:mx-32 p-8 xl:h-[400px] h-[600px]  xl:w-full w-[348px] sm:w-[600px] lg:w-[800px] rounded-md shadow-lg">
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
