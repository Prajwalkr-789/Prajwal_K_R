import React, { useEffect, useState,useRef } from 'react'
import { FaGithub,FaPhoneAlt } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import emailjs from '@emailjs/browser';

function Contact() {


  const [isMobile , setisMobile] = useState(false)

  useEffect(()=>{
    checkmobile()
  },[])

  window.addEventListener('resize',()=>{
    checkmobile()
    // console.log(window.innerWidth)
  })
  
  const checkmobile =() =>{
    if(window.innerWidth <= 600){
      setisMobile(true)
      
    }
    else{
      setisMobile(false)
    }
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5rf2r16', 'template_cuq2x0i', form.current, {
        publicKey: 'O95a0Y_zszKEHNHFh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementsByName('from_name')[0].value = '';
          document.getElementsByName('from_email')[0].value = '';
          document.getElementsByName('message')[0].value = '';
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
      <p className='h-1 bg-gradient-to-r from-blue-500 to-black'></p>
       <h2 className='text-white text-transparent flex justify-center text-4xl font-verdana font-bold mt-5'>Contact me</h2>
    <div className={` ${isMobile?'h-fit mt-10':'min-h-screen -mt-10'}  ${isMobile?'w-full':'w-full'}   flex justify-center  items-center  text-white text-center`}>
     
      <div className={` w-10/12 flex ${isMobile ? 'flex-col':'flex-row'} ${isMobile ?'mt-6':''}  justify-around  items-center`}>


      <div className={` ${isMobile?'-ml-52':''} w-4/12 `}>
          <ul className='flex flex-row justify-between  items-center'>
            <div>
              <li className='flex flex-col leading-loose items-center justify-center'>
                <FaLinkedin size={32} className='hover:text-[#0882bd] hover:cursor-pointer'/>
                <h2 >Linked In</h2>
                <a className='text-gray-500' target='_blank' href="https://www.linkedin.com/in/prajwal-kr-49732727b?">Prajwal KR</a>
                </li>
              <li className='flex flex-col mt-10 leading-loose items-center justify-center'>
                <FaPhoneAlt size={32} className='hover:text-green-400 hover:cursor-pointer'/>
                <h2>Contact no</h2>
                <h3 className='text-gray-500'><a target='_blank' href="tel:+917899274216">+917899274216</a></h3>
              </li>
            </div>
            <div className=''>
              <li className='flex flex-col items-center leading-loose justify-center ml-10'>
                <FaGithub size={32} className='hover:text-gray-300 hover:cursor-pointer'/>
                <h2>Github</h2>
                <h3 className='text-gray-500'><a target='_blank' href="https://github.com/Prajwal-kr789">Prajwal-kr789</a></h3>
              </li>
              <li className='flex flex-col ml-10 items-center mt-10 leading-loose justify-center'>
                <IoMail size={32} className='hover:text-yellow-400 hover:cursor-pointer'/>
                <h2>Email</h2>
                <h3 className='text-gray-500'><a target='_blank' href="mailto:prajwal07kr@gmail.com">prajwal07kr@gmail.com</a></h3>
              </li>
            </div>
          </ul>

        </div>

          <div class={`contactform ${isMobile?'mt-10  mb-10':''}`}>
              <form class="formC" ref={form} onSubmit={sendEmail}>
                  <div class="form_front">
                      <div class="form_details font-verdana">Contact</div>
                      
                      <input placeholder="Your name..." class="inputC" name='from_name' type="text"  required/>
                      <input placeholder="Your email..." class="inputC" name='from_email' type="email" required/>
                      <input placeholder="Your message..." class="inputC" name='message' type="text" required/>
                      <button class="btn">Submit</button>
                  </div>
              </form>
          </div>

          </div>
      </div>
    </div>
  )
}

export default Contact
