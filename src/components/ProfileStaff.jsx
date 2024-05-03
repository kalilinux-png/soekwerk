import React from 'react'
import AgentDetails from './AgentDetails'

const ProfileStaff = () => {
  return (
    <div className="w-full max-w-[1150px] mx-auto px-8">
      <AgentDetails/>

      <div>
        <h1 className="text-[#392e2d] text-[clamp(1.8rem,4vw,5rem)] text-left uppercase font-extrabold py-5 border-b-2 border-[#000]">
          profile settings
        </h1>

        <div className="profile-detail flex flex-col gap-4 max-w-[100%] md:max-w-[80%] lg:max-w-[70%] py-6 border-b-2 border-[#000]">
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] uppercase font-bold">Name</span>
            <span className="w-[50%]">LLEWELLYN</span>
          </div>
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] uppercase font-bold">SURNAME</span>
            <span className="w-[50%]">MOTINGA</span>
          </div>
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] uppercase font-bold">EMAIL ADDRESS</span>
            <span className="w-[50%]">abcdxyz@xyz.com</span>
          </div>
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] uppercase font-bold">MOBILE NUMBER</span>
            <span className="w-[50%]">+264 81 808 3704</span>
          </div>
        </div>
      </div>

      <div className="change-password flex items-center gap-8 py-6">
        <form action="submit" className="flex flex-col gap-4 w-full max-w-[100%] md:max-w-[65%] xl:max-w-[25%]">
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="text" placeholder="Old Password" />
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="password" placeholder="New Password" />

          <button className="bg-[#37266b] shadow-[0px_0px_20px_5px_#baa6e7] py-3 mt-3 rounded-md text-[#fff] uppercase font-semibold">Change Password</button>
        </form>
      </div>
    </div>
  )
}

export default ProfileStaff