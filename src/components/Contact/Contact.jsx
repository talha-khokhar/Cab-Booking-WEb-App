import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="bg-primary text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    {/* Left text content section  */}
                    <div className="space-y-5 p-3 md:p-5 lg:p-10 pb-6">
                        <h1 data-aos="fade-up" className='text-3xl lg:text-2xl sm:text-3xl font-bold'>Best In City</h1>
                        <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold uppercase'>Trusted Cab Service in Karachi</h1>
                        <p data-aos="fade-up" className='leading-8 tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam totam repudiandae eveniet. Animi earum vero eius molestias fuga doloribus repellendus ipsa! Itaque deleniti dolor minus?</p>
                        <button data-aos="fade-up" data-aos-offset="0" className='px-4 py-2 bg-black text-white rounded-lg'>Book Now</button>
                    </div>
                    {/* right side form section */}
                    <div data-aos="fade" className="p-3">
                        <div className="w-full md:min-w-[350px] mx-auto">
                            <h1 className='uppercase text-2xl text-white bg-black py-3 px-5'>Book a Cab</h1>
                            <div className="p-5 bg-white gap-2 grid grid-cols-1 sm:grid-cols-2">
                                <input className='inputField' type="text" name='' id='' placeholder='Name' />
                                <input className='inputField' type="text" name='' id='' placeholder='Phone' />
                                <input className='inputField' type="text" name='' id='' placeholder='Start' />
                                <input className='inputField' type="text" name='' id='' placeholder='End' />
                                <input className='inputField col-span-2' type="text" name='' id='' placeholder='Choose Vehicle' />

                                <button className='bg-black text-white px-4 py-2 w-full mt-6 col-span-2 rounded-lg'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;