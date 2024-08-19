import React from 'react'
import car from "../../../public/car2.png" 
import Image from 'next/image'

const ServicesData = [
    {
        id: 1,
        img: car,
        name: "Economy Class",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis temporibus laborum possimus.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: car,
        name: "Standard Class",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis temporibus laborum possimus.",
        aosDelay: "300",
    },
    {
        id: 3,
        img: car,
        name: "Bussiness Class",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis temporibus laborum possimus.",
        aosDelay: "500",
    }
]

const BestCab = () => {
  return (
    <>
        <div className="bg-white dark:bg-black text-black dark:text-white py-10">
            <div className="container">

                {/* title section */}

                <div data-aos="fade-up"  className="text-center mb-20">
                    <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>Choose Best Cabs</h1>
                </div>

                {/* Cab Card Section */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">
                    {
                        ServicesData.map( ( {id, img, name, des, aosDelay} )=>{
                            return(
                                <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className="group rounded-2xl bg-white dark:bg-black hover:bg-primary shadow-xl duration-200 max-w-[300px] relative">
                                    {/* Image Section */}
                                    <div className="h-[110px]">
                                        <Image src={img} alt="car" className='max-w-[200px] mx-auto block transform -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300' />
                                    </div>
                                    {/* content section */}
                                    <div className="p-4 text-center space-y-4">
                                        <h1 className='text-xl font-bold'>{name}</h1>
                                        <p className='text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2'>{des}</p>
                                        <p className='text-primary text-2xl font-bold group-hover:text-black'>$10/km</p>
                                        <button className='bg-black text-white px-4 py-2 rounded-lg'>Read More</button>
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>

            </div>
        </div>
    </>
  )
}

export default BestCab;