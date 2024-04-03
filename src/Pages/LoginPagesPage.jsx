import React from 'react'
import Navbar from '../components/Navbar'
import LoginPage from '../components/LoginPage'

const LoginPagesPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-[100vh] w-full overflow-auto flex-2 px-0 md:px-2 pt-3">
        <LoginPage />
      </div>
    </>
  )
}

export default LoginPagesPage