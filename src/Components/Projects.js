import React, { useEffect, useState } from 'react'
import image1 from '../Utils/jpeg-optimizer_qTQmsQuNY.png';
import image2 from '../Utils/jpeg-optimizer_8de0e72ac23.png';
import ecom from '../Utils//jpeg-optimizer_download (3).png';
// import ecom from '../Utils/download (2).png';
import citys from '../Utils/jpeg-optimizer_download (4) (1).png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    title: 'Ecommerce Website',
    image: ecom,
    anc: "",
    techStack: ['React', 'Node Js', 'Tailwind CSS'],
    description: 'A full-featured ecommerce website with user authentication, product listings, and secure payment gateway integration.'
  },
  {
    id: 2,
    title: 'Complaining Website',
    image: citys,
    anc: "",
    techStack: ['React', 'Node Js', 'MongoDB'],
    description: 'A platform for users to submit and track complaints with real-time updates and admin management features.'
  },
  {
    id: 3,
    title: 'Rock paper Scissors Game',
    image: image2,
    anc: "",
    techStack: ['HTML', 'CSS', 'Javascript'],
    description: 'An interactive Rock Paper Scissors game with responsive design and real-time score tracking using JavaScript.'
  },
  {
    id: 4,
    title: 'Blog Platform',
    image: image1,
    anc: "",
    techStack: ['Gatsby', 'Contentful', 'SASS'],
    description: 'A modern blog platform featuring dynamic content management, SEO optimization, and responsive design using Gatsby.'
  },
  {
    id: 5,
    title: 'Task Management Tool',
    image: image2,
    anc: "",
    techStack: ['Vue', 'Firebase', 'Bootstrap'],
    description: 'A task management tool for teams to create, assign, and track tasks with real-time updates and notifications.'
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    image: image1,
    anc: "",
    techStack: ['Angular', 'Node Js', 'Material UI'],
    description: 'A weather dashboard providing real-time weather updates, forecasts, and interactive charts using Angular and Material UI.'
  },
];


function Projects() {
  const [isMobile , setisMobile] = useState(false)
  const [screensize , setscreensize] = useState('')
  const[isdark,setisdark] = useState(true)


    useEffect(()=>{
        AOS.init({duration:1000})
        checkmobile()
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
    
    <div className={` projects ${isdark?'':'bg-white'} overflow-x-hidden ${isMobile?'w-full mt-16 ':'w-full py-14'} ${isMobile?'':''} h-full   overflow-x-hidden  text-center`}>
        <h2 data-aos="fade-in" className={`${isdark?'text-white':'text-black'} text-5xl ${isMobile?'mt-16':''} text-center mt-1 font-bold`}>Projects</h2>
           <div className='grid grid-cols-1 p-10 gap-4'>

          
           {
            projects.map((res)=>(
              <>
              <div data-aos="fade-up" className={`${isMobile?'w-full ':' w-5/12'} mx-auto  rounded-lg mt-5`}>
                <img className='w-full  transition transform duration-300 ease-in hover:scale-[1.05] hover:cursor-pointer' src={res.image} alt="" />
                <p data-aos="fade-in" className='text-white mt-5'>{res.description}</p>
                <ul className='flex flex-row justify-around mt-8 items-center'>
                  {/* <h2 className='text-white'>Tech Stack : </h2> */}
                  <li data-aos="zoom-in" data-aos-delay="200" className={`rounded-xl text-gray-400 border border-gray-400 px-2 text-xs py-[1px]`}>{res.techStack[0]}</li>
                  <li data-aos="zoom-in" data-aos-delay="300" className={`rounded-xl text-gray-400 border border-gray-400 px-2 text-xs py-[1px]`}>{res.techStack[1]}</li>
                  <li data-aos="zoom-in" data-aos-delay="400" className={`rounded-xl text-gray-400 border border-gray-400 px-2 text-xs py-[1px]`}>{res.techStack[2]}</li>
                </ul>
                <h2 data-aos={`${res.id % 2 == 0?'fade-left':'fade-right'}`} className='mt-4 font-serif text-gray-100 text-xl mb-3'><a href={res.anc}>{res.title} &#8599; </a></h2>
              </div>
              </>
            ))}
           </div>
      </div>
  )
}

export default Projects
