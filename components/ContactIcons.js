import React from 'react'

// Icons
import instaIcon from '../assets/images/icons/instagram.svg'
import mailIcon from '../assets/images/icons/mail.svg'
import twitterIcon from '../assets/images/icons/twitter.svg'
import linkedInIcon from '../assets/images/icons/linkedin.svg'
import Image from 'next/image'


function ContactIcons() {

  
  return (
    <div>
         <div className="flex items-center justify-center mt-4 text-xs text-center space-x-10 ">
            <a href="https://instagram.com/omarthisside" rel="noreferrer" target="_blank" className='hover:scale-105 transition-all'>
              <div className=' flex flex-col items-center justify-center space-y-1'>
                <div className='w-[40px] h-[40px]'>
                <Image
                    src={instaIcon}
                    layout="responsive"
                    alt="Instagram Logo"
                  />
                </div>
                  
                  {/* <p>Instagram</p> */}
              </div>
              </a>
              <a href="mailto:omarthisside@gmail.com" rel="noreferrer" target="_blank" className='hover:scale-105 transition-all'>
              <div className=' flex flex-col items-center justify-center space-y-1'>
                <div className='w-[40px] h-[40px]'>
                <Image
                    src={mailIcon}
                    layout="responsive"
                    alt="Email Icon"
                  />
                </div>
                  
                  {/* <p>Instagram</p> */}
              </div>
              </a>
              <a href="https://twitter.com/omarthisside" rel="noreferrer" target="_blank" className='hover:scale-105 transition-all'>
              <div className=' flex flex-col items-center justify-center space-y-1'>
                <div className='w-[40px] h-[40px]'>
                <Image
                    src={twitterIcon}
                    layout="responsive"
                    alt="Twitter Icon"
                  />
                </div>
                  
                  {/* <p>Instagram</p> */}
              </div>
              </a>
              <a href="https://www.linkedin.com/in/omarthisside/" rel="noreferrer" target="_blank" className='hover:scale-105 transition-all'>
              <div className=' flex flex-col items-center justify-center space-y-1'>
                <div className='w-[40px] h-[40px]'>
                <Image
                    src={linkedInIcon}
                    layout="responsive"
                    alt="LinkedIn Icon"
                  />
                </div>
                  
                  {/* <p>Instagram</p> */}
              </div>
              </a>
            </div>
    </div>
  )
}




export default ContactIcons


