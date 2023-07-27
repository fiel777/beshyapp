import React, { useEffect, useState } from "react";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

const successNotify = () =>
  toast.success("Copy to clipboard success.", {
    id: "clipboard",
    position: "bottom-center",
  });

const errorNotify = () =>
  toast.error("There is no text to copy.", {
    id: "clipboard",
    position: "bottom-center",
  });

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

  const copytoClipboard = () => {
    const message = document.createElement("textarea");
    message.value = output;
    document.body.appendChild(message);

    if (output <= 0) {
      errorNotify();
    } else {
      message.select();
      document.execCommand("copy");
      document.body.removeChild(message);
      setOutput("");
      successNotify();
    }
  };

  const submitMessage = () => {
    setMessage("");

    const trimText = message.trim();
    const newText = trimText.replace(/^\s+|\s+$/gm, " ");
    const renew = newText.replace(/\s+/g, " 🤸🏻 ");

    setOutput(renew);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {isloading ? (
        <p className="py-0 text-center h-full flex justify-center items-center">
          Loading...
        </p>
      ) : (
        <div className=" max-w-screen-2xl w-10/12 m-auto  py-8 dark:text-white md:py-32 h-screen font-mainfont ">
          <div className=" flex flex-col md:flex-row dark:bg-slate-900  rounded-sm py-4  ">
            <div className="flex-1 ">
              <img
                src="https://picsum.photos/1920/1080.webp"
                alt="image"
                loading="lazy"
                className="h-[10rem]w-full max-w-full md:h-full rounded-sm"
              ></img>
            </div>
            <div className="flex-1 p-4  bg-gray-100 dark:bg-slate-800  shadow-sm ">
              <h1 className="py-4 text-xl font-medium text-center tracking-tighter  text-gray-900 dark:text-white  ">
                Beshy Application 🤸🏻
              </h1>
              <div className="py-4 ">
                <textarea
                  rows={4}
                  spellCheck="false"
                  value={message}
                  onChange={handleText}
                  className="w-full p-2.5 text-sm text-gray-800 bg-white/75 border-2 rounded-sm focus:border-emerald-700 dark:border-slate-800 dark:focus:border-emerald-500 focus:outline-none  dark:text-white dark:bg-gray-700  "
                  placeholder="Write your thoughts here ..."
                ></textarea>
                <div className="text-center">
                  <button
                    className="bg-emerald-700 text-white p-2 my-4 text-sm rounded-sm hover:bg-emerald-800   hover:scale-110 duration-150 ease-in-out dark:bg-emerald-400 dark:hover:bg-emerald-600  "
                    onClick={submitMessage}
                  >
                    Generate{" "}
                  </button>
                </div>
                <div className="relative py-2 ">
                  <textarea
                    rows={4}
                    spellCheck="false"
                    value={output}
                    onChange={secondHandleText}
                    className="w-full p-2.5 text-sm text-gray-800 bg-white/75 border-2 rounded-sm outline-none select-none pointer-events-none dark:bg-gray-700 dark:text-white border-none   "
                  ></textarea>
                  <div
                    className=" cursor-pointer text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-600 flex justify-end absolute  bottom-0 right-[-7.5px] hover:scale-125 duration-150 ease-in-out select-none  hover:text-emerald-800 "
                    onClick={copytoClipboard}
                  >
                    <BsFillClipboardCheckFill size={30} />
                  </div>
                  <Toaster />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Content;
