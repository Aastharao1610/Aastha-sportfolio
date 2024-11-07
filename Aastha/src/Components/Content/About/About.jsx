// import React from 'react';


// const About = () => {
//   return (
//     <div className='bg-[#1B1B1B] h-auto justify-between flex px-24 py-20'>
//       <div className='About-me w-[800px]'>
//         <div className='introduction text-white mt-8 mx-8'>
//           <h1 className='text-4xl mb-14 tracking-wider'>Hey, I'm Aastha!</h1>
//           <h3 className='text-2xl tracking-wide my-5'>
//             I'm a FrontEnd Web developer with a passion for writing clean, efficient code and building intuitive web applications.
//           </h3>
//           <hr className='w-2/12' />
//           <h3 className='text-base text-gray-300 tracking-wider my-5 leading-8'>
//             <span className='text-lg tracking-wide font-bold text-white'>
//               I recently graduated with a Bachelor’s in Computer Applications from Geetanjali Institute of Technical Studies.
//             </span> 
//             While I'm still growing in the field, I have experience developing websites and web apps, ranging from small personal projects to more complex applications. My focus is on writing code that works well and makes the user experience seamless.
//           </h3>
//           <h3 className='text-base text-gray-300 tracking-wider my-5'>
//             I'm always eager to learn new technologies and improve my skills. Collaboration excites me, especially when working with people who encourage growth and share knowledge. My goal is to contribute to meaningful projects while becoming a better developer every day.
//           </h3>
//           <h3 className='text-base text-gray-300 tracking-wider my-5'>
//             <span className='text-lg tracking-wide font-bold text-white'>When I'm not coding</span>, you can find me reading, dancing, gardening, playing chess, or simply enjoying the satisfaction of house chores.
//           </h3>
//         </div>
//       </div>
//       <div className='Image w-[450px] h-[450px]  mt-12 rounded-full'>
//         <img className='rounded-full' src="/About/Aastha.jpeg" alt="" />
//       </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';

const About = () => {
  return (
    <div className='bg-[#1B1B1B] h-auto flex flex-col lg:flex-row justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-16 md:py-20'>
      {/* About Me Section */}
      <div className='About-me w-full lg:w-[800px]'>
        <div className='introduction text-white mt-8 lg:mx-8'>
          <h1 className='text-3xl sm:text-4xl mb-8 sm:mb-14 tracking-wider'>
            Hey, I'm Aastha!
          </h1>
          <h3 className='text-lg sm:text-2xl tracking-wide my-5'>
            I'm a FrontEnd Web developer with a passion for writing clean, efficient code and building intuitive web applications.
          </h3>
          <hr className='w-1/3 sm:w-2/12' />
          <h3 className='text-sm sm:text-base text-gray-300 tracking-wider my-5 leading-7 sm:leading-8'>
            <span className='text-lg tracking-wide font-bold text-white'>
              I recently graduated with a Bachelor’s in Computer Applications from Geetanjali Institute of Technical Studies.
            </span> 
            While I'm still growing in the field, I have experience developing websites and web apps, ranging from small personal projects to more complex applications. My focus is on writing code that works well and makes the user experience seamless.
          </h3>
          <h3 className='text-sm sm:text-base text-gray-300 tracking-wider my-5'>
            I'm always eager to learn new technologies and improve my skills. Collaboration excites me, especially when working with people who encourage growth and share knowledge. My goal is to contribute to meaningful projects while becoming a better developer every day.
          </h3>
          <h3 className='text-sm sm:text-base text-gray-300 tracking-wider my-5'>
            <span className='text-lg tracking-wide font-bold text-white'>
              When I'm not coding,
            </span> you can find me reading, dancing, gardening, playing chess, or simply enjoying the satisfaction of house chores.
          </h3>
        </div>
      </div>

      {/* Image Section */}
      <div className='Image w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-10 lg:mt-12 mx-auto lg:mx-0 rounded-full overflow-hidden'>
        <img className='rounded-full object-cover w-full h-full' src="/About/Aastha.jpeg" alt="Aastha's Profile" />
      </div>
    </div>
  );
}

export default About;
