import React from 'react'
import Navbar from '../components/Navbar'
import LoginPage from '../components/LoginPage'

const LoginPagesPage = () => {
  return (
    <>
      <Navbar className="" />
      <div className="bg-[#5c6065] mt-[13.3rem] h-[100vh] w-full overflow-auto flex-2">
        <LoginPage />
      </div>
    </>
  )
}

export default LoginPagesPage