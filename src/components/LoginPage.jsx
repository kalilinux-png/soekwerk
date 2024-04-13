import React from 'react'
import loginImg from "../assets/images/soekwerk.jpeg"
import "./LoginPage.css"

const LoginPage = () => {
  return (
    <>
      <div className="py-[4rem] px-10">
        <div className="w-full max-w-[1120px] mx-auto  bg-[#fff] flex items-center rounded-[1.9rem]">
          <div className="w-full login bg-[#c7bdb1] px-[5rem] py-[2.5rem] rounded-tl-[1.9rem] rounded-bl-[1.9rem]">
            <div className="form-heading text-left">
              <h1 className="font-bold text-[1.5rem]">Login</h1>
              <span className="text-[0.9rem]">Login and create listing</span>
            </div>

            <form action="submit" className="max-w-[350px] flex flex-col gap-8 mt-8">
              <input
                type="text"
                className="border placeholder:text-[#000] placeholder:text-[0.9rem] px-5 py-2.5 rounded-md"
                placeholder="Mobile"
              />
              <input
                type="text"
                className="border placeholder:text-[#000] placeholder:text-[0.9rem] px-5 py-2.5 rounded-md"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="border placeholder:text-[#000] placeholder:text-[0.9rem] px-5 py-2.5 rounded-md"
                placeholder="Staff Code"
              />

              <button className="uppercase font-bold bg-[#fbbc41] rounded-md text-[1.25rem] py-2 shadow-[0px_0px_10px_4px_#78b172]">Login</button>
            </form>

            <p className="Capitalize my-4 text-left">Forget Password- ? <span className="font-bold">Click here</span></p>
          </div>

          <div className="image  px-9">
            <img className="w-[clamp(600px,2vw,800px)] " src={loginImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage