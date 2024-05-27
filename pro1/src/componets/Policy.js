import React from 'react'
import Policy1 from '../assets/policy.png';
import Policy2 from '../assets/policy2.png';
import Photo11 from '../assets/photo11.png';
function Policy() {
  return (
    
  <div className=' solution-section md:px-12 p-4 max-w-screen-2xl mx-auto mt-16' id="Policy">
 <div className='w-[60px] mb-3'><h2 className='flex justify-center bg-purple-100 text-purple-800 '>policy</h2></div>
  <div className='w-[600px] m-auto'><img src={Policy2}/></div>
<div className='w-[900px] m-auto'><img src={Policy1}/></div>
<div className='m-auto mt-20'><img src={Photo11}/></div>
    </div>
  )
}

export default Policy