import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ProfileSetting from '../components/ProfileSetting'

const ProfileSettingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="h-auto md:h-[100vh] border-r border-[#ccc] px-0">
          <Sidebar />
        </div>

        <div className="h-[100vh] w-full overflow-auto flex-2 px-0 md:px-2 pt-3">
          <ProfileSetting />
        </div>
      </div>
    </>
  )
}

export default ProfileSettingPage