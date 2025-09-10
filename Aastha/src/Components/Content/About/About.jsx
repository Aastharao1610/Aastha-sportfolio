import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg-[#0f0f0f] h-screen flex flex-col lg:flex-row justify-center items-center px-10 py-16 lg:px-20 lg:py-24 text-white">
      {/* About Me Section */}
      <div className="About-me w-full lg:w-[600px] lg:mr-10 mt-8 lg:mt-0 text-center lg:text-left space-y-6">
        <h2 className="text-4xl font-bold tracking-wide text-white drop-shadow-md">
          Hey there, I’m Aastha!
        </h2>
        {/* <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-300">
          Passionate about building web experiences that are as intuitive as
          they are beautiful.
        </p>
        <p className="text-sm sm:text-base leading-7 text-gray-400 font-light italic">
          With a fresh start in Computer Applications, I’m eager to create
          impactful and functional designs. I believe in a{" "}
          <span className="text-white font-medium">code-with-purpose</span>{" "}
          approach, where every line adds value and beauty.
        </p>
        <p className="text-sm sm:text-base text-gray-400 font-light italic">
          Beyond the screen, I love to unwind with books, explore dance, and
          enjoy the serenity of gardening.
        </p> */}
        <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-300">
          A Full-Stack Developer who enjoys building digital
          experiences that feel simple, fast, and meaningful.
        </p>

        <p className="text-sm sm:text-base leading-7 text-gray-400 font-light italic">
          I like creating smooth user interfaces, connecting them with strong backends,
          and making sure every detail works beautifully together. For me, great
          products are about both functionality and a touch of elegance.
        </p>

        <p className="text-sm sm:text-base text-gray-400 font-light italic">
          When I’m not coding, you’ll probably find me lost in a book, moving to music,
          or taking care of my plants.
        </p>
      </div>




      <div className="image-container mt-12 xl:mt-1">
        <img
          className="profile-image"
          src="/About/Aastha.jpeg"
          alt="Aastha's Profile"
        />
      </div>
    </div>
  );
};

export default About;
