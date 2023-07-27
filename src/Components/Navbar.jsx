import React, { useEffect, useRef, useState } from "react";
import { HiMiniBars4 } from "react-icons/hi2";
import { MdLightMode } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  const [bar, setbar] = useState(false);
  const closeRef = useRef();
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  const toggletheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  window.addEventListener("click", (e) => {
    e.target === closeRef.current ? setbar() : "";
  });

  useEffect(() => {
    bar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [bar]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <>
      <div className="py-6 shadow-sm sticky top-0 font-mainfont bg-white dark:bg-slate-800 dark:shadow-lg z-50  ">
        <div className="flex justify-between px-4">
          <button
            className="cursor-pointer dark:text-white"
            onClick={() => setbar(!bar)}
          >
            {" "}
            {bar ? (
              <VscChromeClose size={25} />
            ) : (
              <HiMiniBars4 size={25} />
            )}{" "}
          </button>
          <button className="cursor-pointer " onClick={toggletheme}>
            {" "}
            {theme === "dark" ? (
              <MdDarkMode size={25} style={{ color: "#ffffff" }} />
            ) : (
              <MdLightMode size={25} style={{ color: "#eab308" }} />
            )}
          </button>
        </div>
        <div
          className={`absolute top-[4.56rem] h-full ease-in-out duration-300   ${
            bar ? "left-0  " : "left-[-150rem]"
          }`}
        >
          <div
            className={` w-screen h-screen bg-white/30 dark:bg-slate-800/60 backdrop-blur-sm relative z-30`}
            ref={closeRef}
          >
            <div className=" shadow-md  bg-white w-9/12 max-w-sm h-screen dark:bg-slate-900  flex items-center justify-center relative -z-2 ">
              <span className="dark:text-white ">beshy fiel</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
