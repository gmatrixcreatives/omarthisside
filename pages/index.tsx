/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
const Home: NextPage = () => {
  const [openTab, setOpenTab] = useState(1);
  const [showDrop, setShowDrop] = useState(false);

  return (
    <>
      <section className='pt-[0] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[100px] lg:pb-[100px]'>
        <div className='innerDiv max-auto 2xl:px-0 xl:px-[80px] lg:px-[80px] md:px-[60px] xs:px-[0]'>
          <div className='flex md:-mx-3 flex-wrap'>
            <div className='md:px-3 lg:w-1/2 md:w-1/2 w-full md:order-1 order-2  md:mt-0 mt-4 sm:mx-0 mx-[5px]'>
              <ul className='flex mb-0 list-none flex-wrap flex-row' role='tablist'>
                <li className='-mb-px mr-2 last:mr-0 text-center'>
                  <a
                    className={openTab === 1 ? "text-sm  px-5 py-3 inline-block leading-normal text-primary border rounded border-b-0 mb-[-1px] font-[600]" : "text-sm font-[600] px-5 py-3 inline-block leading-normal"}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle='tab'
                    href='#link1'
                    role='tablist'>
                    Audio
                  </a>
                </li>
                <li className='-mb-px mr-2 last:mr-0 text-center'>
                  <a
                    className={openTab === 2 ? "text-sm  px-5 py-3 inline-block leading-normal text-primary border rounded border-b-0 mb-[-1px] font-[600]" : "text-sm font-[600] px-5 py-3 inline-block leading-normal"}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle='tab'
                    href='#link2'
                    role='tablist'>
                    Subtitles
                  </a>
                </li>
              </ul>
              <div className='px-4 py-5 flex-auto border rounded lg:min-h-[320px]'>
                <div className='tab-content tab-space'>
                  <div className={openTab === 1 ? "block" : "hidden"} id='link1'>
                    <div className='flex items-center sm:justify-start justify-between mb-6'>
                      <h3 className='sm:text-[20px] text-base font-[600]'>Audio Languages</h3>
                      <div className='relative'>
                        <a
                          onClick={() => {
                            setShowDrop(!showDrop);
                          }}
                          className='bg-primary text-black py-2 px-4 rounded-[8px] font-[600] text-xs ml-2 cursor-pointer inline-block'>
                          <i className='fas fa-plus text-black'></i> Add New
                        </a>
                        <ul className={showDrop ? "absolute bg-white rounded-[6px] dropdown-menu border border-[#DEDEDE] top-[100%] sm:min-w-[160px] min-w-[120px] mt-2 sm:right-auto right-0" : "hidden"}>
                          <li>
                            <a className='text-[#848484] p-3 block text-sm border-b border-b-[#dedede]'>English</a>
                          </li>
                          <li>
                            <a className='text-[#848484] p-3 block text-sm border-b border-b-[#dedede]'>Hindi</a>
                          </li>
                          <li>
                            <a className='text-[#848484] p-3 block text-sm border-b border-b-[#dedede]'>Marathi</a>
                          </li>
                          <li>
                            <a className='text-[#000000] p-3 block text-sm border-b border-b-[#dedede]'>Hinglish</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='py-6'>
                      <div className='bg-[#F0F0F0] rounded-[6px] py-2 sm:px-4 px-3 flex justify-between mb-4'>
                        <h4 className='font-[500] text-black sm:text-base text-sm'>English</h4>
                        <h4 className='font-[300] text-black text-sm italic'>Default</h4>
                      </div>
                      <div className='bg-[#FFF5D6] rounded-[6px] py-2 sm:px-4 px-3 mb-4 border border-[#DEDEDE]'>
                        <div className='flex justify-between items-center'>
                          <h4 className='font-[500] text-black sm:text-base text-sm'>Hindi</h4>
                          <div>
                            <span className='italic sm:text-sm text-[10px] font-[300]'>hindiaudio.mp3</span>
                            <a className='py-1 inline-block sm:px-4 px-2 text-white bg-[#404040] rounded-[6px] mx-2 sm:text-base text-xs'>Choose file</a>
                            <i className='fas fa-times'></i>
                          </div>
                        </div>
                      </div>
					  <div className='bg-[#FFF5D6] rounded-[6px] py-2 sm:px-4 px-3 mb-4 border border-[#DEDEDE]'>
                        <div className='flex justify-between items-center'>
                          <h4 className='font-[500] text-black'>Hindi</h4>
                          <div>
                            <span className='italic sm:text-sm text-[10px] font-[300]'>hindiaudio.mp3</span>
                            <a className='py-1 inline-block sm:px-4 px-2 text-white bg-[#404040] rounded-[6px] mx-2 sm:text-base text-xs'>Choose file</a>
                            <i className='fas fa-times'></i>
                          </div>
                        </div>
						<div className="mt-3">
							<div class="bg-primary py-[1px] text-center text-[10px] rounded-[4px] font-[600]">100%</div>
						</div>
                      </div>
                    </div>
                    <div className='text-center py-6 hidden'>
                      <a className='w-[120px] h-[120px] border border-dashed rounded-[10px] flex items-center justify-center mx-auto'>
                        <i className='fas fa-plus text-black'></i>
                      </a>
                      <p className='mt-2'>Add a new audio language</p>
                    </div>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id='link2'>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className='md:px-3 lg:w-1/2 md:w-1/2 w-full md:order-2 order-1'>
			<iframe frameborder="0" allowfullscreen="1" className="lg:rounded-[10px]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Polynomials intro (Hindi)" width="100%" height="400px" src="https://www.youtube.com/embed/CzI4pIx3wuQ?autoplay=0&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcourse.gurucool.xyz&amp;widgetid=1" id="widget2"></iframe>
			</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
