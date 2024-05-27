import React from 'react'
import Photo11 from '../assets/photo11.png';
import Aboutph1 from '../assets/aboutph1.png';
import Aboutph2 from '../assets/aboutph2.png';
import Aboutph3 from '../assets/aboutph3.png';
import Aboutph4 from '../assets/aboutph4.png';
import Aboutph5 from '../assets/aboutph5.png';
import Aboutph6 from '../assets/aboutph6.png';
import Aboutph7 from '../assets/aboutph7.png';
import Aboutph8 from '../assets/aboutph8.png';
import Aboutph9 from '../assets/aboutph9.png';
import Aboutph10 from '../assets/aboutph10.png';
import Aboutph11 from '../assets/aboutph11.png';
import Photo17 from '../assets/photo17.png';
import One37 from '../assets/One37.mp4';
import Abouttext3 from '../assets/abouttext3.png';
import Abouttext4 from '../assets/abouttext4.png';
import Getstart from './Getstart';
import Bookdem from './Bookdem';
function About() {
  return (
    <div className=' solution-section md:px-12 p-4 max-w-screen-2xl mx-auto mt-16' id="About">
      <div className='w-[60px] mb-3'><h2 className='flex justify-center bg-purple-100 text-purple-800 '>about</h2></div>
      <div className='w-[800px] m-auto'><img src={Aboutph1}/></div>

<div>
      {/* YouTube gömülü video */}
      <iframe className='m-auto mt-14'
        width="800px"
        height="315"
        src={One37}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div className='w-[900px] m-auto mt-20'><img src={Aboutph2}/></div>
    <div className='w-[900px] m-auto mt-20'><img src={Aboutph3}/></div>
    <div className='w-[900px] m-auto mt-20'><img src={Aboutph4}/></div>
    <div className='w-[900px] m-auto mt-20'><img src={Aboutph5}/></div>
    <div className='w-[900px] m-auto'>
    <div className=' w-[600px] m-auto mt-20'><img src={Aboutph10}/></div>
    <div className='flex w-[900px]'>

    <div className='m-auto mt-14'><img src={Aboutph6}/></div>
    <div className=' m-auto mt-14'><img src={Aboutph7}/></div>
    <div className=' m-auto mt-14'><img src={Aboutph8}/></div>
    <div className='m-auto mt-14'><img src={Aboutph9}/></div>
    </div>
    </div>
    <div className='relative w-full'>
  <div>
    <img className='  h-auto' src={Photo17} alt="Your Image" />
  </div>

  <div className='absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto'>
    <div>
    <img className='  h-auto' src={Abouttext3} alt="Your Image" />
    <img className=' mt-2 h-auto' src={Abouttext4} alt="Your Image" />
    </div>
    <div className='flex'>
   <Bookdem/>
   <Getstart/>
   </div>
    {/* <div className="mt-4 flex flex-col md:flex-row lg:flex-col xl:flex-row ">
      <button className="bg-transparent hover:bg-transparent border border-white text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 md:mr-2 lg:mb-2 lg:mr-0 xl:mr-2">
        <span className="text-sm md:text-base lg:text-sm xl:text-base">Book Demo</span>
      </button>
      <button className="bg-transparent hover:bg-transparent border border-white text-white font-bold py-2 px-4 rounded">
        <span className="text-sm md:text-base lg:text-sm xl:text-base">Get Started</span>
      </button>
    </div> */}
  </div>

    
       </div>
       <div className='m-auto mt-20'><img src={Photo11}/></div>
    </div>
  )
}

export default About