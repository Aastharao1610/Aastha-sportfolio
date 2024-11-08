// import React from 'react';

// const ExperienceCard = ({ Image,company, position, period, description }) => {
//   return (
//     <div className="max-w-6xl my-5 mb-10 w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-300 transition-shadow duration-300 m-4">
//      <div className='flex gap-4'>
//       <div className=''><img className='h-12' src={Image} alt="" /></div>
//      <h3 className="text-xl mt-3 font-bold text-gray-800 mb-2">{company}</h3>
//      </div>
//       <h4 className="text-lg font-semibold ml-16 text-gray-700 mb-1">{position}</h4>
//       <p className="text-sm ml-16 text-gray-500 mb-4">{period}</p>
//       <p className="text-base text-gray-600 leading-relaxed">{description}</p>
//     </div>
//   );
// };

// export default ExperienceCard;

import React from 'react';

const ExperienceCard = ({ Image, company, position, period, description }) => {
  return (
    <div className="max-w-6xl xl:mb-16 my-5 w-full p-8 bg-gradient-to-r from-blue-50 via-white to-indigo-50 rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 transition-shadow duration-300 transform hover:scale-105 m-4">
      <div className="flex items-center gap-4 mb-4">
        <img className="h-14 w-14 rounded-full object-cover border-2 border-indigo-300" src={Image} alt={`${company} logo`} />
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{company}</h3>
          <p className="text-md text-gray-500">{period}</p>
        </div>
      </div>
      <h4 className="text-lg font-semibold text-indigo-700 mb-2">{position}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ExperienceCard;
