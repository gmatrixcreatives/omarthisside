import React from 'react'

import ClientOne from '../assets/images/client-logos/1.png'
import ClientTwo from '../assets/images/client-logos/2.png'
import ClientThree from '../assets/images/client-logos/3.png'
import ClientFour from '../assets/images/client-logos/4.png'
import ClientFive from '../assets/images/client-logos/5.png'
import ClientSix from '../assets/images/client-logos/6.png'
import ClientSeven from '../assets/images/client-logos/7.png'
import ClientEight from '../assets/images/client-logos/8.png'


import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

function Clients() {
  return (
    <div>
        
         {/* Clients */}
      <div className='max-w-[1280px] mx-auto px-5 text-center my-[80px]'>
        <h3 className='font-bold text-[26px] sm:text-[32px] max-w-lg mx-auto leading-10'>Delighted to work with incredible clients through out the globe.</h3>
        <p className='text-gray-400 mt-6 max-w-lg mx-auto'>Helped more than 50 clients across the globe including ISS New Delhi, Happimindset, Indicc Associates and many more..</p>



      <div className="relative ">
         <div className='bg-gradient-to-l from-[#071026] absolute top-0 right-[-3px] h-full w-2/12 z-50 sm:hidden' />
         <div className='bg-gradient-to-r from-[#071026] absolute top-0 left-[-3px] h-full w-2/12 z-50 sm:hidden'  />
        <div className='overflow-hidden overflow-x-scroll scrollbar-hide relative flex items-center '>
          <div className='flex items-center whitespace-nowrap text-xl space-x-8 sm:px-15 scrollbar-hide mt-10 sm:grid sm:grid-cols-4 sm:gap-8 sm:max-w-4xl sm:mx-auto animate-marquee  sm:animate-none child:min-w-[150px] ch px-[20px] '>

                <div className='ml-[300px] sm:ml-0'>
                  <Image
                      src={ClientOne}
                      className="object-contain"
                      alt={ClientOne}
                    />
                </div>

                <div>
                  <Image
                      src={ClientTwo}
                      className="object-contain"
                      alt={ClientTwo}
                    />
                </div>

                <div>
                  <Image
                      src={ClientThree}
                      className="object-contain"
                      alt={ClientThree}

                    />
                </div>

                <div>
                  <Image
                      src={ClientFour}
                      className="object-contain"
                      alt={ClientFour}

                    />
                </div>

                <div>
                  <Image
                      src={ClientFive}
                      className="object-contain"
                      alt={ClientFive}

                    />
                </div>

                <div>
                  <Image
                      src={ClientSix}
                      className="object-contain"
                      alt={ClientSix}

                    />
                </div>

                <div>
                  <Image
                      src={ClientSeven}
                      className="object-contain"
                      alt={ClientSeven}

                    />
                </div>

                <div>
                  <Image
                      src={ClientEight}
                      className="object-contain"
                      alt={ClientEight}

                    />
                </div>

          </div>
        </div>
      </div>

    <div className='mt-12 hover:scale-105 transition-all inline-block'>
    <a href="mailto:omarthisside@gmail.com" className='max-w-[300px] z-10 mx-auto sm:mx-0 mt-5 border-[1px] px-6 py-3 font-bold text-white l'> LET&apos;S WORK TOGETHER  <ArrowRightIcon className="ml-1 inline-block h-4 w-4"/></a>
    </div>
      

      </div>
      {/* Clients End */}

    </div>
  )
}

export default Clients
