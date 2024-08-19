"use client"

import React, { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from '@/components/Hero/Hero';
import Contact from '@/components/Contact/Contact';
import BestCab from '@/components/BestCab/BestCab';
import About from '@/components/About/About';
import AppStore from '@/components/AppStore/AppStore';
import Testimonial from '@/components/Testimonial/Testimonial';

const Page = () => {

  useEffect( () => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
    Aos.refresh();
  },[]);

  return (
    <>
      <Hero />
      <Contact />
      <BestCab />
      <About />
      <AppStore />
      <Testimonial />
    </>
  )
}

export default Page