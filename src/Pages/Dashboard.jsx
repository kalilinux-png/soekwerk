import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ProfileSetting from '../components/ProfileSetting'


const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-[9.4rem]">
        <div className="h-auto md:h-[100vh] border-r border-[#ccc] px-0">
          <Sidebar />
        </div>

        <div className="bg-[#f0f0f4]  w-full overflow-auto flex-2 px-0 md:px-2 pt-3">
          <ProfileSetting />
        </div>
      </div>
    </>
  )
}

export default Dashboard