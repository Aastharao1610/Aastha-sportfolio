import React, { useRef } from "react";

function Intro({ onLearnMoreClick }) {
  const introRef = useRef(null);

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Prevent click events from bubbling up
    onLearnMoreClick();
  };

  return (
    <div id="scroll-container">
      <div className="relative">
        <div className="h-auto">
          {/* Background Image */}
          <img
            className="h-[300px] sm:h-[620px] md:h-[720px] lg:h-[730px] w-full object-cover"
            src="/Intro/StateParks.jpeg"
            alt="background star"
          />

          {/* Text Centered on the Screen */}
          <div
            ref={introRef}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider font-bold mb-5 md:mb-10 heading">
              AASTHA RAO
            </h1>
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              Front End Web Developer
            </h3>
          </div>

          {/* Learn More Image Centered at the Bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            {/* Wrapping in a group for hover effect */}
            <div className="relative group">
              {/* Dropdown Section */}
              <div className="absolute inset-0 flex flex-col items-center justify-center duration-300">
                <div
                  onClick={handleDropdownClick}
                  className="mb-10 h-20 w-20 cursor-pointer"
                >
                  {/* Dropdown image is initially hidden, but appears when hovered */}
                  <img
                    className="xl:h-10 h-4  xl:w-8 opacity-0 ml-6 group-hover:opacity-70 transition-opacity duration-1000"
                    src="./Intro/dropdown.png"
                    alt="Learn More Dropdown"
                  />

                  {/* Logo image is initially visible, but disappears when hovered */}
                  <img
                    className="xl:h-16 h-7 w-12 xl:w-24 object-cover xl:ml-0 ml-2  xl:-mt-14 opacity-100 group-hover:opacity-0 transition-opacity duration-1000"
                    src="/Logo/ARWhite.svg"
                    alt="Aastha Rao Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
