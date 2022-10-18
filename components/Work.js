import Image from 'next/image'
import React from 'react'

import IssImage from '../assets/images/work/iss.png'


function Work({key,title, image, description, services, logo, link}) {

  return (


    <div className='mt-5 sm:mt-0 w-full group sm:hover:scale-105 transition-all duration-500' key={key}>
          <a href={link} target="_black"  rel="noreferrer">
          <div className='relative'>
            
            <div className='bg-gradient-to-b from-[#000000a5] absolute top-0 left-0 h-[20%] w-[100%] z-30' />
            <div className='bg-gradient-to-t from-[#000000d9] absolute bottom-[6px] left-0 h-[50%] w-full z-30' />

            <div className='h-full w-full relative'>
              
              <Image
                  src={image}
                  className="object-cover z-20"
                  width={1000}
                  height={1000}
                  alt={image}
                />

                <div className='  bg-gray-800 animate-pulse absolute  top-0 right-0 left-0 z-10 bottom-[7px]'></div>
            
            </div>
            
              <div className='absolute bottom-8 left-4 z-40'>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-gray-300 text-sm'>{description}</p>
                <ul className='sm:opacity-0 sm:h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all child:inline-block space-x-5 text-xs mt-4 child:border-[1px] text-gray-300 child:border-[#828282] child:p-1 child:px-2 child:rounded-xl'>
                  {
                    services.map((service)=>   <li key={key} className='tracking-wide'>{service}</li>)
                  }
                </ul>
              </div>
          </div>
          </a>
    </div>
 
  )
}

export default Work
