import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import personal from '../Utils/IMG_20240206_195126-removebg-preview.png'

function Home() {
  const[isMobile,setisMobile] = useState(false)
  const[isdark,setisdark] = useState(true)
  const[screensize,setscreensize] = useState(window.innerWidth)

  useEffect(() => {
    AOS.init({ duration: 1000 });
    checkmobile()
    setscreensize(window.innerWidth)
  });


window.addEventListener('resize',()=>{
    checkmobile()
    setscreensize(window.innerWidth)
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

const styledivs = (isdark) =>`${isdark?'bg-gray-950  border  border-l-2 border-gray-400 shadow-gray-800 shadow-lg':'card '} `

  return (
    <div className="about mt-10">
            <p className="h-1 w-full bg-gradient-to-r from-black to-green-400"></p>
    
    <div className={`${isdark?'bg-sblack':'bg-white text-black'} h-full overflow-x-hidden mt-10  mx-auto bg-opacity-85 rounded-2xl  ${isMobile?'w-full':'w-10/12'}  z-10 `}>
    <div className={` ${isdark?'text-white':'text-black'}  mt-10 ml-5`}>
      <h2 className="text-5xl text-center ml-auto font-bold font-serif font-verdana">About me</h2>
      {/* <h2 className="text-5xl mx-auto color-change w-fit bg-gradient-to-r from-fuchsia-500 via-yellow-500 to-red-500 text-transparent bg-clip-text font-bold font-serif first-letter:font-verdana">Web developer</h2> */}
    </div>

    <div class={`container p-12 ${isdark?'text-white':'text-black'} z-10`}>
      <div
        data-aos={isMobile?'fade-up':'fade-left'}
        class={`first  p-4 ${styledivs(isdark)} text-center flex flex-col justify-center items-center overflow-auto `}
      >
        
       <h2 className="text-4xl font-semibold">Prajwal KR</h2>
       <h3>Full Stack web developer</h3>
       
      </div>
      <div
        data-aos={isMobile?'fade-up':'fade-left'}
        class={`Second p-4 ${styledivs(isdark)} text-center items-center overflow-auto `}
      >
       <h2 className="text-2xl font-bold ">Information Science</h2>
        <h3 className="text-md">GM Institute of Technology,Davangere</h3>
        <h4 className="text-sm">Avg_CGPA : 8.5</h4>
      </div>
      <div
        data-aos={isMobile?'fade-up':'fade-left'}
        class={`thirsd p-4 ${styledivs(isdark)}  overflow-auto  font-serif flex justify-center items-center`}
      >
        <ul>
          <div className="flex flex-col">
            <li>{isdark?'⚪':'🟢'} Java</li>
            <li>{isdark?'⚪':'🟢'} DSA</li>
          </div>

          <li>{isdark?'⚪':'🟢'} Problem solving</li>
          <li>{isdark?'⚪':'🟢'} Adaptability</li>
        </ul>
      </div>
      <div
        data-aos={isMobile?'fade-up':'fade-left'}
        class={`four p-4 ${styledivs(isdark)} overflow-auto  `}
      >
        <p>Full stack developer skilled in frontend and backend technologies, creating dynamic and responsive websites with seamless user experiences.</p>
      </div>
      <div
        data-aos={isMobile?'fade-up':'fade-right'}
        class={`five p-4 ${styledivs(isdark)} ${isMobile?'':'ml-10'}  bg-transparent border-none shadow-none text-center font-verdana bg-opacity-100 overflow-hidden  `}
      >
         <img className="w-8/12 mx-auto shadow-md shadow-blue-400 bg-blue-500 borrad " src={personal} alt="Photograph" />
      </div>
      <div
        data-aos={isMobile?'fade-up':'fade-right'}
        data-aos-delay={100}
        class={`six p-4 ${isMobile?'w-full':''} ${isdark?'bg-gray-950  bg-opacity-10 backdrop-blur-2xl border  border-l-2 border-gray-100 shadow-slate-800 shadow-xl':'card text-gray-900'} flex flex-col items-center justify-center   bg-opacity-100 overflow-auto  text-center`}
      >
        
        <h2 className='text-center font-bold text-3xl mt-20'>Education</h2>
                  <ul className={` ${isMobile?'w-full':'w-10/12'} mx-auto p-1`}>
                  <li className={`${isdark?'bg-transparent':'bg-white'}  p-6 rounded-xl `}>
                      <div className='flex flex-row justify-between  items-center'>
                          <h2 className={` font-bold ${isMobile ? 'text-lg' : 'text-xl'}`}>GM Institute of Technology.</h2>
                          <h3 className={` ${isMobile ? 'text-xs' : 'text-sm'}`}>2021-2025</h3>
                      </div>
                      <div className='flex flex-row justify-between items-center mt-2'>
                        <h3 className={` font-semibold text-green-400 ${isMobile ? 'text-sm' : 'text-md'}`}>Information Science</h3>
                      <h4 className={` ${isMobile ? 'text-xs' : 'text-sm'}`}>CGPA : 8.5</h4>
                      </div>
                      
                      <hr className="textt-white mt-1"/>

                  </li>
                  <li className={` ${isdark?'':'bg-white'} bg-transparent p-6 rounded-xl -mt-8  `}>
                      <div className='flex flex-row justify-between items-center'>
                          <h2 className={` font-bold ${isMobile ? 'text-lg' : 'text-xl'}`}>Sri Siddaganga Pu Science College.</h2>
                          <h3 className={` ${isMobile ? 'text-xs' : 'text-sm'}`}>2019-2021</h3>
                      </div>
                      <div className='flex flex-row justify-between items-center mt-2'>
                        <h3 className={` font-semibold text-green-400 ${isMobile ? 'w-xl' : 'text-md'}`}>PCMB</h3>
                      <h4 className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Percentage : 93%</h4>
                      </div>
                      
                      <hr className="textt-white mt-1"/>

                  </li>
                  <li className={` ${isdark?'':'bg-white'} p-6 rounded-xl -mt-8 `}>
                      <div className='flex flex-row justify-between items-start'>
                          <h2 className={`font-bold ${isMobile ? 'text-lg' : 'text-xl '}`}>GM Halamma High School.</h2>
                          <h3 className={` ${isMobile ? 'text-xs' : 'text-sm'}`}>2018-2019</h3>
                      </div>
                      <div className='flex flex-row justify-between items-center mt-2'>
                         <h3 className={` font-semibold text-green-400 ${isMobile ? 'text-sm' : 'text-md'}`}>SSLC</h3> 
                      <h4 className={` ${isMobile ? 'text-xs' : 'text-sm'}`}>Percentage : 92%</h4>
                      </div>
                     
                      <hr className="textt-white mt-1"/>

                  </li>
                  </ul>
      </div>
      <div
        data-aos={isMobile?'fade-up':'fade-left'}
        data-aos-delay={100}
        class={`seven p-5 ${isdark?'bg-gray-950  bg-opacity-10 backdrop-blur-2xl border  border-l-2 border-gray-100 shadow-gray-800 shadow-xl':'card text-gray-1000'} bg-opacity-100 overflow-auto  text-center  `}
      >
        {/* <img className="w-full h-96" src={image} alt="" /> */}
       
        <h2 className="text-2xl font-bold text-red-00">Skills</h2>
        <ul className="skills_list ">
          <div className="leading-loose text-start">
            <li>{isdark?'⚪':'🔵'} HTML</li>
            <li>{isdark?'⚪':'🔵'} CSS</li>
            <li>{isdark?'⚪':'🔵'} Javascript</li>
            <li>{isdark?'⚪':'🔵'} React Js</li>
            <li>{isdark?'⚪':'🔵'} Responsive web design</li>
          </div>
          <div className={`leading-loose text-start ${isMobile?'-ml-10':''}`}>
            <li>{isdark?'⚪':'🔵'} Tailwind Js</li>
            <li>{isdark?'⚪':'🔵'} Node Js</li>
            <li>{isdark?'⚪':'🔵'} Express Js</li>
            <li>{isdark?'⚪':'🔵'} MongoDB</li>
            <li>{isdark?'⚪':'🔵'} Web Development</li>
          </div>
        </ul>
      </div>
    </div>
    </div>
  </div>
  );
}

export default Home;
