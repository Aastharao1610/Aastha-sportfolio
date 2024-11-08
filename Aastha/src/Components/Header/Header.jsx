// import React from 'react'
// import { useState } from 'react';
// import ThemeButton from '../Content/Context/ThemeButton';
// import './Header.css'

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//   };
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle menu visibility
//   };
//   return (
//     <>
//       <div className='xl:h-8 h-16 nav top-0 left-0 w-full sticky -mb-16 -pb-6 text-white  text-lg p-4 sm:p-6 md:p-8 bg-transparent z-10'>
//         <div className='flex justify-between  '>
//           {/* Logo Image - Adjusted for responsiveness */}
//           <div className='m-0 p-0  -mt-10'>
//             <img className='xl:h-20 sm:h-24 md:h-28 lg:h-24 xl:mb-16 h-24 mt-4' src="/Header/AR.png" alt="Logo" />
//           </div>
//           <div className='flex gap-16'>

//           <div className=' md:flex details -mt-3 gap-8'>
//           <div onClick={() => scrollToSection('about')}>About</div>
//               <div onClick={() => scrollToSection('skills')}>Skills</div>
//               <div onClick={() => scrollToSection('')}>Experience</div>
//               <div onClick={() => scrollToSection('work')}>Projects</div>
//               <div onClick={() => scrollToSection('message')}>Contact</div>
//             </div>
//           {/* Dark Mode Toggle Placeholder */}
//           <div className='text-base   -mr-[1px] sm:text-lg md:text-xl xl:-mt-3 mt-1 lg:text-2xl'>
//            <ThemeButton/>

//           </div>

//          <div className='md:hidden bg-white px-2 py-2 h-8 w-8 rounded-full flex items-center'>
//               <img className="h-4 w-8"
//               src="/Header/menu.png"
//               alt="Menu Icon"
//               onClick={toggleMenu}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center z-20">
//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-4 text-xl bg-gray-800 px-3 py-1 rounded-full"
//             onClick={toggleMenu}
//           >
//             ×
//           </button>

//           {/* Mobile Menu Navigation Links */}
//           <div className="flex flex-col gap-6 text-2xl">
//             <div onClick={() => scrollToSection('about')}>About</div>
//             <div onClick={() => scrollToSection('skills')}>Skills</div>
//             <div onClick={() => scrollToSection('experience')}>Experience</div>
//             <div onClick={() => scrollToSection('work')}>Projects</div>
//             <div onClick={() => scrollToSection('message')}>Contact</div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Header;

// import React, { useState, useEffect } from 'react';
// import ThemeButton from '../Content/Context/ThemeButton';
// import './Header.css';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isBackgroundBlack, setIsBackgroundBlack] = useState(false);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//     setMenuOpen(false); // Close the menu on section click
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   useEffect(() => {
//     const handleScroll = () => {
//       // Change background after scrolling 100px down
//       if (window.scrollY > 100) {
//         setIsBackgroundBlack(true);
//       } else {
//         setIsBackgroundBlack(false);
//       }
//     };
//     if (menuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.body.style.overflow = 'auto'; // Cleanup: allow scrolling on unmount
//     };
//   }, [menuOpen]);

//     window.addEventListener('scroll', handleScroll);
//   useEffect(() => {
//     const handleScroll = () => {
//       // Change background after scrolling 100px down
//       if (window.scrollY > 100) {
//         setIsBackgroundBlack(true);
//       } else {
//         setIsBackgroundBlack(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className={`xl:h-8 h-16 nav top-0 left-0 w-full sticky -mb-16 -pb-6 text-white text-lg p-4 sm:p-6 md:p-8 ${
//           isBackgroundBlack ? 'bg-black' : 'bg-transparent'
//         } z-10 transition-colors duration-300`}
//       >
//         <div className="flex justify-between">
//           <div className="m-0 p-0 -mt-10">
//             <img className="xl:h-20 sm:h-24 md:h-28 lg:h-24 xl:mb-16 h-24 mt-4" src="/Header/AR.png" alt="Logo" />
//           </div>
//           <div className="flex gap-16">
//             <div className="md:flex details -mt-3 gap-8">
//               <div onClick={() => scrollToSection('about')}>About</div>
//               <div onClick={() => scrollToSection('skills')}>Skills</div>
//               <div onClick={() => scrollToSection('experience')}>Experience</div>
//               <div onClick={() => scrollToSection('work')}>Projects</div>
//               <div onClick={() => scrollToSection('message')}>Contact</div>
//             </div>
//             <div className="text-base -mr-[1px] sm:text-lg md:text-xl xl:-mt-3 mt-1 lg:text-2xl">
//               <ThemeButton />
//             </div>
//             <div className="md:hidden bg-white px-2 py-2 h-8 w-8 rounded-full flex items-center">
//               <img
//                 className="h-4 w-8"
//                 src="/Header/menu.png"
//                 alt="Menu Icon"
//                 onClick={toggleMenu}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center z-20">
//           <button
//             className="absolute top-4 right-4 text-xl bg-gray-800 px-3 py-1 rounded-full"
//             onClick={toggleMenu}
//           >
//             ×
//           </button>
//           <div className="flex flex-col gap-6 text-2xl">
//             <div onClick={() => scrollToSection('about')}>About</div>
//             <div onClick={() => scrollToSection('skills')}>Skills</div>
//             <div onClick={() => scrollToSection('experience')}>Experience</div>
//             <div onClick={() => scrollToSection('work')}>Projects</div>
//             <div onClick={() => scrollToSection('message')}>Contact</div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import ThemeButton from '../Content/Context/ThemeButton';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//     setMenuOpen(false); // Close the menu after navigation
//   };

// const toggleMenu = () => {
//   setMenuOpen(!menuOpen); // Toggle menu visibility
// };

//   return (
//     <>
//       <div className='h-8 top-0 left-0 w-full sticky text-white text-lg p-4 sm:p-6 md:p-8 bg-transparent z-10'>
//         <div className='flex justify-between items-center'>
//           {/* Logo Image */}
//           <div className='p-0'>
//             <img className='h-16 sm:h-20 md:h-24' src="/Header/AR.png" alt="Logo" />
//           </div>

//           {/* Navigation Links - visible only on medium and larger screens */}
//           <div className='hidden md:flex gap-8'>
//             <div className='cursor-pointer' onClick={() => scrollToSection('about')}>About</div>
//             <div className='cursor-pointer' onClick={() => scrollToSection('skills')}>Skills</div>
//             <div className='cursor-pointer' onClick={() => scrollToSection('experience')}>Experience</div>
//             <div className='cursor-pointer' onClick={() => scrollToSection('work')}>Projects</div>
//             <div className='cursor-pointer' onClick={() => scrollToSection('message')}>Contact</div>
//           </div>

//           {/* Theme Toggle and Menu Icon */}
//           <div className='flex items-center gap-4'>
//             <div className='text-base sm:text-lg md:text-xl lg:text-2xl'>
//               <ThemeButton />
//             </div>

//             {/* Mobile Menu Icon - visible only on small screens */}
//             <div className='block md:hidden'>
//               <img
//                 className="h-8 w-8 cursor-pointer"
//                 src="/Header/menu.png"
// alt="Menu Icon"
// onClick={toggleMenu}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
// {menuOpen && (
//   <div className="fixed inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center z-20">
//     {/* Close Button */}
//     <button
//       className="absolute top-4 right-4 text-xl bg-gray-800 px-3 py-1 rounded-full"
//       onClick={toggleMenu}
//     >
//       ×
//     </button>

//     {/* Mobile Menu Navigation Links */}
//     <div className="flex flex-col gap-6 text-2xl">
//       <div onClick={() => scrollToSection('about')}>About</div>
//       <div onClick={() => scrollToSection('skills')}>Skills</div>
//       <div onClick={() => scrollToSection('experience')}>Experience</div>
//       <div onClick={() => scrollToSection('work')}>Projects</div>
//       <div onClick={() => scrollToSection('message')}>Contact</div>
//     </div>
//   </div>
// )}
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
//import ThemeButton from '../Content/Context/ThemeButton';
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBackgroundBlack, setIsBackgroundBlack] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close the menu on section click
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Change background after scrolling 100px down
      if (window.scrollY > 100) {
        setIsBackgroundBlack(true);
      } else {
        setIsBackgroundBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Block background scrolling when the menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Cleanup: allow scrolling on unmount
    };
  }, [menuOpen]); // Dependency array includes menuOpen to react to changes

  return (
    <>
      <div
        className={`xl:h-8 h-16 nav top-0 left-0 w-full sticky -mb-16 -pb-6 text-white text-lg p-4 sm:p-6 md:p-8 ${
          isBackgroundBlack ? "bg-black" : "bg-transparent"
        } z-10 transition-colors duration-300`}
      >
        <div className="flex justify-between">
          <div className="m-0 p-0 -mt-10">
            <img
              className="xl:h-20 sm:h-24 md:h-28 lg:h-24 xl:mb-16 md:mt-0 xl:ml-0 -ml-4  h-12 w-20 mt-8 xl:mt-0"
              src="/Logo/ARWhite.svg"
              alt="Logo"
            />
          </div>
          <div className="flex gap-16">
            <div className="md:flex details -mt-3  gap-8">
              <div
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About
              </div>
              <div
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </div>
              <div
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </div>
              <div
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => scrollToSection("work")}
              >
                Projects
              </div>
              <div
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => scrollToSection("message")}
              >
                Contact
              </div>

              <div className="  cursor-pointer">
                <button className="bg-gray-300 px-4 rounded-lg  ">
                  <a
                    href="/Resume/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white  hover:text-gray-300"
                  >
                    <div className="text-black"> Resume</div>
                  </a>
                </button>
              </div>
            </div>
            {/* <div className="text-base -mr-[1px] sm:text-lg md:text-xl xl:-mt-3 mt-1 lg:text-2xl">
              <ThemeButton />
            </div> */}
            <div className="md:hidden bg-white px-2 py-2 h-8 w-8 rounded-full flex items-center">
              <img
                className="h-4 w-8"
                src="/Header/menu.png"
                alt="Menu Icon"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center ">
          <button
            className="absolute top-4 right-4 text-xl bg-gray-800 px-3 py-1 rounded-full"
            onClick={toggleMenu}
          >
            ×
          </button>
          <div className="flex flex-col gap-6 text-2xl">
            <div onClick={() => scrollToSection("about")}>About</div>
            <div onClick={() => scrollToSection("skills")}>Skills</div>
            <div onClick={() => scrollToSection("experience")}>Experience</div>
            <div onClick={() => scrollToSection("work")}>Projects</div>
            <div onClick={() => scrollToSection("message")}>Contact</div>
            {/* Mobile Resume Button */}
            <div className="cursor-pointer">
              <button className="bg-gray-300 px-4 -ml-3 rounded-lg">
                <a
                  href="/Resume/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  <div className="text-black">Resume</div>
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
