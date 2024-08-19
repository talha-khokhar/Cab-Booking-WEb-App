import React, { useEffect, useState } from 'react';
import { BiSolidMoon } from "react-icons/bi";
import { BiSolidSun } from "react-icons/bi";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" && localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = typeof document !== "undefined" ? document.documentElement : null;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
            element.classList.add("light");
        }
    }, [theme, element]);

    return (
        <>
            {
                theme === "dark" ?
                    (<BiSolidSun onClick={() => setTheme("light")} className='text-2xl' />) :
                    (<BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl' />)
            }
        </>
    )
}

export default DarkMode;
