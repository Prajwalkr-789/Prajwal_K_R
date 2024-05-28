import React, { useEffect, useState } from 'react'
import image from '../Utils/image.png'
import AOS from "aos";
import "aos/dist/aos.css";

function Acheivements() {

  const [isMobile , setisMobile] = useState(false)
  const [screensize , setscreensize] = useState(false)
  const[isdark,setisdark] = useState(true)


  
  useEffect(()=>{
    AOS.init({ duration: 1000 });
    checkmobile()
    setscreensize(window.innerWidth)
  })

  window.addEventListener('resize',()=>{
    checkmobile()
    setscreensize(window.innerWidth)
    // console.log(window.innerWidth)
  })


  const checkmobile =() =>{
    if(window.innerWidth <= 600){
      setisMobile(true)
      setscreensize(window.innerWidth)
    }
    else{
      setisMobile(false)
      setscreensize(window.innerWidth)
    }
  }

  return (
    <div>
      <div className={` ${isdark?'b text-white':'bg-white text-black'} ${isMobile?'w-full':'w-full'} ${isMobile?'h-fit':'h-fit'}  overflow-x-hidden   `}>
      <h2 data-aos="fade-in" data-aos-delay={100}  className={` text-5xl font-bold  ${isMobile?'mt-20':''} text-center `}>Achievements</h2>

            <div className={`w-10/12 mt-10   flex items-center justify-center ${screensize < 1000 ? 'grid-cols-1' : 'grid-cols-2'}  ${isMobile?'ml-8 ':'mx-auto'}  gap-y-6 `}>
                <div data-aos="fade-up" className={` ${isMobile?'w-12/12':'w-6/12'}  hover:-translate-y-2 transition-transform duration-200 ease-in-out hover:shadow-md  hover:shadow-gray-500  ${isdark?'bg-transparent':'bg-white'} bg-opacity-50 text-center flex justify-center items-center  rounded-lg hover:cursor-pointer p-2`}>
                    <img src={image} className='w-6/12 ' alt="" />
                    <p className=' break-words w-7/12'>Runner-up🥈 at Sukalpa23 State level coding competition</p>
                </div>
                {/* <div className={` ${isMobile?'w-12/12':'w-10/12'} hover:-translate-y-2 transition-transform duration-200 shadow-md  shadow-gray-500 ${isdark?'bg-black':'bg-white'} bg-opacity-50 text-center flex justify-center items-center hover:shadow-md rounded-lg hover:cursor-pointer hover:shadow-fuchsia-400 p-2`}>
                    <img src={image} className='w-6/12 ' alt="" />
                    <p className=' break-words w-7/12 '>Runner-up at Sukalpa23 State level coding competition</p>
                </div> */}
              </div>
                <h2 data-aos="fade-up" data-aos-delay={100} className=' text-4xl font-bold text-center mt-6 bg-gradient-to-r from-[#D402FD] via-[#FD02A8] to-[#5702FD] text-transparent bg-clip-text'>Certifications</h2>
              <div className={`  mt-10 grid place-items-center  ${screensize < 1000 ? 'grid-cols-1' : 'grid-cols-3'}  ${isMobile?'p-10':'mx-auto'}  gap-y-6 `}>
               
                  <div data-aos="fade-left" data-aos-delay={100}  className={`${isMobile?'w-12/12':'w-7/12'}  hover:-translate-y-2 transition-transform duration-200 shadow-md shadow-gray-500 ${isdark?'bg-black':'bg-white'} bg-opacity-50 text-center flex flex-col justify-center items-center hover:shadow-md rounded-lg hover:cursor-pointer  `}>
                    <img src={image} className='w-full ' alt="" />
                    <p className=' break-words w-8/12 '>Introduction to programming in C</p>
                </div>
                
                
                <div data-aos="fade-left" data-aos-delay={250}  className={`${isMobile?'w-12/12':'w-7/12'} mb-4 hover:-translate-y-2 transition-transform duration-200 shadow-md shadow-gray-500 ${isdark?'bg-black':'bg-white'} bg-opacity-50  text-center flex flex-col justify-center items-center hover:shadow-md rounded-lg hover:cursor-pointer  `}>
                    <img src={image} className='w-full ' alt="" />
                    <p className=' break-words w-8/12'>Introduction to programming in C</p>
                </div>
                <div data-aos="fade-left" data-aos-delay={350}  className={`${isMobile?'w-12/12':'w-7/12'} hover:-translate-y-2 transition-transform duration-200  shadow-md shadow-gray-500 ${isdark?'bg-black':'bg-white'} bg-opacity-50 text-center flex flex-col justify-center items-center hover:shadow-md rounded-lg hover:cursor-pointer  `}>
                    <img src={image} className='w-full ' alt="" />
                    <p className=' break-words w-8/12'>Introduction to programming in C</p>
                </div>
            </div>
                  </div>
    </div>
  )
}

export default Acheivements
