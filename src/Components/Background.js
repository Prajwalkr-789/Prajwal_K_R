import React, { useEffect, useState } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'

function Background() {
  const [screensize , setscreensize] = useState('')
  const [isMobile , setisMobile] = useState('')
  const [isdark , setisdark] = useState(true)
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
  useEffect(()=>{
    AOS.init({duration : 1000})
    checkmobile()
})

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
          <h2 className={`${isMobile?'text-md':'text-xl'} font-medium w-8/12 text-white`}>Versatile <span className='text-[#FF0016] font-extrabold underline'>full stack developer</span> with expertise in front-end and back-end technologies, creating dynamic, responsive, and scalable web applications.</h2>
         
         <div className={`flex ${isMobile?'w-10/12 mt-5 mb-5':'w-6/12  mt-5'} `}>
          <button className=' border-2 shadow-sm shadow-cyan-600 border-cyan-500 p-3 font-bold rounded-2xl hover:bg-cyan-500'>Contact me</button>
          <button className=' border-2 shadow-sm shadow-cyan-600 border-cyan-500 p-3 font-bold rounded-2xl hover:bg-cyan-500 ml-3 mt-2 '>Download CV</button>
          </div> 
      </div>

      


      <div className={`bg-gray-950 ${isMobile?'w-full p-1':'w-6/12'}  h-fit rounded-md shadow-md shadow-blue-600`}>
        <p className={` h-0.5 bg-gradient-to-r from-[#009FFF] via-fuchsia-500 to-[#ec2F4B]`}/>
        <p className='mt-1 ml-2 mb-1'>🔴 🟢 🔵</p>
        <p className={`h-0.5 bg-gradient-to-r from-[#ec2F4B] via-fuchsia-500 to-[#009FFF]`} />
        <div className='p-10'>
        <ul>
          <li data-aos="fade-right" data-aos-delay="200" className={`${isMobile?'ml--1':''}ml-6`}><span className='text-red-500 font-semibold'>const</span> coder =  &#123;</li>
          <li data-aos="fade-right" data-aos-delay="250" className={`${isMobile?'ml-1':'ml-10'}`}>name : 'Prajwal KR'</li>
          <li data-aos="fade-right" data-aos-delay="300" className={`${isMobile?'ml-1':'ml-10'} text-yellow-500 font-semibold`}><span className='text-white'>skills :</span> [ 'React Js' , 'Javascript' , 'Responsive web design' ,</li>
          <li data-aos="fade-right" data-aos-delay="350" className={`${isMobile?'ml-1':'ml-10'} text-yellow-500 font-semibold `}>'Web Development' , 'Tailwind Js' , 'Node Js' ,'Express Js' ,'MongoDB'],</li>
          <li data-aos="fade-right" data-aos-delay="400" className={`${isMobile?'ml-1':'ml-10'}`}>Problem Solving : '<span className='text-blue-500 font-semibold'>true</span>',</li>
          <li data-aos="fade-right" data-aos-delay="450" className={`${isMobile?'ml-1':'ml-10'}`}>Adaptability : '<span className='text-blue-500 font-semibold'>true</span>' , </li>
          <li data-aos="fade-right" data-aos-delay="500" className={`${isMobile?'ml-1':'ml-10'}`}><span className='text-green-500'>hireable</span> : <span className='text-fuchsia-500'>function()</span> &#123;</li>
          <li data-aos="fade-right" data-aos-delay="550" className={`${isMobile?'ml-8':'ml-16'}`}><span className='text-fuchsia-500'>return</span> ( </li>
          <li data-aos="fade-right" data-aos-delay="600"  className={`${isMobile?'ml-16':'ml-24'}`}><span className='text-orange-500 font-semibold'>this</span>.problemSolver && </li>
          <li data-aos="fade-right" data-aos-delay="650"  className={`${isMobile?'ml-16':'ml-24'}`}><span className='text-orange-500 font-semibold'>this</span>.skills.length >= 5</li>
          <li data-aos="fade-right" data-aos-delay="700"  className={`${isMobile?'ml-8':'ml-16'}`}>);</li>
          <li data-aos="fade-right" data-aos-delay="750"  className={`${isMobile?'ml-4':'ml-12'}`}>&#125;;</li>
          <li data-aos="fade-right" data-aos-delay="800"  className={`${isMobile?'ml-0':'ml-66'}`}>&#125;;</li>
        </ul>
        </div>
      </div>

      </div>


    </div>
    <div className={`flex ${isMobile?'hidden':'block'} justify-end items-end`}>
          <h3 data-aos="fade-right" className='bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400 bg-clip-text text-transparent text-2xl font-bold mr-7  '>Transforming ideas into Reality</h3>
      </div>
    {/* <div className={`text-white  ${screensize < 900 ? 'hidden':'block'} font-bold  font-verdana mx-auto w-6/12`}>
    <ul className={`flex   flex-row justify-around items-center  mb-10`}>
     <li className={` ${isdark?'bg-gray-900':'bg-white text-gray-700'} px-2 py-1 rounded-md hover:cursor-pointer shadow-sm shadow-yellow-400 hover:text-yellow-400`}><a href="#">Github</a></li>
     <li className={`${isdark?'bg-gray-900':'bg-white text-gray-700'} px-2 py-1 rounded-md  hover:cursor-pointer shadow-sm shadow-[#0882bd] hover:text-[#0882bd]`}><a href="https://www.linkedin.com/in/prajwal-kr-49732727b?">Linked In</a></li>
     <li className={`${isdark?'bg-gray-900':'bg-white text-gray-700'} px-2 py-1 rounded-md hover:cursor-pointer shadow-sm shadow-green-500 hover:text-green-500`}><a href="tel:+917899274216">Phone</a></li>
     <li className={`${isdark?'bg-gray-900':'bg-white text-gray-700'} px-2 py-1 rounded-md hover:cursor-pointer shadow-sm shadow-red-500 hover:text-red-400`}><a href="mailto:prajwal07kr@gmail.com">Mail</a></li>
    </ul>
 </div> */}
 {/* <div className={`text-white font-bold ${screensize < 900 ? 'block':'hidden'} font-verdana mx-auto w-6/12`}>
    <ul className={`flex flex-row justify-between items-center  mb-10`}>
     <div className="text-center">
           <li className={`${isdark?'bg-gray-900':'bg-white text-gray-700'}0 px-2 py-1 hover:cursor-pointer shadow-md shadow-yellow-400 hover:text-yellow-400  rounded-md`}><a href="#">Github</a></li>
           <li className={`${isdark?'bg-gray-900':'bg-white text-gray-700'} px-2 py-1 hover:cursor-pointer shadow-md shadow-[#0882bd] hover:text-[#0882bd] rounded-md mt-5`}><a target="_blank" href="https://www.linkedin.com/in/prajwal-kr-49732727b?">Linked In</a></li>
     </div>
    
     <div className="text-center">
           <li className={`${isdark?'bg-gray-900':'bg-white text-gray-700'} px-2 py-1 hover:cursor-pointer shadow-md shadow-green-500 hover:text-green-500 rounded-md`}><a href="tel:+917899274216">Phone</a></li>
           <li className={`${isdark?'bg-gray-900':'bg-white text-gray-700'} px-2 py-1 hover:cursor-pointer shadow-md shadow-red-500 hover:text-red-400 rounded-md mt-5`}><a href="mailto:prajwal07kr@gmail.com">Mail</a></li>
     </div>
    
    </ul>
 </div> */}

 {/* <div>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
            </svg>
        </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#1e88e5" d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"></path><path fill="#fff" d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"></path>
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"></path><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"></path>
            </svg>
          </li>
          <li></li>
        </ul>
      </div> */}

 </>
        
  )
}

export default Background
