import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaAndroid } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaMousePointer } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-white text-black dark:text-white dark:bg-black">
                {/* Upper Section  Footer*/}
                <div className="bg-primary">
                    <div className="container text-center text-black py-10 lg:py-14 text-lg font-bold space-y-4">
                        <p className='uppercase text-lg md:text-2xl'>We are ready to take your call 24 hours, 7 Days!</p>
                        <h1 className='text-3xl md:text-5xl font-bold'>+92 308 3041817</h1>
                    </div>
                </div>
                {/* Bootom section footer  */}
                <div className="container grid grid-cols-1 lg:grid-cols-3 gap-10  lg:gap-20 py-10">
                    {/* First Column  */}
                    <div className="space-y-4 lg:space-y-6 p-2">
                        <h1 className='md:text-lg lg:text-2xl font-bold uppercase py-3 border-b-2 md:border-b-4 lg:border-b-8 border-primary'>About Cab Hub</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto incidunt tempora autem veniam praesentium, deserunt sint quis eos vero provident adipisicing sit incidunt tempora.</p>
                        {/* Social Icon  */}
                        <div className="flex items-center text-primary gap-3 text-2xl">
                            <FaFacebook />
                            <FaInstagram />
                            <FaGoogle />
                            <FaTwitter />
                        </div>
                    </div>
                    {/* Second Column  */}
                    <div className="space-y-4 lg:space-y-6 p-2">
                        <h1 className='md:text-lg lg:text-2xl font-bold uppercase py-3 border-b-2 md:border-b-4 lg:border-b-8 border-primary'>Download</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto incidunt tempora autem veniam praesentium.</p>
                        <h1 className='text-primary text-lg md:text-xl font-semibold flex items-center gap-4'>Android User{" "} <span className='text-2xl text-black dark:text-white'> <FaAndroid /> </span> </h1>
                        <h1 className='text-primary text-lg md:text-xl font-semibold flex items-center gap-4'>IOS User{" "} <span className='text-2xl text-black dark:text-white'> <FaAppStoreIos /> </span> </h1>
                    </div>
                    {/* Third Column  */}
                    <div className="space-y-4 lg:space-y-6 p-2">
                        <h1 className='text-lg lg:text-2xl font-bold uppercase py-3 border-b-2 md:border-b-4 lg:border-b-8 border-primary'>Contact</h1>
                        {/* <h1 className='text-lg lg:text-2xl font-bold uppercase py-3 relative inline-block'>
                            Contact
                            <span className="block w-full h-[2px] bg-primary mt-2 md:h-[4px] lg:h-[8px]"></span>
                        </h1> */}
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt size={24} /> Karachi, Sindh, Pakistan
                        </div>
                        <div className="flex items-center gap-4">
                            <IoMdCall size={24} /> +92 308 3041817
                        </div>
                        <div className="flex items-center gap-4">
                            <MdEmail size={24} /> talhakhokhar340@gmail.com
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMousePointer size={24} /> www.cabhub.com
                        </div>
                    </div>
                </div>
                <p className='text-center py-4 text-sm'>copyright @ 2024. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer;