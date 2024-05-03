import React from 'react'
import Navbar from '../components/Navbar'
import LoginPage from '../components/LoginPage'

const LoginPagesPage = () => {
  return (
    <>
      <Navbar className="" />
      <div className="bg-[#5c6065]  w-full flex-2">
        <LoginPage />
      </div>
    </>
  )
}

export default LoginPagesPage