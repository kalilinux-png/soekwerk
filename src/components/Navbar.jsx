import React from 'react'
import navBar from '../assets/images/soekwerk_nav.jpeg'

const Navbar = () => {
  return (
    <>
      <div className='fixed top-0 w-full z-[99999]'>
        <img className='w-full h-[150px]' src={navBar} alt="" />
      </div>
    </>
  )
}

export default Navbar