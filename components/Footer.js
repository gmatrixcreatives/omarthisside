import Image from 'next/image'
import React from 'react'


// Icons
import instaIcon from '../assets/images/icons/instagram.svg'
import mailIcon from '../assets/images/icons/mail.svg'
import twitterIcon from '../assets/images/icons/twitter.svg'
import linkedInIcon from '../assets/images/icons/linkedin.svg'
import ContactIcons from './ContactIcons'


function Footer() {
  return (
    <div>
      <footer className='border-t-[1px] border-gray-800 py-8'>
            {/* Contact */}
            <h1 className='font-bold text-3xl text-center text-white'>Stay in touch.</h1>
          <div className='mt-6'>
              <ContactIcons/>
          </div>
          {/* End */}

          <p className='text-center mt-10 text-gray-500 text-sm'>Crafted with Love & Coffee</p>
      </footer>
    </div>
  )
}

export default Footer