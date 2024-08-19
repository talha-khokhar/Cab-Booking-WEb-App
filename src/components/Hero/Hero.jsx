import Image from 'next/image';
import React from 'react';

const bgStyle = {
    backgroundImage: 'url(/city.jpg)', // Reference directly from public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '520px',
    width: '100vw'
};

const Hero = () => {
  return (
    <>
        <div style={bgStyle}>
            <div className="dark:bg-black/60 dark:text-white bg-white/80 backdrop-blur-sm duration-300 h-[520px] flex">
                <div className="container grid place-items-center">

                    {/* Text-content-section */}

                    <div className="text-center space-y-5 py-14">
                        <p data-aos="fade-up" data-aos-delay="100" className='text-primary text-3xl uppercase font-semibold'>Book Cab Now</p>
                        <h1 data-aos="fade-up" data-aos-delay="600" className='text-4xl md:text-6xl font-bold'>+92 308 3041817</h1>
                        <p data-aos="fade-up" data-aos-delay="1000" className='text-xl'>www.talhakhokhar.com</p>
                    </div>

                    {/* Text-Section */}

                    <div data-aos="zoom-in-right" data-aos-duration="1000">
                        <Image src="/yellow-cab.png" alt='Yellow_Cab' width={400} height={400} className='max-h-[460px] sm:scale-125 translate-y-10 sm:translate-y-0'/>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
};

export default Hero;
