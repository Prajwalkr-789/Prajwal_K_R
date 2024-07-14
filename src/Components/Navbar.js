import React, { useEffect, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoIosContact } from "react-icons/io";
import { Link  } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll'
import Projects from './Projects';

function Navbar() {

  const [isMobile , setisMobile] = useState(false)
  const [handlenavbar , sethandlenavbar] = useState(false)
  const[isdark,setisdark] = useState(true)

    useEffect(()=>{
        AOS.init({duration:2000})
        checkmobile()
    })

    window.addEventListener('resize',()=>{
        checkmobile()
    })

    const checkmobile =() =>{
        if(window.innerWidth <= 600){
          setisMobile(true)
        }
        else{
          setisMobile(false)
        }
    }

    const handleDropdownToggle = () =>{
       sethandlenavbar(!handlenavbar)
    }

  return (
    <>
    <div className={`sticky top-0 bg-black bg-opacity-90 z-30 overflow-x-hidden shadowclass h-16 flex flex-row text-center ${isMobile?'w-full':'w-full'} ${isMobile?'hidden':'block'} ${isdark?' text-white':'bg-white text-black border border-red-600'}     `}>
      <div className='flex w-3/12 flex-row justify-center'> 
        {/* <img className='w-/12 imagediv  text-center mx-auto' src={image} alt=""  /> */}
        <h2 className={` mt-3 ${isdark?'text-white':'text-black'} font-bold first-letter:text-fuchsia-500  text-2xl`} ><a href="#">PRAJWAL KR.</a> </h2>
        {/* <h3 className='font-serif ' data-aos="zoom-in " >Web Developer</h3> */}
      </div>

      <ul className={`flex w-8/12 ml-auto mt-4 items-center flex-row justify-around h-2/6 font-medium  `}>
        <li data-aos="zoom-out" data-aos-delay={100} className='text-gray-200 cursor-pointer text-lg underline-animation'> <a href="#">Home</a> </li>
        <li data-aos="zoom-out" data-aos-delay={200} className=' cursor-pointer text-lg underline-animation'><ScrollLink smooth  to='projects'>Projects</ScrollLink></li>
        <li data-aos="zoom-out" data-aos-delay={300} className=' cursor-pointer text-lg underline-animation'><ScrollLink to='acheive'>Achievements</ScrollLink></li>
        <li data-aos="zoom-out" data-aos-delay={400} className=' cursor-pointer text-lg underline-animation'><ScrollLink to='about'>About</ScrollLink></li>
        <li data-aos="zoom-out" data-aos-delay={500} className=' cursor-pointer text-lg underline-animation'><ScrollLink to='contact'>Contact</ScrollLink></li>
      </ul>
    </div>
     
    <div className={`fixed top-0 z-20 h-14 bg-black bg-opacity-90  w-full  ${isMobile ?'block':'hidden'}  hover:shadow-md hover:shadow-fuchsia-700`} >
      <div className='flex flex-row justify-between items-center'>
      <h2 className='text-white font-bold ml-2 first-letter:text-fuchsia-400 mt-3'>Prajwal KR.</h2>
      <button className="dropbtn text-white text-3xl mr-2  mt-3" onClick={handleDropdownToggle}>{handlenavbar?'✕':'☰'}</button>
    </div>
     
    <div  className={`dropdown-content sticky  rounded-b-2xl ${handlenavbar ?'block':'hidden'} text-white bg-opacity-90 bg-black`}>
      <ul className=' font-bold text-center  p-2 '>
      <li className='hover:text-fuchsia-400 cursor-pointer   rounded-md px-2 py-1 mt-1 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-fuchsia-400 underline'><a href="#">Home</a>  </li>
      <ScrollLink to='projects'><li className='hover:text-fuchsia-400 cursor-pointer border border-gray-600 rounded-md px-2 py-1 mt-1.5 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-fuchsia-400'>Projects</li></ScrollLink>
      <ScrollLink to='acheive'><li className='hover:text-fuchsia-400 cursor-pointer border border-gray-600 rounded-md px-2 py-1 mt-1.5 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-fuchsia-400'>Achievements</li></ScrollLink>
      <ScrollLink to='about'><li className='hover:text-fuchsia-400 cursor-pointer border border-gray-600 rounded-md px-2 py-1 mt-1.5 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-fuchsia-400'>About</li></ScrollLink>
      <ScrollLink to='contact'><li className='hover:text-fuchsia-400 cursor-pointer border border-gray-600 rounded-md px-2 py-1 mt-1.5 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-fuchsia-400'> Contact</li></ScrollLink>
      </ul>
    </div>
    </div>
    </>
  );
}

export default Navbar;
