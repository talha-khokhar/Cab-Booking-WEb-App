import React from 'react'
import bg_testimonial from '../../../public/testimonial.png'
import Slider from 'react-slick'
import Image from 'next/image'

import img1 from '../../../public/test1.jpg'
import img2 from '../../../public/test2.jpg'
import img3 from '../../../public/test3.jpg'
import img4 from '../../../public/test4.jpg'
import img5 from '../../../public/test5.jpg'

const bgStyle = {
    backgroundImage: `url(${bg_testimonial.src})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat'
}

const TestimonialData = [
    {
        id: 1,
        name: "Dilshad",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus culpa tempora suscipit eaque atque hic beatae quo rem molestiae.',
        img: img1
    },
    {
        id: 2,
        name: "Sabir Ali",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus culpa tempora suscipit eaque atque hic beatae quo rem molestiae.',
        img: img2
    },
    {
        id: 3,
        name: "Hamza",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus culpa tempora suscipit eaque atque hic beatae quo rem molestiae.',
        img: img3
    },
    {
        id: 4,
        name: "Bilal",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus culpa tempora suscipit eaque atque hic beatae quo rem molestiae.',
        img: img4
    },
    {
        id: 5,
        name: "Arshad",
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus culpa tempora suscipit eaque atque hic beatae quo rem molestiae.',
        img: img5
    }
]

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ]
    }
    return (
        <>
            <div style={bgStyle}>
                <div className="bg-white/80 py-14 dark:bg-gray-800/90 dark:text-white">
                    <div className="container">
                        {/* title section */}
                        <div data-aos="fade-up" className="text-center mb-10">
                            <h1 className='text-4xl font-bold'>Testimonials</h1>
                        </div>
                        {/* card section */}
                        <div data-aos="zoom-in">
                            <Slider {...settings}>
                                {
                                    TestimonialData.map(({ id, name, text, img }) => {
                                        return <div key={id} className="my-6">
                                            <div className="flex flex-col gap-6 py-8 px-6 mx-4 rounded-3xl shadow-lg bg-white dark:bg-dark relative">
                                                <div className="flex flex-col items-center gap-4">
                                                    <p className='text-xs'>{text}</p>
                                                </div>
                                                {/* image section */}
                                                <div className="flex items-center gap-4">
                                                        <Image src={img} width={64} height={64} alt='person_image' className='rounded-full'/>
                                                    <div className="space-y-2">
                                                        <h1 className='text-xl font-bold text-black/60 dark:text-primary font-cursive'>{name}</h1>
                                                        <p className='text-sm font-bold text-black/45 dark:text-white'>Developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;
