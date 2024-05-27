import React from 'react';
import Slider from "react-slick";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Uber from '../assets/uber.png';
import Tules from '../assets/telus.png';
import Du from '../assets/du.png';
import Accenture from '../assets/accenture.png';
import Emirates from '../assets/emirates.png';
import Dubai from '../assets/dubai.png';
import Photo4 from '../assets/photogirl.png'
import Photo5 from '../assets/photo5.png';
import Photo6 from '../assets/photo6.png';
import Photo7 from '../assets/photo7.png';
import Herotext from '../assets/herotext.png';
import Photo9 from '../assets/photo9.png';
import Photo10 from '../assets/photo10.png';
import Photo11 from '../assets/photo11.png';
import Photo17 from '../assets/photo17.png';
import Photo61 from '../assets/photo61.png';
import Photo62 from '../assets/photo62.png';
import Photo63 from '../assets/photo63.png';
import Photo91 from '../assets/photo91.png';
import Photo92 from '../assets/photo92.png';
import Photo93 from '../assets/phota93.png';
import Photo94 from '../assets/photo94.png';
import Getstart from './Getstart';
import Bookdem from './Bookdem';
import Abouttext1 from '../assets/abouttext1.png';
import Abouttext2 from '../assets/abouttext2.png';

// import { FaZ } from 'react-icons/fa6';
function Solutions() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
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
    <div className=' solution-section md:px-12 p-4 max-w-screen-2xl mx-auto mt-16' id="Solutions">
<div className='relative w-full'>
  <div>
    <img className='  h-auto' src={Photo17} alt="Your Image" />
  </div>

  <div className='absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent text-white py-6 px-10 max-w-96 mx-auto'>
    <div>
    <img className='  h-auto' src={Herotext} alt="Your Image" />
   <div className='flex'>
   <Bookdem/>
   <Getstart/>
   </div>
  
    </div>

  </div>

    
       </div>
  
       

<div className='relative'>
    <img  className='absolute w-[900px] m-auto mt-4 ml-12 z-50 ' src={Photo5} alt="Photo5" />

    <div className=''>
        <img src={Photo4} className=' z-1 lg:h-[386px] rounded-lg md:p-9 px-4 py-9 ml-[700px]  ' alt="Photo4" />
    </div>
</div>
 <div className='margin mt-9'>
    <div >
        <img className='w-[900px] m-auto mt-8' src={Photo61} alt="Photo61" />
    </div>
    <div>
        <img className='w-[900px] m-auto mt-8' src={Photo62} alt="Photo62" />
    </div>
    <div >
        <img className='w-[900px] m-auto mt-8' src={Photo63} alt="Photo63" />
    </div>
    <div>
        <img className='w-[900px] m-auto mt-8' src={Photo7} alt="Photo7" />
    </div>
</div> 

      
        <div className='  w-[1000px] m-auto slider-container  mt-4'>
<Slider  {...settings} prevArrow={<CustomPrevArrow className='bg-purple-900'/>} nextArrow={<CustomNextArrow />}>
  <div>
    <img  src={Uber} alt="Resim 1" />
  </div>
  <div>
    <img    src={Tules} alt="Resim 2" />
  </div>
  <div>
    <img  src={Dubai} alt="Resim 3" />
  </div>
  <div>
    <img  src={Emirates} alt="Resim 4" />
  </div>
  <div>
    <img   src={Du} alt="Resim 4" />
  </div>
  <div>
    <img  src={Accenture} alt="Resim 4" />
  </div>

 
</Slider>
</div>
<div>

  <div >
        <img className='w-[500px] m-auto mt-4' src={Photo91} alt="Photo91" />
    </div>
    <div >
        <img className='w-[500px] m-auto mt-4' src={Photo92} alt="Photo92" />
    </div>


    <div>
        <img className='w-[500px] m-auto mt-4' src={Photo93} alt="Photo93" />
    </div>
    <div >
        <img className='w-[500px] m-auto mt-4' src={Photo94} alt="Photo94" />

    </div>
</div>


        <div className='relative w-full'>
  <div>
    <img className=' w-full  h-auto mt-7' src={Photo10} alt="Your Image" />
  </div>

  <div className=' absolute top-1/2 left-[550px] transform -translate-x-1/2 -translate-y-1/2 text-center bg-black py-6 px-10 max-w-96 mx-auto'>
    <div>
    <img className='w-full  h-auto' src={Abouttext1} alt="Your Image" />
    <img className=' mt-2 w-full h-auto' src={Abouttext2} alt="Your Image" />
    </div>

  
  </div>

    
       </div>
       
        <div>
  <img src={Photo11}/>
</div>
</div> 
  )
}

export default Solutions