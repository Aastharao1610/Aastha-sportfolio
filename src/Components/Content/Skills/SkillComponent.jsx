import React from "react";

function SkillComponent({ Skill, background, Icon }) {
  return (
    <div
      className={`${background} hover:scale-105 transition-transform duration-300 ease-in-out rounded-full text-center justify-center h-44 w-44 flex flex-col items-center`}
    >
      <Icon className="text-4xl mb-2 text-white" />
      <div className="text-lg font-semibold uppercase tracking-wider">
        {Skill}
      </div>
    </div>
  );
}

export default SkillComponent;

// SkillComponent.jsx
// import React from "react";

// function SkillComponent({ Skill, background, Icon }) {
//   return (
//     <div className="rounded-3xl p-1 bg-gradient-to-r from-[#2c3e50] to-[#3498db] hover:scale-105 transition-transform duration-300 ease-in-out">
//       <div
//         className={`${background} h-44 w-44 rounded-3xl flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-20 bg-white/10 border border-gray-100 shadow-lg`}
//       >
//         <Icon className="text-4xl mb-2 text-white" />
//         <div className="text-md sm:text-lg font-semibold uppercase tracking-widest text-white">
//           {Skill}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SkillComponent;
