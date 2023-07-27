import React, { useEffect, useState } from "react";
import { BsFillClipboardCheckFill } from "react-icons/bs";
function Content() {
  const [isloading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");

  const handleText = (e) => {
    setMessage(e.target.value);
    if (message.length >= 5) {
      setOutput("");
    }
  };

  const secondHandleText = (e) => {
    setOutput(e.target.value);
  };

  const submitMessage = () => {
    setMessage("");

    const trimText = message.trim();
    setOutput(trimText);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className=" max-w-screen-2xl w-10/12 m-auto  py-8 dark:text-white md:py-32 h-screen font-mainfont ">
      {isloading ? (
        <p className="text-center h-full flex justify-center items-center">
          Loading...
        </p>
      ) : (
        <div className=" flex flex-col md:flex-row dark:bg-slate-900  rounded-sm py-4  ">
          <div className="flex-1 ">
            <img
              src="https://picsum.photos/1920/1080.webp"
              alt="image"
              loading="lazy"
              className="h-[10rem]w-full max-w-full md:h-full rounded-sm"
            ></img>
          </div>
          <div className="flex-1 p-4  bg-gray-100 shadow-sm ">
            <h1 className="py-4 text-xl font-medium text-center tracking-tighter  text-gray-800  ">
              Beshy Application 🤸🏻
            </h1>
            <div className="py-4 ">
              <textarea
                rows={4}
                spellCheck="false"
                value={message}
                onChange={handleText}
                className="w-full p-2.5 text-sm text-gray-800 bg-white/75 border rounded-sm focus:outline-2 outline-emerald-700"
                placeholder="Write your thoughts here ..."
              ></textarea>
              <div className="text-center">
                <button
                  className="bg-emerald-700 text-white p-2 my-4 text-sm rounded-sm hover:bg-emerald-800   hover:scale-110 duration-150 ease-in-out"
                  onClick={submitMessage}
                >
                  Generate{" "}
                </button>
              </div>
              <div className="relative py-2 ">
                <textarea
                  rows={4}
                  value={output}
                  onChange={secondHandleText}
                  className="w-full p-2.5 text-sm text-gray-800 bg-white/75 border rounded-sm outline-none select-none pointer-events-none  "
                ></textarea>
                <div className=" cursor-pointer text-emerald-700 flex justify-end absolute  bottom-0 right-[-7.5px]  ">
                  <BsFillClipboardCheckFill
                    size={30}
                    className="hover:scale-125 duration-150 ease-in-out  hover:text-emerald-800   "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
