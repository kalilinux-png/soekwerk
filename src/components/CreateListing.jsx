import React, { useState } from 'react'
import AgentDetails from './AgentDetails'
import { PiUploadBold } from "react-icons/pi";


const CreateListing = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className="w-full max-w-[1150px] mx-auto px-8">
      <AgentDetails />

      <div className="users flex flex-col py-8">
        <h1 className='uppercase text-[1.6rem] font-bold underline my-8'>Create Listing</h1>

        <div className="grid grid-cols-4 gap-3">
          <div className='flex flex-col'>
            <label className='uppercase text-[1rem] font-semibold '>Vacancy Name</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1rem] font-semibold '>Company Name</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1rem] font-semibold '>Expiry Date</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="date" name="" id="" />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1rem] font-semibold '>Field</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1rem] font-semibold '>Country</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1rem] font-semibold '>Region</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1rem] font-semibold '>City</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>
          <div className='flex flex-col justify-between'>
            <label className='uppercase text-[1rem] font-semibold '>Upload File</label>
            <form class="max-w-sm relative">
              <label htmlFor="file-input" className="w-full inline-flex items-center px-4 py-2 bg-[#fff] border border-gray-200 shadow-sm rounded-lg text-sm cursor-pointer hover:bg-gray-300 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:border-blue-500 focus-within:ring-1 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <PiUploadBold className="h-6 w-6 mr-2" />
              </label>
              <input type="file" name="file-input" id="file-input" className="hidden" onChange={handleFileChange} />
              {fileName && <span className='absolute top-2.5 lg:left-[30%] lg:text-[0.7rem]'>{fileName}</span>}
            </form>

          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1rem] font-semibold '>Web Link</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className='flex flex-col justify-end'>
            <button className='py-1.5 px-14 mt-2 rounded-md text-[1.2rem] text-[#fff]  font-bold bg-[#9ad19f]'>Create</button>
          </div>
        </div>
      </div>

      <div className="user-details ">
        <div className="search flex items-center justify-between gap-3 border-b-2 border-[#000] py-8">
          <div className="w-full max-w-[20rem] field flex flex-col">
            <label className='text-[0.9rem] font-bold' htmlFor="">Search Criteria</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>

          <div className="w-full max-w-[20rem] field flex flex-col">
            <label className='text-[0.9rem] font-bold' htmlFor="">Search Reference</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="search" placeholder='Type Reference' name="" id="" />
          </div>

          <button className='py-1.5 px-2 w-full max-w-[200px] mt-2 rounded-md text-[1.1rem] text-[#fff] mb-[-1.15rem] font-semibold bg-[#1ea52b]'>Search</button>

          <button className='py-1.5 px-2 w-full max-w-[200px] mt-2 rounded-md text-[1.1rem] text-[#fff] mb-[-1.15rem] font-semibold bg-[#917dcd]'>Download Excel</button>
        </div>

        <div className='h-[62vh] overflow-auto'>
          <table className='w-full my-8'>
            <thead className='border-b-2 border-[#000]'>
              <tr>
                <th className='text-nowrap py-4 px-7 uppercase'>sub. Date</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Vacancy </th>
                <th className='text-nowrap py-4 px-7 uppercase'>Company</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Country</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Region</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Reference</th>
                <th className='text-nowrap py-4 px-7 uppercase'>exp date</th>
                <th className='text-nowrap py-4 px-7 uppercase'>history</th>
              </tr>
            </thead>

            <tbody>
              <tr className='text-center'>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>02-FEB-24</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>86021566968</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>ENABLED</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>7300</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>KHOMAS</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>SW002/JA12</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>02-FEB -22</td>
                <td className='py-4 text-nowrap px-2 uppercase'>
                  <button className='w-full max-w-[150px] text-[#fff] text-[0.8rem] font-semibold rounded-md py-1 uppercase bg-[#1ea52B]'>Link</button>
                </td>
              </tr>
              <tr className='text-center'>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>02-FEB-24</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>86021566968</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>ENABLED</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>7300</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>KHOMAS</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>SW002/JA12</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>02-FEB -22</td>
                <td className='py-4 text-nowrap px-2 uppercase'>
                  <button className='w-full max-w-[150px] text-[#fff] text-[0.8rem] font-semibold rounded-md py-1 uppercase bg-[#1ea52B]'>Link</button>
                </td>
              </tr>
              <tr className='text-center'>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>02-FEB-24</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>86021566968</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>ENABLED</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>7300</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>KHOMAS</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>SW002/JA12</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>02-FEB -22</td>
                <td className='py-4 text-nowrap px-2 uppercase'>
                  <button className='w-full max-w-[150px] text-[#fff] text-[0.8rem] font-semibold rounded-md py-1 uppercase bg-[#1ea52B]'>Link</button>
                </td>
              </tr>
              <tr className='text-center'>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>02-FEB-24</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>86021566968</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>ENABLED</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>7300</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>KHOMAS</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>SW002/JA12</td>
                <td className='py-4 font-medium text-nowrap px-7 uppercase'>02-FEB -22</td>
                <td className='py-4 text-nowrap px-2 uppercase'>
                  <button className='w-full max-w-[150px] text-[#fff] text-[0.8rem] font-semibold rounded-md py-1 uppercase bg-[#1ea52B]'>Link</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CreateListing