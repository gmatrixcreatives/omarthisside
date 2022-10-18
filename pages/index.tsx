import type {NextPage} from 'next';
import Head from 'next/head';

import Image from 'next/image'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'

// Components 
import HomeComponent from '../components/HomeComponent'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
	const [showAbout, setShowAbout] =  useState(false);
  useEffect(() => {
    if(showAbout){
      document.body.classList.add('overflow-y-hidden');
    }else{
      document.body.classList.remove('overflow-y-hidden');
    }
    
  }, [showAbout])
  
  return (
    <div className=''>
      <Head>
        <title>Omar - Website Designer</title>
        <meta name="description" content="Website Designer" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <About setShowAbout={setShowAbout} showAbout={showAbout}/>

      <Navbar setShowAbout={setShowAbout} />
      <HomeComponent />
      <Footer />

     
    </div>
  )
};

export default Home;
