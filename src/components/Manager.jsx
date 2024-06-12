import React from "react";
import { useRef } from "react";

const Manager = () => {
    const ref = useRef()
    const showPassword = () =>{
        if(ref.current.src.includes("icons/eye.png")){
            ref.current.src = "icons/hidden.png"
        }
        else{
            ref.current.src = "icons/eye.png"
        }
    }
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="myContainer">
        <h1 className="text-4xl text-center font-bold">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>

        <p className="text-center text-green-900 text-lg">
          your own password manager
        </p>

        <div className="text-black gap-8 flex flex-col p-4 items-center">
          <input
            placeholder="Enter Website URL"
            className="rounded-full border-green-500 border w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />

          <div className="flex w-full justify-between gap-8">
            <input
              placeholder="Enter Username"
              className="rounded-full border-green-500 border w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="rounded-full border-green-500 border w-full p-4 py-1"
                type="text"
                name=""
                id=""
              />
              <span className="absolute right-[4px] top-[4px] cursor-pointer" onClick={showPassword}>
                <img
                  className="p-1"
                  ref={ref}
                  width={26}
                  src="icons/eye.png"
                  alt="show"
                />
              </span>
            </div>
          </div>
          <button className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 gap-2 w-fit border border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
