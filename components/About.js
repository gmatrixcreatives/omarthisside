import React, { useEffect, useState } from 'react'
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import ContactIcons from './ContactIcons'


function About({setShowAbout, showAbout}) {




  return (
    <div  className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-blur about-popup  transition-all ease-in-out duration-700 ${!showAbout? ' translate-y-[-120%]': 'translate-y-0'}`}>
        {/* About */}
        
        <a  
            onClick={()=>{
              setShowAbout(false)
            }}
            className={`fixed z-40 bottom-4 left-[50%] bg-white rounded-full w-16 h-16 translate-x-[-50%] flex items-center justify-center cursor-pointer story-close-btn ${!showAbout? 'translate-y-[20%] opacity-0': 'translate-y-0 opacity-100'} transition-all duration-500 ease-in-out delay-1000`}>
            <XMarkIcon className="inline-block h-8 w-8 text-[#071026] "/>
        </a>
        <div className='bg-gradient-to-b pointer-events-none from-[#071026] fixed top-0 left-0 h-[10%] w-[100%] z-30' />
          <div className='bg-gradient-to-t pointer-events-none from-[#071026] fixed bottom-0 left-0 h-[30%] w-full z-30' />

      <div className='h-screen overflow-hidden overflow-y-scroll pb-[400px] scrollbar-hide'>

      <div className={`${!showAbout? 'translate-y-[-10%] opacity-0': 'translate-y-0 opacity-100'} transition-all ease-in-out delay-300 duration-1000`}>
  


        <div className='max-w-3xl mx-auto z-50 p-5 mt-10  text-gray-400'>
          {/* Work */}
          <h1 className='font-bold text-3xl text-white'>Work.</h1>
          <p className='text-lg sm:text-xl leading-7 text-gray-400 mt-2 text-left'>As a designer I help early stage startups and companies from branding to design and development. I&apos;ve had the pleasure to work with organizations like Indicc Associates, International Summer School, Esya Centre, etc.</p>

          {/* Email Me */}
          <p className='text-lg sm:text-xl leading-7 mt-8 group'><a className='text-white underline group-hover:scale-110 transition-all animate-pulse ' href='mailto:omarthisside@gmail.com' target="_blank" rel="noreferrer">Email Me</a> if you think we should be working together on a project.</p>

          <h1 className='font-bold text-3xl text-white mt-12 border-t-[1px] pt-10 border-gray-800'>Skills.</h1>
          <div className=''>
            <div className="flex flex-wrap  mt-4  sm:justify-between  scrollbar-hide child:w-1/3 sm:child:w-auto">
              <div>
                <p className=' text-white text-lg sm:text-xl '>Interpersonal</p>
                <ul className='child:text-sm space-y-2 mt-2 '> 
                  <li>Quick Learner</li>
                  <li>Problem-Solving</li>
                  <li>Good Listner</li>
                </ul>
              </div>
              <div>
                <p className='fo text-white text-lg sm:text-xl '>Softwares</p>
                <ul className='child:text-sm space-y-2 mt-2'> 
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li></li>
                </ul>
              </div>
              <div>
                <p className=' text-white text-lg sm:text-xl '>Page Builders</p>
                <ul className='child:text-sm space-y-2 mt-2'> 
                  <li>WordPress</li>
                  <li>Wix</li>
                  <li>SquareSpace</li>
                  <li></li>
                </ul>
              </div>
              <div>
                <p className=' text-white text-lg sm:text-xl mt-4 sm:mt-0 '>Coding</p>
                <ul className='child:text-sm space-y-2 mt-2'> 
                  <li>HTML, CSS & JS</li>
                  <li>Bootstrap & Tailwind</li>
                  <li>React, Angular & React Native</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Skills */}


            {/* Education */}
          <h1 className='font-bold text-3xl text-white mt-12 border-t-[1px] pt-10 border-gray-800'>Education.</h1>
          <div className='space-y-7'>
            <div className='mt-4 space-y-1'>
              <p className='text-white font-bold'>Diploma in Computer Engineering</p>
              <p className="font-light text-sm">2019 • Jamia Millia Islamia, New Delhi</p>
              <p className="font-light text-sm italic text-gray-200">First Division with Distinction</p>
            </div>
            <div className='mt-4'>
              <p className='text-white font-bold'>High School</p>
              <p className="font-light text-sm">2016 • St. Mary&apos;s School, Nagina</p>
              <p className="font-light text-sm italic text-gray-200">First Division</p>
            </div>
          </div>
          {/* Education Ene */}

          {/* Contact */}
          <h1 className='font-bold text-3xl text-center text-white mt-12 border-t-[1px] pt-10 border-gray-800'>Contact.</h1>
          <div>
           <ContactIcons/>
          </div>
          {/* End */}

          {/* Download My CV */}
          <div className='mt-12 flex justify-center'>
             <a href="https://checksandcross.com/omar-this-side/curriculum-vitae.pdf" target="_blank" rel="noreferrer" className=' w-[240px] text-white border px-8 py-3 font-bold hover:scale-105 transition-all animate-pulse rounded-[25px]'>CURRICULUM VITAE</a>
          </div>



        </div>
        </div>
      </div>
    </div>
  )
}

export default About