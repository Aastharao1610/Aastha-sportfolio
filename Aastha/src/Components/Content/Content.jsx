import React from "react";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Craft from "./Craft/Craft";
import Skills from "./Skills/Skills";
import Experiance from "./Experiance/Experiance";
import Work from "./Work/Work";
import Message from "./Message/Message";
import Social from "./Social/Social";
import { useRef } from "react";

const Content = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div id="intro">
        <Intro onLearnMoreClick={scrollToAbout} />
      </div>
      <div ref={aboutRef}>
        <div id="about">
          <About />
        </div>
      </div>

      <div id="craft">
        <Craft />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experiance />
      </div>

      <div id="work">
        <Work />
      </div>
      <div id="message">
        <Message />
      </div>
      <div id="social">
        <Social />
      </div>
    </>
  );
};

export default Content;
