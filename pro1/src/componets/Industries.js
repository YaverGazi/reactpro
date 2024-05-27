import React from 'react';
import { useState } from 'react';
import Photo7 from '../assets/photo7.png';
import Photo10 from '../assets/photo10.png';
import Photo11 from '../assets/photo11.png';
import Photo17 from '../assets/photo17.png';
import Photo18 from '../assets/photo18.png';
import Photo19 from '../assets/photo19.png';
import data1 from '../assets/data1.png';
import data2 from '../assets/data2.png';
import data3 from '../assets/data3.png';
import datatext1 from '../assets/datatext1.png';
import datatext2 from '../assets/datatext2.png';
import datatext3 from '../assets/datatext3.png';
import key from '../assets/key.png';
import key1 from '../assets/key1.png';
import Askedques from '../assets/askedques.png';
import Herotext from '../assets/herotext.png';
import Title1 from '../assets/title1.png';
import Textpro1 from '../assets/textpro1.png';
import Textpro2 from '../assets/textpro2.png';
import Getstart from './Getstart';
import Bookdem from './Bookdem';
function Industries() {

  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev" onClick={onClick} style={{ backgroundColor: 'purple' }}>
        Previous
      </button>
    );
  };

  // Özel sağ ok butonu bileşeni
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next" onClick={onClick} style={{ backgroundColor: 'purple' }}>
        Next
      </button>
    );
  };
  return (
    <div className='  solution-section md:px-12 p-4 max-w-screen-2xl mx-auto mt-16' id="Industries">
   <div className='w-[63px] mb-3'><h2 className=' bg-purple-100 text-purple-800 '>industrie</h2></div>

   <div className='relative w-full'>
  <div>
    <img className='  h-auto' src={Photo17} alt="Your Image" />
  </div>

  <div className='absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto'>
    <div>

    <img className=' mb-4 h-auto' src={Textpro1} alt="Your Image" />
    <img className='  h-auto' src={Textpro2} alt="Your Image" />
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
<div >
  <div className=' w-[800px] m-auto mt-10 md:flex-wrap' >
  <div><img src={datatext1}/></div>
  <div><img src={datatext2}/></div>
  <div><img src={datatext3}/></div>
  </div>


<div className=' w-[800px] m-auto mt-7 flex '>

  <div><img src={data1}/></div>
  <div><img src={data2}/></div>
  <div><img src={data3}/></div>
</div>
</div>

<div className='flex justify-evenly mt-10'>
  <div className="w-[200px] mt-14">
    <img src={key1}  />
  </div>
  <div className="w-[500px]">
    <img src={key}  />
  </div>
</div>

<div className='mt-10'>
<div><img src={Photo18}/></div>
</div>
<div className='mt-10'>
<div><img src={Photo7}/></div>
</div>
<div className='mt-10 w-[900px] m-auto'>
<div><img src={Photo19}/></div>
</div>
<div className=' md:px-12 p-4 max-w-screen-2xl mx-auto mt-28 '  id="Products">
 <div className='flex justify-center mb-7'><img src={Askedques}/></div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button 
            type="button" 
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
            data-accordion-target="#accordion-collapse-body-1" 
            aria-expanded={accordionOpen ? 'true' : 'false'} 
            onClick={toggleAccordion}
          >
            <span>Flowbite nedir?</span>
            <svg 
              data-accordion-icon 
              className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`} 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
            <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
          </div>
        </div>
        {/* Diğer accordion öğeleri */}
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button 
            type="button" 
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
            data-accordion-target="#accordion-collapse-body-1" 
            aria-expanded={accordionOpen ? 'true' : 'false'} 
            onClick={toggleAccordion}
          >
            <span>Flowbite nedir?</span>
            <svg 
              data-accordion-icon 
              className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`} 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
            <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
          </div>
        </div>
        {/* Diğer accordion öğeleri */}
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button 
            type="button" 
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
            data-accordion-target="#accordion-collapse-body-1" 
            aria-expanded={accordionOpen ? 'true' : 'false'} 
            onClick={toggleAccordion}
          >
            <span>Flowbite nedir?</span>
            <svg 
              data-accordion-icon 
              className={`w-3 h-3 rotate-180 shrink-0 ${accordionOpen ? 'transform rotate-180' : ''}`} 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${accordionOpen ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite, Tailwind CSS üzerine inşa edilmiş etkileşimli bileşenlerin açık kaynaklı bir kütüphanesidir, bunlar arasında düğmeler, açılır menüler, modallar, navigasyon çubukları ve daha fazlası bulunmaktadır.</p>
            <p className="text-gray-500 dark:text-gray-400">Daha hızlı web siteleri geliştirmeye başlamak için <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">nasıl başlanır</a> ve Tailwind CSS üzerine bileşenlerle birlikte Flowbite ile.</p>
          </div>
        </div>
  
      </div>
    </div>
    {/* <div className='relative mt-10'>
  <div>
    <img className='w-full h-auto' src={Photo10} alt="Your Image" />
  </div>

  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white text-black py-6 px-10 max-w-sm mx-auto'>
    <h1 className='font-bold'>Your Partner in Health</h1>
    <p>One37 ID is at the forefront of integrating advanced digital identity solutions in healthcare. Join us in shaping a future where digital health is synonymous with security, privacy, and patient-centric care.</p>
    <div className="mt-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Button 1</button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Button 2</button>
    </div>
  </div>
</div> */}

<div className='relative w-full'>
  <div>
    <img className='  h-auto' src={Photo10} alt="Your Image" />
  </div>

  <div className='absolute top-1/2  left-[550px] transform -translate-x-1/2 -translate-y-1/2 text-center bg-black  text-white py-6 px-10 max-w-96 mx-auto'>
    <div >
    <img className='  h-auto' src={Herotext} alt="Your Image" />
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
<div>
  <img src={Photo11}/>
</div>

    </div>
 
  )
}

export default Industries