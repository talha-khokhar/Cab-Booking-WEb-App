// import React from 'react'
// import { FaUserCircle } from "react-icons/fa";
// import { navlink } from "./Navbar"
// import Link from 'next/link';

// const ResponsiveMenu = ( {showMenu} ) => {
//   return (
//     <>
//       <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex flex-col justify-between  px-8 pt-16 pb-6 h-screen w-[75%] bg-white text-black shadow-md dark:bg-dark dark:text-white duration-300 rounded-r-xl md:hidden `}>
//         <div className="">
//             <div className="flex items-center">
//                 <FaUserCircle className='text-5xl' />
//                 <div className="flex items-center justify-start ">
//                     <h1>Talha Khokhar</h1>
//                     <h1 className='text-sm text-slate-500'>Premium User</h1>
//                 </div>
//             </div>

//             {/* Navigation Link Section */}

//             <nav className='mt-12'>
//                 <ul>
//                     {
//                         navlink.map(({ id, name, link }) => {
//                             return (
//                                 <li key={id} className='py-4'>
//                                     <Link href={link} className='text-xl font-medium text-black dark:text-white rounded-full duration-300'> {name} </Link>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </nav>
//         </div>
//         {/* Bottom Footer Section */}
//         <div className="">
//             <h1>Made by <a href="#">Talha Khokhar</a></h1>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ResponsiveMenu;











import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { navlink } from "./Navbar";
import Link from 'next/link';

const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-full"} fixed bottom-0 top-0 z-20 flex flex-col justify-between px-8 pt-16 pb-6 h-screen w-[75%] bg-white text-black shadow-md dark:bg-dark dark:text-white duration-300 rounded-r-xl md:hidden`}>
            <div>
                <div className="flex items-center mb-8">
                    <FaUserCircle className='text-5xl' />
                    <div className="ml-4">
                        <h1>Talha Khokhar</h1>
                        <h1 className='text-sm text-slate-500'>Premium User</h1>
                    </div>
                </div>
                {/* Navigation Link Section */}
                <nav>
                    <ul>
                        {navlink.map(({ id, name, link }) => (
                            <li key={id} className='py-4'>
                                <Link href={link} className='text-xl font-medium text-black dark:text-white rounded-full duration-300'>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Bottom Footer Section */}
            <div>
                <h1>Made by <a href="#">Talha Khokhar</a></h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
