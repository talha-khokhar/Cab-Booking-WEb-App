import React from 'react'

import { SlStar } from "react-icons/sl";
import BannerCard from './BannerCard';


const bgStyle = {
  backgroundImage: `url('/girl.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '520px',
  width: '100vw',
  overflow: 'hidden' // Add this line
};


const About = () => {
  return (
    <>
        <div style={bgStyle}>
          <div className="text-white bg-black/80 min-h-[530px] flex py-10">
            <div className="container p-3">
                {/* Header title section */}
                <div className="text-center space-y-3 uppercase py-14">
                    <p className='text-primary text-2xl font-semibold'>We do best</p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='text-3xl md:text-4xl font-bold'>Than You Wish</h1>
                </div>
                {/* card section */}
                <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <BannerCard icon={ <SlStar /> } title='Fast Booking' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
                    <BannerCard icon={ <SlStar /> } title='Fast Booking' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
                    <BannerCard icon={ <SlStar /> } title='Fast Booking' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
                    <BannerCard icon={ <SlStar /> } title='Fast Booking' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' />
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About