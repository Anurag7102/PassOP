import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const[form,setform] = useState({site:"", username: "", password: ""})
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() =>{
      let passwords= localStorage.getItem("passwords")
      if(passwords){
        setpasswordArray(JSON.parse(passwords))
      }
    }, [])

    const copyText = (text)=>{
      toast('Copied to clipboard', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigator.clipboard.writeText(text)
    }

    const showPassword = () =>{
        if(ref.current.src.includes("icons/eye.png")){
            ref.current.src = "icons/hidden.png"
            passwordRef.current.type="password"
          }
          else{
            ref.current.src = "icons/eye.png"
            passwordRef.current.type="text"
        }
    }

    const savePassword = () =>{
      setpasswordArray([...passwordArray,form])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray,form]))
    }

    const handleChange = (e) =>{
      setform({...form, [e.target.name]: e.target.value})
    }

  return (
    <>
<ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="myContainer pb-0">
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
            value={form.site}
            onChange={handleChange}
            className="rounded-full border-green-500 border w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />

          <div className="flex w-full justify-between gap-8">
            <input
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              className="rounded-full border-green-500 border w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
              ref={passwordRef}
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="rounded-full border-green-500 border w-full p-4 py-1"
                type="text"
                name="password"
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
          <button className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 gap-2 w-fit border border-green-900" onClick={savePassword}>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="passwords ">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length===0 && <div>no passwords to show</div>}
          {passwordArray.length!=0 && <table className="table-auto w-full rounded-md">
  <thead className="bg-green-800 text-white">
    <tr>
      <th className="py-2">Site</th>
      <th className="py-2">Username</th>
      <th className="py-2">Password</th>
      <th className="py-2">Actions</th>
    </tr>
  </thead>
  <tbody className="bg-green-100">
    {passwordArray.map((item, index) => {
      return <tr key={index}>
        
      <td className="py-2 text-center "><a href={item.site} target="_blank">{item.site}</a><img onClick={()=>{copyText(item.site)}} className="w-7 pl-3 align-middle inline-block cursor-pointer" src="icons/copy.png" alt="" /></td>
        
      <td className="py-2 text-center "><span>{item.username}</span><img onClick={()=>{copyText(item.username)}} className="w-7 pl-3 align-middle inline-block cursor-pointer" src="icons/copy.png" alt="" /></td>

        
      <td className="py-2 text-center "><span>{item.password}</span><img onClick={()=>{copyText(item.password)}} className="w-7 pl-3 align-middle inline-block cursor-pointer" src="icons/copy.png" alt="" /></td>

      <td className="flex justify-around"><img className="w-6 cursor-pointer" src="/icons/edit.gif" alt=""/> <img className="w-5 cursor-pointer" src="icons/delete.gif" alt="" /></td>
        
    </tr>
    })}
    
  </tbody>
</table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
