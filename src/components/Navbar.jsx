import React from 'react'
import navBar from "../assets/images/soekwerk.jpeg"


const Navbar = () => {
  return (
    <>
      <div className='fixed top-0 flex items-center justify-between bg-[#fff] w-full z-[99999] py-[2rem] pl-[1.5rem] lg:pl-[3rem] border-b border-[#000]'>
        <div className='flex items-center gap-3 lg:gap-10'>
          <img className='w-[6rem] lg:w-[9rem]' src={navBar} alt="" />

          <div className="flex flex-col">
            <span className='leading-snug tracking-wide text-[clamp(1rem,7vw,4.3rem)] text-[#000] font-extrabold'>SoekWerk.AI</span>
            <span className='leading-snug text-[clamp(1rem,7vw,1.5rem)] text-[#000] font-extrabold'>Smart Matches, Bright Futures.</span>
          </div>
        </div>

        <div className="line-design w-[47%] xl:flex lg:flex-col lg:items-end gap-5 hidden ">
          <div className='w-[100%] h-[20px] rounded-l-full bg-[#1ea52b]' />
          <div className='w-[85%] h-[20px] rounded-l-full bg-[#906f34]' />
          <div className='w-[80%] h-[20px] rounded-l-full bg-[#1c97a6]' />
          <div className='w-[92%] h-[20px] rounded-l-full bg-[#695026]' />
        </div>
      </div>
    </>
  )
}

export default Navbar