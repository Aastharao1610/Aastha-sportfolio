import React, { useState } from 'react';
import { useEffect } from 'react';
 
const InforCard = ({ project }) => {
  const projectDescriptions = {
    codemastermind: (
      <>
         <h2 className="text-2xl font-bold mb-2">Codemastermind using React.js and Tailwind CSS</h2>
         <p className="text-gray-600 mb-2">
        codemastermind is a static tutorial site built using React.js and Tailwind CSS, designed to provide a beginner-friendly 
        approach to learning programming languages like HTML, CSS, and JavaScript. While not fully polished, this project serves 
        as a foundational showcase of my coding abilities and covers key topics in web development.
    </p>
    <p className="text-gray-600 mb-2">
        The platform also includes a basic quiz feature, allowing users to test their understanding of the lessons. Although there 
        are areas for improvement, codemastermind effectively demonstrates the use of fundamental concepts and styling in a 
        functional, interactive format.
    </p>
    <ul className="list-disc pl-4 pt-4  ">
        <li className='pb-2'>Provides introductory tutorials for HTML, CSS, and JavaScript.</li>
        <li className='pb-2'>Interactive quiz functionality to reinforce learning.</li>
        <li className='pb-2'>Uses a simple, responsive interface for navigating lessons and quizzes.</li>
        <li className='pb-2'>A college project that showcases my work in React and Tailwind CSS.</li>
    </ul>
      </>
    ),
    todo: (
      <>
     
        <h2 className="text-2xl font-bold mb-2">ToDo App using React.js and Tailwind CSS</h2>
        <p className="text-gray-600 mb-2">
          The ToDo app is a simple yet powerful task management application built using React.js and Tailwind CSS. 
          It helps users manage their daily tasks efficiently, allowing for easy addition, editing, and deletion of tasks.
        </p>
        <p className="text-gray-600 mb-2">
          With a clean and responsive user interface, it also allows users to mark tasks as completed and organize 
          their workload effortlessly.
        </p>
        <ul className="list-disc pl-3 pt-3">
          <li className='pb-2'>Add new tasks using a simple input field.</li>
          <li className='pb-2'>Edit tasks in place and update them with ease.</li>
          <li className='pb-2'>Mark tasks as done to keep track of completed work.</li>
          <li className='pb-2'>Delete tasks when no longer needed.</li>
        </ul>
       
      </>
    ),
    routingApp:(
      <>
    <h2 className="text-2xl font-bold mb-2">React Routing App</h2>
    <p className="text-gray-600 mb-2">
        This React Routing App was built as a learning project to explore the fundamentals of routing in React. It features several 
        routes, including Home, About, Contact, and GitHub, where the GitHub route dynamically fetches a list of followers using an 
        external API. The app demonstrates how to manage different pages while keeping common components stable across views.
    </p>
    <p className="text-gray-600 mb-2">
        The header and footer remain consistent on every page, providing smooth navigation throughout the app. In addition, it’s fully 
        responsive, ensuring a clean experience across devices. This project highlights my understanding of React routing and dynamic 
        content fetching.
    </p>
    <ul className="list-disc pt-3 pl-3 ">
        <li className='pb-3'>Home, About, Contact, and GitHub routes implemented.</li>
        <li className='pb-2'>GitHub route fetches followers dynamically via API.</li>
        <li className='pb-2'>Stable header and footer across all pages.</li>
        <li className='pb-2'>Fully responsive design for seamless navigation on all devices.</li>
    </ul>
</>

    ),
    passwordgenerator:(
      <>
      <h2 className="text-2xl font-bold mb-2">Password Generator</h2>
      <p className="text-gray-600 mb-2">
          The Password Generator is a tool that allows users to create secure passwords based on customizable options. Built with React, 
          it enables users to set the password length and include specific character types like special characters, numbers, or letters 
          only. This provides flexibility to generate passwords tailored to different security needs.
      </p>
      <p className="text-gray-600 mb-2">
          Along with these options, the app also features a one-click copy button for easily copying the generated password to the 
          clipboard. This project demonstrates functionality that enhances security and user convenience.
      </p>
      <ul className="list-disc pt-4 pl-3">
          <li className='pb-2'>Select password length and character types (special, numbers, letters).</li>
          <li className='pb-2'>Customize your password with ease and security.</li>
          <li className='pb-2'>One-click copy feature to quickly copy the generated password.</li>
          <li className='pb-2'>Provides flexibility to meet various security requirements.</li>
      </ul>
  </>
  

    ),
    Miranda:(
      <>
      <h2 className="text-2xl font-bold mb-2">Portfolio with GSAP Animations</h2>
      <p className="text-gray-600 mb-2">
          This portfolio showcases a dynamic, interactive experience using GSAP for animations. The loading animation features a rotating element, offering an engaging introduction as the page loads. The transitions and animations throughout the site bring an added layer of visual interest, enhancing the overall user experience.
      </p>
      <p className="text-gray-600 mb-2">
          With an aesthetic font choice, the typography complements the design perfectly, creating a modern and sleek look. The smooth animations and responsive design make this portfolio both visually appealing and functional.
      </p>
      <ul className="list-disc pl-3 pt-3">
          <li className='pb-2'>Engaging loading animation using GSAP with rotating effects.</li>
          <li className='pb-2'>Smooth transitions and interactive elements across the page.</li>
          <li className='pb-2'>Aesthetic font choice for modern and visually pleasing design.</li>
          <li className='pb-2'>Responsive layout that adjusts seamlessly across devices.</li>
      </ul>
  </>
  
    ),
    MegmaWeb:(
      <>
    <h2 className="text-2xl font-bold mb-2">Megma Website</h2>
    <p className="text-gray-600 mb-2">
        The Megma website offers a visually captivating experience, integrating GSAP for smooth animations and canvas elements for added interactivity. The animations bring the page to life, while the subtle canvas effects create a unique and engaging atmosphere throughout the site.
    </p>
    <p className="text-gray-600 mb-2">
        The combination of dynamic GSAP animations and the interactive canvas makes this website stand out. The design is both cool and functional, giving users a modern web experience with stylish transitions and effects.
    </p>
    <ul className="list-disc pt-3 pl-3">
        <li className='pb-2'>GSAP animations that enhance page interactions.</li>
        <li className='pb-2'>Interactive canvas elements for a creative visual experience.</li>
        <li className='pb-2'>Modern design with smooth transitions and effects.</li>
       
    </ul>
</>

    ),
    Cyberfiction:(
  <>
    <h2 className="text-2xl font-bold mb-2">CyberFiction Website</h2>
    <p className="text-gray-600 mb-2">
        The CyberFiction website is an immersive experience, fully based on canvas animations and powered by GSAP. It offers a futuristic design where an avatar dynamically poses and interacts as users scroll through the page, creating a unique and captivating journey.
    </p>
    <p className="text-gray-600 mb-2">
        This website is a perfect blend of technology and creativity, utilizing canvas for visual effects and GSAP for seamless transitions. The entire experience is interactive and engaging, with the avatar guiding users through the content.
    </p>
    <ul className="list-disc pl-3 pt-3">
        <li className='pb-2'>Avatar animations that respond to scrolling interactions.</li>
        <li className='pb-2'>Canvas-based design for dynamic visuals.</li>
        <li className='pb-2'>GSAP-powered transitions and smooth effects.</li>
        <li className='pb-2'>Responsive and highly interactive user experience.</li>
    </ul>
</>

    ),
    Duostudio:(
<>
    <h2 className="text-2xl font-bold mb-2">Duo Studio Website with Basic GSAP Animations</h2>
    <p className="text-gray-600 mb-2">
        The Duo Studio website was created with a focus on learning and implementing basic GSAP animations. It features simple yet effective animations that enhance the overall look and feel of the site, giving it a smooth, modern aesthetic.
    </p>
    <p className="text-gray-600 mb-2">
        While the primary goal was to explore GSAP's core functionalities, the clean design and fluid transitions make it visually appealing. The website is a great demonstration of how small animations can elevate user experience without overwhelming the content.
    </p>
    <ul className="list-disc pl-3 pt-2">
        <li className='pb-2'>Basic GSAP animations for smooth transitions.</li>
        <li className='pb-2'>Minimalistic design focused on aesthetics.</li>
        <li className='pb-2'>Lightweight animations for an enhanced user experience.</li>
        <li className='pb-2'>Responsive layout with attention to clean styling.</li>
    </ul>
</>

    ),
    flipkart:(
      <>
    <h2 className="text-2xl font-bold mb-2">Flipkart UI Clone - May 2023</h2>
    <p className="text-gray-600 mb-2">
        In May 2023, I created an exact UI clone of Flipkart, replicating its design and layout down to the smallest detail. The goal was to closely match the original website's appearance, ensuring that my version looked indistinguishable from Flipkart's official site.
    </p>
    <p className="text-gray-600 mb-2">
        From the navigation bar to the product listings, the clone captures the sleek and organized design of Flipkart, showcasing my attention to detail and ability to recreate complex UI structures.
    </p>
    <ul className="list-disc pl-3 pt-2">
        <li className='pb-2'>Exact replication of Flipkart's UI elements.</li>
        <li className='pb-2'>Attention to layout, typography, and color schemes.</li>
        <li className='pb-2'>Enhanced my skills in creating pixel-perfect UI clones.</li>
    </ul>
</>

    ),
    tictactoe:(
      <>
    <h2 className="text-2xl font-bold mb-2">Tic Tac Toe Game </h2>
    <p className="text-gray-600 mb-2">
        I created a Tic Tac Toe game using  JavaScript, where two players can compete in the classic game with a simple and clean interface. The game tracks player turns, identifies the winner, and allows players to reset the board after each match.
    </p>
    <p className="text-gray-600 mb-2">
        This project was a great way to practice my JavaScript skills, focusing on DOM manipulation, event handling, and game logic without using any frameworks.
    </p>
    <ul className="list-disc pl-3 pt-3">
        <li className='pb-2'>Turn-based gameplay for two players.</li>
        <li className='pb-2'>Real-time updates of the game board with each move.</li>
        <li className='pb-2'>Winner detection with a highlight on the winning combination.</li>
        <li className='pb-2'>Game reset functionality for multiple rounds.</li>
    </ul>
</>

    ),
    Bubble:(
      <>
    <h2 className="text-2xl font-bold mb-2">Bubble Game using JavaScript</h2>
    <p className="text-gray-600 mb-2">
        The Bubble Game is a fun and interactive project built using  JavaScript, where bubbles with random numbers are generated on the screen. Players must pop the bubbles that match the target number, and after each correct hit, a new target is randomly generated.
    </p>
    <p className="text-gray-600 mb-2">
        The game includes a point system that rewards players for each correct match, and a timer to challenge the player’s speed. This project helped me enhance my JavaScript skills by working with randomness, timers, and dynamic UI updates.
    </p>
    <ul className="list-disc pl-3 pt-3">
        <li className='pb-2'>Random number generation for bubbles and target numbers.</li>
        <li className='pb-2'>Interactive gameplay with bubble popping action.</li>
        <li className='pb-2'>Real-time score tracking based on correct hits.</li>
        <li className='pb-2'>Countdown timer to increase the challenge.</li>
    </ul>
</>

    ),
    clock:(
      <>
    <h2 className="text-2xl font-bold mb-2">Analog Clock using JavaScript</h2>
    <p className="text-gray-600 mb-2">
        The Analog Clock is a visually appealing project created using basic JavaScript that accurately displays the current time. This clock features moving hour, minute, and second hands that mimic the traditional analog clock design, providing a real-time representation of time.
    </p>
    <p className="text-gray-600 mb-2">
        Utilizing CSS for styling and JavaScript for functionality, this project demonstrates the principles of date and time manipulation. The clock updates continuously, showcasing my ability to create dynamic user interfaces with simple yet effective code.
    </p>
    <ul className="list-disc pl-3 pt-2">
        <li className='pb-2'>Real-time updating of hour, minute, and second hands.</li>
        <li className='pb-2'>CSS styling for an aesthetic and user-friendly interface.</li>
        <li className='pb-2'>Use of JavaScript Date object for accurate time retrieval.</li>
        <li className='pb-2'>Simple yet effective design demonstrating fundamental programming skills.</li>
    </ul>
</>

    )
    

    // Add more projects here as needed
  };
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'; // Block scrolling when the card is shown
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling when the card is closed
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup to reset overflow
    };
  }, [project]);

  return (
    <div className="p-4">
      {projectDescriptions[project] || <p>No description available for this project.</p>}
    </div>
  );
};

export default InforCard;
