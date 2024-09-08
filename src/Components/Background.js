import React, { useEffect, useState } from 'react';
import AOS from 'aos'; 
import ReactTypingEffect from 'react-typing-effect';


import 'aos/dist/aos.css'

function Background() {
  const [screensize , setscreensize] = useState('')
  const [isMobile , setisMobile] = useState('')
  const [isdark , setisdark] = useState(true)
  const checkmobile =() =>{
    if(window.innerWidth <= 700){
      setisMobile(true)
      setscreensize(window.innerWidth)
      
    }
    else{
      setisMobile(false)
      setscreensize(window.innerWidth)
    }
  }
  useEffect(()=>{
    AOS.init({duration : 1000})
    checkmobile()
},[])

window.addEventListener('resize',()=>{
checkmobile()
setscreensize(window.innerWidth)
// console.log(window.innerWidth)
})

  return (
    <>
    <div className=' h-screen text-white flex justify-center items-center overflow-x-hidden'>
      <div className={` w-10/12 flex ${isMobile?'flex-col':'flex-row'}  justify-around items-center`}>
      <div data-aos="fade-right" className={` ml-6 ${isMobile?'w-full mt-44':'w-6/12'} `} >
      

          <h2 className='text-6xl text-white font-bold'>Prajwal KR</h2>
          {/* text-[#231BE4]  */}
          <h2  className='text-2xl text-cyan-500 font-mono mt-2'>Web developer</h2>
          <h2 className={`${isMobile?'text-md w-11/12':'text-xl w-8/12'} font-medium  text-white`}><ReactTypingEffect
            text={["Versatile full stack developer with expertise in front-end and back-end technologies, creating dynamic, responsive, and scalable web applications."]}
            speed={40}
            loop ={1}
            eraseSpeed={100000}
            typingDelay={100}
            eraseDelay={10000000000}
      /></h2>
         
         <div className={`flex ${isMobile?'w-10/12 mt-5 mb-5':'w-6/12  mt-5'} `}>
          {/* <button className=' border-2 shadow-sm shadow-cyan-600 border-cyan-500 p-3 font-bold rounded-2xl hover:bg-cyan-500'>Contact me</button> */}
          <button className=' border-2 shadow-2xl shadow-cyan-600 border-cyan-500 p-3 font-bold rounded-2xl hover:bg-cyan-500 transition-transform duration-300 ease-in-out hover:-translate-y-2'>Download CV</button>
          </div> 
      </div>

      


      <div className={`bg-gray-950 ${isMobile?'w-full p-1 ':'w-6/12'}  h-fit rounded-md shadow-md shadow-blue-600 `}>
        <p className={` h-0.5 bg-gradient-to-r from-[#009FFF] via-fuchsia-500 to-[#ec2F4B]`}/>
        <p className='mt-1 ml-2 mb-1'>🔴 🟢 🔵</p>
        <p className={`h-0.5 bg-gradient-to-r from-[#ec2F4B] via-fuchsia-500 to-[#009FFF]`} />
        <div className='p-10'>
        <ul>
          <li data-aos="fade-right" data-aos-delay="200" className={`${isMobile?'ml--1':''}ml-6`}><span className='text-red-500 font-semibold'>const</span> coder =  &#123;</li>
          <li data-aos="fade-right" data-aos-delay="250" className={`${isMobile?'ml-1':'ml-10'}`}>name : 'Prajwal KR'</li>
          <li data-aos="fade-right" data-aos-delay="300" className={`${isMobile?'ml-1':'ml-10'} text-yellow-500 font-semibold`}><span className='text-white'>skills :</span> [ 'React Js' , 'Javascript' , 'Responsive web design' ,</li>
          <li data-aos="fade-right" data-aos-delay="350" className={`${isMobile?'ml-1':'ml-10'} text-yellow-500 font-semibold `}> 'Web Development' , 'Tailwind CSS' , 'Node Js' , 'Express Js' , 'MongoDB'],</li>
          <li data-aos="fade-right" data-aos-delay="400" className={`${isMobile?'ml-1':'ml-10'}`}>Problem Solving : '<span className='text-blue-500 font-semibold'>true</span>',</li>
          <li data-aos="fade-right" data-aos-delay="450" className={`${isMobile?'ml-1':'ml-10'}`}>Adaptability : '<span className='text-blue-500 font-semibold'>true</span>' , </li>
          <li data-aos="fade-right" data-aos-delay="500" className={`${isMobile?'ml-1':'ml-10'}`}><span className='text-green-500'>hireable</span> : <span className='text-fuchsia-500'>function()</span> &#123;</li>
          <li data-aos="fade-right" data-aos-delay="550" className={`${isMobile?'ml-8':'ml-16'}`}><span className='text-fuchsia-500'>return</span> ( </li>
          <li data-aos="fade-right" data-aos-delay="600"  className={`${isMobile?'ml-16':'ml-24'}`}><span className='text-orange-500 font-semibold'>this</span>.problemSolver && </li>
          <li data-aos="fade-right" data-aos-delay="650"  className={`${isMobile?'ml-16':'ml-24'}`}><span className='text-orange-500 font-semibold'>this</span>.skills.length >= 5</li>
          <li data-aos="fade-right" data-aos-delay="700"  className={`${isMobile?'ml-8':'ml-16'}`}>);</li>
          <li data-aos="fade-right" data-aos-delay="750"  className={`${isMobile?'ml-4':'ml-14'}`}>&#125;;</li>
          <li data-aos="fade-right" data-aos-delay="800"  className={`${isMobile?'ml-0':'ml-12'}`}>&#125;;</li>
        </ul>
        </div>
      </div>

      </div>


    </div>
    <div className={`flex ${isMobile?'hidden':'block'} justify-end items-end`}>
          <h3 data-aos="fade-right" className='bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400 bg-clip-text text-transparent text-2xl font-bold mr-7  '>Transforming ideas into Reality</h3>
      </div>


 </>
        
  )
}

export default Background
