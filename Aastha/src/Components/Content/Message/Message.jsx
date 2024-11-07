// import React from 'react'

// const Message = () => {
//   return (
//     <>
//    <div className='bg-gray-100 h-96'>
//       <div className='text-center justify-center py-20'>
//         <img className=' mx-auto h-20 mb-6' src="/Message/share.png" alt="" />
//         <h2 className='text-2xl mx-96 mb-12'>If you have a project in mind or thoughts to share, I’d love to hear from you!</h2>
//         <a href="mailto:aastharao1610@gmail.com">
//         <button className='border-2 rounded-sm border-black px-5 py-3 '>Drop Me a Note</button>
//         </a>
       
//       </div>
//    </div>
//     </>
//   )
// }

// export default Message

import React from 'react';

const Message = () => {
  return (
    <div className='bg-gray-100 h-96 flex items-center justify-center'>
      <div className='text-center px-4'>
        <img className='mx-auto h-20 mb-6' src="/Message/share.png" alt="Share Icon" />
        <h2 className='text-2xl mb-12 md:max-w-2xl mx-auto'>
          If you have a project in mind or thoughts to share, I’d love to hear from you!
        </h2>
        <a href="mailto:aastharao1610@gmail.com">
          <button className='border-2 rounded-sm border-black px-5 py-3 transition duration-300 hover:bg-black hover:text-white'>
            Drop Me a Note
          </button>
        </a>
      </div>
    </div>
  );
}

export default Message;
