
import React from 'react';
import { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import Logo from '../assets/logo.png'
import BookDemo from './BookDemo';
import Login from './Login';
function Navbar() {
    const [ismenuopen, setIsmenuopen] = useState(false)
    const togglemnu=()=>{
        setIsmenuopen(!ismenuopen)
    }
    
    const navitems=[
        {link:"Solutions",path:"#Solutions"},
        {link:"Products",path:"#Products"},
        {link:"Industries",path:"#Industries"},
        {link:"About",path:"#About"},
        {link:"Policy",path:"#Policy"},
    
    ]

   
  return (
    <>
   <nav className='bg-white md:px-14 py-2 max-w-screen-2xl mx-auto border-b text-purple-600 fixed top-0 left-0 right-0'>
    <div className=' container mx-auto flex justify-between items-center font-medium'>
        <div className='  flex  space-x-14 items-center'>
            <a href="/"className='text-2xl flex item-center space-x-3 ' ><img className='w-[80px]' src={Logo}/></a>
     <ul className='md:flex space-x-12 hidden'>
    {
        navitems.map(({link,path})=>(
            <a key={link}  href={path} className=' block hover:text-gray-300'>{link}</a>
        ))
    }
    
</ul>
</div>
 
    <div className=' hidden md:flex items-center '>
    {/* <a href="/" className='hidden lg:flex items-center bg-purple-100 hover:bg-purple-700 transition-all duration-300 rounded py-2 px-4 text-purple-800 hover:text-white  ml-52'><span>Log in</span></a> */}
    
    {/* <button className='bg-purple-100 hover:bg-purple-700 transition-all duration-300 rounded py-2 px-4 text-purple-800 hover:text-white ml-52'>Book Demo</button> */}
   <Login/>
   <BookDemo/>
    </div>
    <div className='md:hidden'>
        <button onClick={togglemnu} className='text-white focus:outline-none focus:text-gray-300'>

            {ismenuopen ? (<FaXmark className='w-6 h-6 text-black'/>) :(<FaBars className='w-6 h-6 text-purple-500'/>)}
        </button>
    </div>
    </div>
</nav>

<div className={`space-y-4 px-4 pb-5 pt-24 bg-purple-600 ${ismenuopen ? 'block fixed top-0 right-0 left-0 ':'hidden'}`}>
    {navitems.map(({link,path})=>(
            <a key={link}  href={path} className=' block hover:text-gray-300'>{link}</a>
        ))}
</div>

</>
  )
}            
export default Navbar;