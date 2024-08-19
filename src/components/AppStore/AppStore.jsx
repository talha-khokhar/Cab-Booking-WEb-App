import Image from 'next/image';
import React from 'react'

const AppStore = () => {
    return (
        <>
            <div className="bg-[#f5f5f5] dark:bg-black dark:text-white">
                <div className="container p-3">
                    {/* title section */}
                    <div className="text-center py-14 uppercase space-y-4">
                        <p data-aos="fade-up" className='text-primary text-2xl font-semibold'>Download</p>
                        <h1 data-aos="fade-up" data-aos-delay="300" className='text-2xl md:text-3xl font-bold'>Best Cab Service</h1>
                    </div>
                    {/* card section */}
                    <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 place-items-center">
                        <div className="space-y-8 max-w-[400px] mx-auto">
                            <h1 className='text-lg md:text-2xl font-bold'>Download the Cab voucher app free! Get Exciting New Offers</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor veritatis cupiditate consequuntur quaerat dolorum.</p>
                            
                            <div className="flex items-center justify-start flex-wrap">
                                <Image src='/app_store.png' alt='App_Store_Image' width={200} height={200} className='max-w-[150px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[200px]' />
                                <Image src='/play_store.png' alt='App_Store_Image' width={200} height={200} className='max-w-[150px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[200px]' />
                            </div>

                        </div>
                        {/* Image Section  */}
                        <div className="">
                            <Image src='/carbooking.png' alt="car_booking_image" width={400} height={400} /> {/* className= "max-w-[400px] */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppStore;