import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

// Images
import Logo from '../assets/images/logo-white-simple.png'

function Navbar({setShowAbout}) {

  return (
    <div id="navigation">
        <nav className='flex flex-col pt-6 pb-2 px-4 items-center  first-letter: sm:flex-row w-full justify-between max-w-[1280px] mx-auto '>

            <div className='w-[120px]'>
                <Image 
                    src={Logo}
                    className="object-contain"
                    alt="Omar This Side Logo"
                />
            </div>

            <ul className='flex items-center space-x-8 sm:space-x-10 text-[16px]  sm:text-lg font-bold mt-5 sm:mt-0 cursor-pointer sm:font-medium select-none'>
                <a 
                    onClick={() => {
                        setShowAbout(true)
                    }}
                    className="select-none"
                    rel="noreferrer"
                >
                     <li className='hover:scale-105 transition-all my-story-trigger'>About</li>
                </a>
                
                <a href="#work-section" rel="noreferrer">
                  <li className='hover:scale-105 transition-all select-none'>Portfolio</li>
                  
                </a>
                <a href="mailto:omarthisside@gmail.com" rel="noreferrer"> 
                   <li className='hover:scale-105 transition-all select-none'>Contact</li>
                </a>

            </ul>
  
        </nav>
    </div>
  )
}

export default Navbar