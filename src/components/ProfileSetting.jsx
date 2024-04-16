import React, { useState, useEffect } from 'react'
import AgentDetails from './AgentDetails'
import { fetchStaff } from "../actions/staffActions"
import { useSelector, useDispatch } from 'react-redux';


const ProfileSetting = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStaff())
  }, [dispatch])

  const staffData = useSelector((state) => state.staff.staffList);

  console.log("Staff Data", staffData)
  const currentUser = staffData.filter((user) => {
    if(user.email === window.localStorage.email) { 
      return user
    }
  })
  const user = currentUser[0]
  return (
    <div className="w-full max-w-[1150px] mx-auto px-8">
      <AgentDetails />

      <div>
        <h1 className="text-[#392e2d] text-[clamp(2rem,5vw,5rem)] text-left uppercase font-extrabold py-5 border-b-2 border-[#000]">
          profile settings
        </h1>

        <div className="profile-detail flex flex-col gap-4 max-w-[70%] py-6 border-b-2 border-[#000]">
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">Name</span>
            <span className="w-[50%]">{user.name}</span>
          </div>
          {/* <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">SURNAME</span>
            <span className="w-[50%]">{l</span>
          </div> */}
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">EMAIL ADDRESS</span>
            <span className="w-[50%]">{user.email}</span>
          </div>
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">MOBILE NUMBER</span>
            <span className="w-[50%]">{user?.mobile || "No Mobile Number Found"}</span>
          </div>
        </div>
      </div>

      <div className="change-password flex items-center gap-8 py-6">
        <form action="submit" className="flex flex-col gap-4 w-full max-w-[40%] xl:max-w-[25%]">
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="text" placeholder="Old Password" />
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="password" placeholder="New Password" />

          <button className="bg-[#37266b] shadow-[0px_0px_20px_5px_#baa6e7] py-3 mt-3 rounded-md text-[#fff] uppercase font-semibold">Change Password</button>
        </form>

        <form action="submit" className="flex flex-col gap-4 w-full max-w-[40%] xl:max-w-[25%]">
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="text" placeholder="Name" />
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="text" placeholder="Surname" />
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="email" placeholder="Email" />
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="number" placeholder="Mobile Number" />

          <button className="bg-[#37266b] shadow-[0px_0px_20px_5px_#baa6e7] py-3 mt-3 rounded-md text-[#fff] uppercase font-semibold">Create Staff account</button>
        </form>
      </div>
    </div>
  )
}

export default ProfileSetting