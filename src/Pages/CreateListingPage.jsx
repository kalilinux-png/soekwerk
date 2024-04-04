import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CreateListing from '../components/CreateListing'

const CreateListingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-[9.4rem]">
        <div className="h-auto md:h-[100vh] border-r border-[#ccc] px-0">
          <Sidebar />
        </div>

        <div className="bg-[#f0f0f4] h-[100vh] w-full overflow-auto flex-2 px-0 md:px-2 pt-3">
          <CreateListing />
        </div>
      </div>
    </>
  )
}

export default CreateListingPage