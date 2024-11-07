import React from 'react'

function Social() {
   const scrolltoTop=()=>{
      window.scrollTo({
         top:0,
         behavior:'smooth'
      })
   }
  return (
    <>
      <div className='bg-[#222222] h-auto py-16 '>
      <div className=' bg-gray-300 text-center mx-auto mb-8 w-12 mt-5'></div>
      <img className='h-16 mx-auto rounded-full py-2 bg-white w-12' src="/Social/top.png" alt="" onClick={scrolltoTop}/>
  

<div className=' flex justify-center mt-7  gap-7 pb-6'>
     <a href="https://www.linkedin.com/in/raoastha/">  <div className='bg-gray-200 h-12 w-12 rounded-md'>  <img className='bg-white mx-auto my-2 py-2  h-12' src="/Social/linkedin.png" alt="" /> </div></a>
    
      <a className='' href="https://github.com/Aastharao1610"> <div className='bg-gray-200 h-12 w-12 rounded-md'>  <img className=' h-12 mx-auto my-2 py-2' src="/Social/github.png" alt="" /></div></a>
      
      <a href="mailto:aastharao1610@gmail.com"> <div className='bg-gray-200 h-12 w-12 rounded-md'> 
      <img className='h-12 mx-auto my-2 py-2' src="/Social/gmail.png" alt=""  /> </div>
      </a>
        </div> 
      
       
        <div className=' text-center text-white text-xs'>
       <a className='hover:underline text-sm' rel="stylesheet" href="https://github.com/Aastharao1610" > <p className='mb-2'>Designed and developed by Aastha Rao,2024</p></a>
        <p className=' mt-3 mx-auto w-80'>Crafted with <a className='text-gray-400 hover:underline' href="https://react.dev/">React.js</a> and <a className='text-gray-400 hover:underline' href="https://tailwindcss.com/">Tailwind CSS</a>, built in <a className='text-gray-400 hover:underline' href="https://code.visualstudio.com/">Visual Studio Code</a>, and deployed via <a className='text-gray-400 hover:underline' href="https://www.netlify.com/">Netlify</a></p>
</div>
       
      </div>
      </>
  )
}

export default Social