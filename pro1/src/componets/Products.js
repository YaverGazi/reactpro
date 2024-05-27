import React from 'react';
import Slider from "react-slick";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Uber from '../assets/uber.png';
import Tules from '../assets/telus.png';
import Du from '../assets/du.png';
import Accenture from '../assets/accenture.png';
import Emirates from '../assets/emirates.png';
import Dubai from '../assets/dubai.png';
import Photo10 from '../assets/photo10.png';
import Photo11 from '../assets/photo11.png';
import Photo13 from '../assets/photo13.png';
import Photopr1 from '../assets/photopr1.png';
import Photopr2 from '../assets/photopr2.png';
import Photo14 from '../assets/photo14.png';
import Photo15 from '../assets/photo15.png';
import Herotext from '../assets/herotext.png';
import Photo161 from '../assets/photo16-1.png';
import Photo162 from '../assets/photo16-2.png';
import Photo163 from '../assets/photo16-3.png';
import Photo164 from '../assets/photo16-4.png';
import Title1 from '../assets/title1.png';
import Askedques from '../assets/askedques.png';
import Photo17 from '../assets/photo17.png';
import Empower from '../assets/Empower.png';
import Empower2 from '../assets/Empower2.png';
import Abouttext1 from '../assets/abouttext1.png';
import Abouttext2 from '../assets/abouttext2.png';
import Textpro from '../assets/textpro.png';
import Getstart from './Getstart';
import Bookdem from './Bookdem';
function Products() {

  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  
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
   
   <div className=' solution-section md:px-12 p-4 max-w-screen-2xl mx-auto mt-28 '  id="Products">
   <div className='w-[60px] mb-3'><h2 className=' bg-purple-100 text-purple-800 '>product</h2></div>
  <div className='relative w-full'>
  <div>
    <img className='  h-auto' src={Photo17} alt="Your Image" />
  </div>

  <div className='absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto'>
    <div>
    <img className='  h-auto' src={Textpro} alt="Your Image" />
    <div className='flex'>
   <Bookdem/>
   <Getstart/>
   </div>
      </div>
</div>

    
       </div>

     
       <div  className='mt-7 mb-7'><img src ={Photopr1}/></div>
       <div   className='mt-7 mb-7'><img src ={Photopr2}/></div>
       <div><img src ={Photo14}/></div>


<div className="relative mt-4">
  
  <img src={Photo15} className="w-full h-auto" alt="Alt Resim" />
 
  <img className='absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] object-cover' src={Title1} alt="Title Image" />
  <div className="flex absolute top-0 left-0 w-16 md:w-32 lg:w-48  gap-4 ml-10 mt-28" alt="Üst Resim">
<img src={Photo161} className="w-24 sm:w-auto h-auto" alt="Alt Resim" />
<img src={Photo162} className="w-24 sm:w-auto h-auto" alt="Alt Resim" />
<img src={Photo163} className="w-24 sm:w-auto h-auto" alt="Alt Resim" />
<img src={Photo164} className="w-24 sm:w-auto h-auto" alt="Alt Resim" />
</div>  


</div>

<div className='w-[900px] m-auto slider-container mt-4'>
<Slider  {...settings} prevArrow={<CustomPrevArrow className='bg-purple-900'/>} nextArrow={<CustomNextArrow />}>
  <div>
    <img  src={Uber} alt="Resim 1" />
  </div>
  <div>
    <img  src={Tules} alt="Resim 2" />
  </div>
  <div>
    <img  src={Dubai} alt="Resim 3" />
  </div>
  <div>
    <img  src={Emirates} alt="Resim 4" />
  </div>
  <div>
    <img  src={Du} alt="Resim 4" />
  </div>
  <div>
    <img  src={Accenture} alt="Resim 4" />
  </div>
  </Slider>


</div>

<div className=' solution-section md:px-12 p-4 max-w-screen-2xl mx-auto mt-28 '  id="Products">
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

   
    <div className='relative w-full'>
  <div>
    <img className=' w-full  h-auto' src={Photo10} alt="Your Image" />
  </div>

  <div className=' absolute top-1/2 left-[550px] transform -translate-x-1/2 -translate-y-1/2 text-center bg-black py-6 px-10 max-w-96 mx-auto'>
    <div>
    <img className='w-full  h-auto' src={Abouttext1} alt="Your Image" />
    <img className=' mt-2 w-full h-auto' src={Abouttext2} alt="Your Image" />
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

export default Products;
