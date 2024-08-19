"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import DarkMode from './DarkMode';
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { usePathname } from 'next/navigation';

export const navlink = [
    { id: "1", name: "Home", link: "/" },
    { id: "2", name: "About", link: "/about" },
    { id: "3", name: "Feature", link: "/feature" },
    { id: "4", name: "Blog", link: "/blog" },
    { id: "5", name: "Contact", link: "/contact" }
];

export const Navbar = () => {
    const pathname = usePathname();

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className='shadow-md w-full dark:bg-black dark:text-white duration-300'>
                <div className="container py-2 md:py-0">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex text-2xl lg:text-3xl font-bold">
                            <Link href='/'> <span>Cab</span> <span className='text-primary'>Hub</span> </Link>
                        </div>
                        {/* Menu Section */}
                        <div className="hidden md:block">
                            <ul className='flex items-center gap-6'>
                                {navlink.map(({ id, name, link }) => {
                                    const isActive = pathname === link;
                                    return (
                                        <li key={id} className='py-4'>
                                            <Link href={link} className={`${isActive ? "bg-primary dark:text-black" : " " } text-md lg:text-lg font-medium text-black dark:text-white hover:bg-primary py-2 px-4 rounded-full duration-300`}>
                                                {name}
                                            </Link>
                                        </li>
                                    );
                                })}
                                {/* DarkMode Feature Implementation */}
                                <DarkMode />
                            </ul>
                        </div>
                        {/* Mobile Menu Section */}
                        <div className="md:hidden flex items-center gap-4">
                            <DarkMode />
                            {showMenu ? (
                                <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all' />
                            ) : (
                                <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all' />
                            )}
                        </div>
                    </div>
                </div>

                {/* Pass showMenu as a prop to ResponsiveMenu */}
                <ResponsiveMenu showMenu={showMenu} />
            </nav>
        </>
    );
};

export default Navbar;
