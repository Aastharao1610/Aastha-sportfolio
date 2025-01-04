// import React from 'react'
// import Projectcompoents from './Projectcompoents'
// import InforCard from './InforCard'

// function Work() {
//   return (
//     <div className='bg-gray-200 text-black px-24 py-12'>
//      <div className='text-4xl mb-14 tracking-wider capitalize '>Some of My Work</div>
//      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>

//       <Projectcompoents
//       Image={'/Project/codemastermind.png'}
//       Title={'Codematermind'}
//       projectType={'codemastermind'}
//       Linkofcode={'https://github.com/Aastharao1610/Codemastermind'}
//       LinkofLive={'https://codemastermindtut.netlify.app/'}
//     />

//       <Projectcompoents
//       Image={'/Project/todo.png'}
//       projectType={'todo'}
//       Linkofcode={'xhttps://github.com/Aastharao1610/ToDo'}
//       LinkofLive={'https://aasthatodo.netlify.app/'}
//       />

//       <Projectcompoents
//       Image={'/Project/Reactroute.png'}
//       projectType={'routingApp'}
//       Linkofcode={'https://github.com/Aastharao1610/Codemastermind'}
//       LinkofLive={''}/>

//       <Projectcompoents
//       Image={'/Project/passwordgen.png'}
//       projectType={'passwordgenerator'}
//       Linkofcode={'https://github.com/Aastharao1610/passwordgenrator'}
//       LinkofLive={'https://passwordgenrat.netlify.app/'}/>

//       <Projectcompoents
//       Image={'/Project/Mirands.png'}
//       projectType={'Miranda'}
//       Linkofcode={'https://github.com/Aastharao1610/Miranda'}
//       LinkofLive={'https://mirrandaa.netlify.app/'}
//       />

//       <Projectcompoents
//       Image={'/Project/megma.png'}
//       projectType={'MegmaWeb'}
//       Linkofcode={"https://github.com/Aastharao1610/MegmaWeb"}
//       LinkofLive={'https://megmaweb.netlify.app/'}
//       />

//       <Projectcompoents
//       Image={'/Project/cyber.png'}
//       projectType={'Cyberfiction'}
//       Linkofcode={"https://github.com/Aastharao1610/CyberFiction"}
//       LinkofLive={'https://cyberfictionapp.netlify.app/'}
//       />

//       <Projectcompoents
//       Image={'/Project/Duostudio.png'}
//       projectType={'Duostudio'}
//       Linkofcode={'https://github.com/Aastharao1610/Duo_Studio'}
//       LinkofLive={'https://duostudioapp.netlify.app/'}
//       />

//       <Projectcompoents
//       Image={'/Project/flipkart.png'}
//       projectType={'flipkart'}
//       Linkofcode={'https://github.com/Aastharao1610/FlipkartClone'}
//       LinkofLive={'https://aasthasuiclone.netlify.app/'}
//       />

//       <Projectcompoents
//       Image={'/Project/tictactoe.png'}
//       projectType={'tictactoe'}
//       Linkofcode={'https://github.com/Aastharao1610/TicTaetoe'}
//       LinkofLive={'https://aasthatictactoegameapp.netlify.app/'}
//       />

//       <Projectcompoents
//       Image={'/Project/bubblegame.png'}
//       projectType={'Bubble'}
//       Linkofcode={'https://github.com/Aastharao1610/Bubblegame'}
//       LinkofLive={'https://bubblegameappar.netlify.app/'}
//       />

//       <Projectcompoents
//       Image={'/Project/clock.png'}
//       projectType={'clock'}
//       Linkofcode={'https://github.com/Aastharao1610/clock'}
//       LinkofLive={'https://wokingclock.netlify.app/'}
//       />

//      </div>
//      <div className='capitalize mt-12 text-center text-5xl'>more coming soon</div>
//     </div>
//   )
// }

// export default Work

import React from "react";
import Projectcompoents from "./Projectcompoents";

function Work() {
  return (
    <div className="bg-gray-200 text-black px-4 sm:px-6 md:px-12 lg:px-24 py-12">
      <div className="xl:text-4xl text-2xl xl:text-left mb-7 tracking-wider capitalize text-center">
        Some of My Work
      </div>
      {/* <hr className="w-[400px] line sm:w-2/12 h-[3px] xl:ml-4 sm:ml-5 mx-auto bg-black mb-8 sm:mb-10" /> */}
      <hr className="my-10 bg-black h-[3px] xl:w-72 sm:w-12 w-56 mx-auto xl:mx-0" />
      <div className="grid z-0 relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        <Projectcompoents
          Image={"/Project/codemastermind.png"}
          Title={"Codematermind"}
          projectType={"codemastermind"}
          Linkofcode={"https://github.com/Aastharao1610/Codemastermind"}
          LinkofLive={"https://aastharao1610.github.io/Codemastermind"}
        />

        <Projectcompoents
          Image={"/Project/todo.png"}
          projectType={"todo"}
          Linkofcode={"https://github.com/Aastharao1610/ToDo"}
          LinkofLive={"https://aastharao1610.github.io/ToDo"}
        />

        <Projectcompoents
          Image={"/Project/Reactroute.png"}
          projectType={"routingApp"}
          Linkofcode={"https://github.com/Aastharao1610/Codemastermind"}
          LinkofLive={""}
        />

        <Projectcompoents
          Image={"/Project/passwordgen.png"}
          projectType={"passwordgenerator"}
          Linkofcode={"https://github.com/Aastharao1610/passwordgenrator"}
          LinkofLive={"https://passwordgenrat.netlify.app/"}
        />

        <Projectcompoents
          Image={"/Project/Mirands.png"}
          projectType={"Miranda"}
          Linkofcode={"https://github.com/Aastharao1610/Miranda"}
          LinkofLive={"https://aastharao1610.github.io/Miranda/"}
        />

        <Projectcompoents
          Image={"/Project/megma.png"}
          projectType={"MegmaWeb"}
          Linkofcode={"https://github.com/Aastharao1610/MegmaWeb"}
          LinkofLive={"https://aastharao1610.github.io/MegmaWeb/"}
        />

        <Projectcompoents
          Image={"/Project/cyber.png"}
          projectType={"Cyberfiction"}
          Linkofcode={"https://github.com/Aastharao1610/CyberFiction"}
          LinkofLive={"https://cyberfictionapp.netlify.app/"}
        />

        <Projectcompoents
          Image={"/Project/Duostudio.png"}
          projectType={"Duostudio"}
          Linkofcode={"https://github.com/Aastharao1610/Duo_Studio"}
          LinkofLive={"https://duostudioapp.netlify.app/"}
        />

        <Projectcompoents
          Image={"/Project/flipkart.png"}
          projectType={"flipkart"}
          Linkofcode={"https://github.com/Aastharao1610/FlipkartClone"}
          LinkofLive={"https://aasthasuiclone.netlify.app/"}
        />

        <Projectcompoents
          Image={"/Project/tictactoe.png"}
          projectType={"tictactoe"}
          Linkofcode={"https://github.com/Aastharao1610/TicTaetoe"}
          LinkofLive={"https://aastharao1610.github.io/TicTaetoe/"}
        />

        <Projectcompoents
          Image={"/Project/bubblegame.png"}
          projectType={"Bubble"}
          Linkofcode={"https://github.com/Aastharao1610/Bubblegame"}
          LinkofLive={"https://aastharao1610.github.io/Bubblegame/"}
        />

        <Projectcompoents
          Image={"/Project/clock.png"}
          projectType={"clock"}
          Linkofcode={"https://github.com/Aastharao1610/clock"}
          LinkofLive={"https://wokingclock.netlify.app/"}
        />
      </div>
      {/* <div className='capitalize mt-12 text-center text-2xl'>Always Building, Always Growing—More Projects Ahead!</div> */}
      <div className="capitalize mt-12 text-center text-3xl">
        Excited to Build More—Stay Tuned for Upcoming Projects!
      </div>
    </div>
  );
}

export default Work;
