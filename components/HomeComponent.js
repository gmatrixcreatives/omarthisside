import React, { useState } from 'react'

//Image
import HeroImage from '../assets/images/hero-image.png'
import RotatingImage from '../assets/images/rotating-image.png'

import IssImage from '../assets/images/work/iss.png'

// JSON
import work from '../pages/api/work.json';


// Icons
import { ArrowRightIcon, XMarkIcon, ArrowUpIcon } from '@heroicons/react/24/solid'

// Imports
import Image from 'next/image'
import Clients from './Clients'
import Work from './Work'
import About from './About';
import Endorsements from './Endorsements';

function HomeComponent() {



  return (
    <div className="">
      

           

      {/* Hero */}
      <div className="bg-[url('./../assets/images/hero-background-wg.png')] bg-no-repeat bg-cover py-5 sm:py-8 relative">

        <div className='bg-gradient-to-b from-[#071026] absolute top-0 left-0 h-14 w-[100%]' />
        <div className='bg-gradient-to-t from-[#071026] absolute bottom-0 left-0 h-16 w-full' />

        <div className="flex flex-col px-5 sm:flex-row max-w-[1280px] mx-auto sm:text-left ">

          {/* Col 1 */}
          <div className='order-2 text-center sm:text-left sm:w-7/12 flex flex-col justify-center '>
            <p className='text-[26px] mt-5 sm:mt-0'>Hi, I&apos;m Omar</p>
            <h1 className='text-[42px] font-bold leading-tight mt-2 md:text-[72px]'>Think. Innovate. Design.</h1>
            <p className='mt-4 text-gray-400 max-w-lg sm:text-left'>I am a designer based in India with 4+ years of experience in creating minimal, bespoke and human-centered designs and animations.</p>
            <a href="mailto:omarthisside@gmail.com" className='max-w-[260px] whitespace-nowrap z-10 mx-auto sm:mx-0 mt-8 bg-white px-6 py-3 font-bold text-[#071026] hover:scale-105 transition-all'>REQUEST A PROPOSAL  <ArrowRightIcon className="ml-1 inline-block h-4 w-4"/></a>
          </div>

        {/* Col 2 */}
        <div className='sm:w-5/12 order-1 sm:order-2 relative '>
            <Image 
              src={HeroImage}
              alt="Omar - Founder, Checks & Cross"
            />

            <div className='absolute right-0 bottom-0 rotating-image'>
              <Image 
                src={RotatingImage}
                alt="Think. Innovate. Design."
              />
            </div>
            
        </div>
      </div>
      </div>
      {/* Hero End*/}


     <Clients />

      {/* Easy solutions */}
      <div className="bg-[url('./../assets/images/easy-solutions-bg.png')] bg-no-repeat bg-cover relative mt-20">
          <div className='bg-gradient-to-b from-[#071026] absolute top-0 left-0 h-14 w-[100%]' />
          <div className='bg-gradient-to-t from-[#071026] absolute bottom-0 left-0 h-16 w-full' />
        <div className='container-xl text-center px-4 py-[120px] sm:py-[240px] my-20'>

           <h1 className='text-[40px] font-bold leading-tight mt-2 md:text-[72px] max-w-2xl mx-auto'>Complex problems, easy solutions.</h1>
           <p className='max-w-2xl mx-auto mt-5 text-gray-400 text-[18px]'>Experience matters! being 4+ years in this business I have learned to solve complex problems with ease.</p>
        </div>
      </div>


      {/* Work */}

      <div className='text-center my-20 px-6 max-w-5xl mx-auto' id="work-section">
         <h3 className='font-bold text-[26px] sm:text-[32px] max-w-lg mx-auto'>Recent Work</h3>
         <p className='text-gray-400 mt-2 max-w-lg mx-auto'>Experienced in creating custom websites using HTML & CSS and also can create websites on WordPress, Wix, SquareSpace and many more CMS & page builders.</p>

        <div className="sm:grid sm:grid-cols-2 sm:gap-5 items-center justify-center text-left mt-12">

            {
              work.map((one)=>
                  <Work
                    key={one._id}
                    image={one.image}
                    title={one.title}
                    logo={one.logo}
                    description={one.desc}
                    services={one.services}
                    link={one.link}
              />
              )
            }
       </div>
      </div>

      {/* Work End */}


      {/* Services */}
      <div className='text-center my-16 sm:my-32 px-6 max-w-5xl mx-auto'>
         <h3 className='font-bold text-[26px] sm:text-[32px] max-w-lg mx-auto'>Things I can help you with</h3>
         <p className='text-gray-400 mt-2 max-w-lg mx-auto'>Beign a computer enthusiast since childhood, learned many skills that are beneficial for me and my clients.</p>

              
        <div className="relative ">

          <div className='sm:hidden bg-gradient-to-l from-[#071026] absolute bottom-[0] right-[-4px] h-full w-2/12 flex items-end justify-end' />
  

            <div className="flex text-left mt-12 child:p-5 overflow-hidden overflow-x-scroll child:min-w-[280px] sm:child:w-4/12 space-x-6 scrollbar-hide child:max-w-[80%]">
              <div className='bg-[#182033]'>
                <h1 className='font-bold text-5xl'>01</h1>
                <p className='font-bold text-[24px]  mt-3'>UX/UI</p>
                <p className='text-gray-400 mt-4'>User-experience and User Interface, I can help in creating an app/website that converts.</p>
              </div>
              <div className=''>
                <h1 className='font-bold text-5xl'>02</h1>
                <p className='font-bold text-[24px]  mt-3'>Website Design</p>
                <p className='text-gray-400 mt-4'>Basic static responsive websites with awesome designs, beautifully crafted just for you.</p>
              </div>
              <div className=''>
                <h1 className='font-bold text-5xl'>03</h1>
                <p className='font-bold text-[24px] mt-3'>Website Development</p>
                <p className='text-gray-400 mt-4'>Not only static, I can help you with dynamic website from e-commerce to complex portals - I’ve got it covered.</p>
              </div>
            </div>

            <div className='mt-8 hover:scale-105 transition-all inline-block'>
              <a href="mailto:omarthisside@gmail.com" className='max-w-[260px] z-10 mx-auto sm:mx-0  bg-white px-6 py-3 font-bold text-[#071026] '>LET&apos;S TALK  <ArrowRightIcon className="ml-1 inline-block h-4 w-4"/></a>
            </div>
           

        </div>
       

      </div>

      {/* Services End*/}



     

      {/* Endorsements */}
      <Endorsements/>



            {/* backto top */}
            <div className='max-w-[200px] mx-auto text-center mb-8 animate-pulse'>
              <a href="#navigation"  className=''>
              <ArrowUpIcon className="ml-1 inline-block h-6 w-6"/>
              <p className='text-sm'>Back to top</p>
              </a>
            </div>
          



    </div>
  )
}

export default HomeComponent