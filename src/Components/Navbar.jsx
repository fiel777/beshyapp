import React, { useEffect, useRef, useState } from 'react'
import { HiMiniBars4 } from "react-icons/hi2"
import { MdLightMode } from "react-icons/md"
import { VscChromeClose } from "react-icons/vsc"
import { MdDarkMode } from "react-icons/md"

function Navbar() {

    const [bar, setbar] = useState(false);
    const closeRef = useRef();
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));


    const toggletheme = () => {

        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    window.addEventListener('click', (e) => {
        if (e.target === closeRef.current) {
            setbar();
        }
    })

    useEffect(() => {
        if (bar) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }
    }, [bar])

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
        document.documentElement.setAttribute("data-theme", theme);

        if (theme === 'dark') {
            document.documentElement.classList.add("dark")

        } else[
            document.documentElement.classList.remove("dark")
        ]
    }, [theme])


    return (
        <>

            <div className='py-6 shadow-sm sticky top-0 font-mainfont dark:bg-slate-800 dark:shadow-lg '>
                <div className='flex justify-between px-4'>
                    <button className='cursor-pointer dark:text-white' onClick={() => setbar(!bar)}> {bar ? <VscChromeClose size={25} /> : <HiMiniBars4 size={25} />}  </button>
                    <button className='cursor-pointer ' onClick={toggletheme}> {theme === "dark" ? <MdDarkMode size={25} style={{ color: "#ffffff" }} /> : <MdLightMode size={25} style={{ color: "#eab308" }} />}</button>
                </div>
                <div className={`absolute top-[4.6rem] h-full ease-in-out duration-300 ${bar ? "left-0 " : "left-[-150rem]"}`}>
                    <div className={`fixed  w-screen h-screen backdrop-blur-sm  bg-white/30  dark:bg-slate-800/20 z-10 `} ref={closeRef}>
                        <div className='fixed shadow-md w-9/12 max-w-sm h-screen dark:bg-slate-900 flex items-center justify-center '>
                            <span className='dark:text-white'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar