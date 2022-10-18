import Image from 'next/image'
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import amjadImage from '../assets/images/esdorsements/amjad-ali-khan.png'

import {ChevronLeftIcon,ChevronRightIcon} from '@heroicons/react/24/outline'

// Json
import endorsementsData from '../pages/api/endorsements.json';
import { Navigation } from 'swiper';

function Endorsements() {
    
  return (
    <div className=''>
         {/* Endorsements */}
      <div className='text-center my-16 sm:my-32 px-6 max-w-5xl mx-auto'>
         <h3 className='font-bold text-[26px] sm:text-[32px] max-w-lg mx-auto'>Endorsements.</h3>
         <p className='text-gray-400 mt-2 max-w-lg mx-auto'>Taking complete authority of the projects from the beginning to the end make my clients stress free and confident.</p>


        <div className='relative'>

             
            <button className='swiper-button-prev text-white absolute top-[43%] left-[-30px] sm:left-[-40px]' id='prev-slider'><ChevronLeftIcon className='w-8 h-8'/></button>
            <button className='swiper-button-next text-white absolute top-[43%] right-[-30px] sm:right-[-40px]' id='next-slider'><ChevronRightIcon className='w-8 h-8'/></button>

        <div className="mt-5 flex sm:block">
           
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{ nextEl: "#next-slider", prevEl: "#prev-slider" }}
                    autoplay={{
                        delay: 2000,
                      }}
                    >

                        {
                            endorsementsData.map((endorsement)=>
                                    <SwiperSlide key={endorsement._id}>
                                                        <div className='sm:flex py-6 px-6 text-left border-[1px] border-[#182033]'>
                                                            <div className='w-[100px] sm:w-2/12 mb-6 sm:mb-0'>
                                                                <div className='w-24 h-24 rounded-full overflow-hidden text-right'>
                                                                    <Image
                                                                        src={endorsement.image}
                                                                        width={200} height={200}
                                                                        className="object-contain"
                                                                        alt={"Client Image"}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className='sm:w-10/12'>
                                                                <p className='text-base text-gray-200 text-left leading-7 '>{endorsement.text}</p>
                                                                <h1 className='font-bold mt-5'>{endorsement.name}</h1>
                                                                <p className='italic font-light text-gray-400'>{endorsement.comapny}</p>
                                                            </div>
                                                            </div>
                                    </SwiperSlide>

                            )
                        }
                    
                   
            
                    </Swiper>
                  </div>

         </div>

            
         </div>
    
    

    </div>
  )
}

export default Endorsements