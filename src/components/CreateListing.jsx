import React from 'react'
import AgentDetails from './AgentDetails'

const CreateListing = () => {
  return (
    <div className="h-screen bg-[#f0f0f4] px-28">
      <AgentDetails />

      <div className="users flex flex-col py-8">
        <h1 className='uppercase text-[1.6rem] font-bold underline my-2'>Create Listing</h1>

        <div className="grid grid-cols-4 gap-3">
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>Vacancy Name</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>Company Name</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>Expiry Date</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="date" name="" id="" />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>Field</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>Country</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>Region</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>City</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>Upload File</label>
            <form class="max-w-sm">
              <label for="file-input" class="sr-only">Choose file</label>
              <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"/>
            </form>

          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-[1.1rem] font-semibold '>Web Link</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="text" name="" id="" />
          </div>
          <div className='flex flex-col justify-end'>
            <button className='py-1.5 px-14 mt-2 rounded-md text-[1.2rem] text-[#fff]  font-bold bg-[#9ad19f]'>Create</button>
          </div>
        </div>
      </div>

      <div className="user-details ">
        <div className="search flex items-center justify-between border-b-2 border-[#000] py-8">
          <div className="w-[20rem] field flex flex-col">
            <label className='text-[0.9rem] font-bold' htmlFor="">Search Criteria</label>
            <select className='py-2 px-3 mt-2 rounded-md' name="search-criteria" id="">
              <option value="">vxkj</option>
              <option value="">sdf</option>
              <option value="">fggbf</option>
            </select>
          </div>

          <div className="w-[20rem] field flex flex-col">
            <label className='text-[0.9rem] font-bold' htmlFor="">Search Reference</label>
            <input className='py-2 px-3 mt-2 rounded-md' type="search" placeholder='Type Reference' name="" id="" />
          </div>

          <button className='py-1.5 px-14 mt-2 rounded-md text-[1.2rem] text-[#fff] mb-[-1.15rem] font-bold bg-[#1ea52b]'>Search</button>

          <button className='py-1.5 px-14 mt-2 rounded-md text-[1.2rem] text-[#fff] mb-[-1.15rem] font-bold bg-[#917dcd]'>Download Excel</button>
        </div>

        <table className='w-full my-8'>
          <thead className='border-b-2 border-[#000]'>
            <tr>
              <th className='py-4'>REG Date</th>
              <th className='py-4'>Name </th>
              <th className='py-4'>Mobile</th>
              <th className='py-4'>Status</th>
              <th className='py-4'>Country</th>
              <th className='py-4'>Region</th>
              <th className='py-4'>Fields</th>
            </tr>
          </thead>

          <tbody>
            <tr className='text-center'>
              <td className='py-4 font-medium'>02-FEB-24</td>
              <td className='py-4 font-medium'>John</td>
              <td className='py-4 font-medium'>264818083704</td>
              <td className='py-4 font-medium'>Active</td>
              <td className='py-4 font-medium'>NAMIBIA</td>
              <td className='py-4 font-medium'>KHOMAS</td>
              <td className='py-4'>ADMIN, IT, LOGISTICS , EDUCATION, GRN</td>
            </tr>
            <tr className='text-center'>
              <td className='py-4 font-medium'>02-FEB-24</td>
              <td className='py-4 font-medium'>John</td>
              <td className='py-4 font-medium'>264818083704</td>
              <td className='py-4 font-medium'>Active</td>
              <td className='py-4 font-medium'>NAMIBIA</td>
              <td className='py-4 font-medium'>KHOMAS</td>
              <td className='py-4'>ADMIN, IT, LOGISTICS , EDUCATION, GRN</td>
            </tr>
            <tr className='text-center'>
              <td className='py-4 font-medium'>02-FEB-24</td>
              <td className='py-4 font-medium'>John</td>
              <td className='py-4 font-medium'>264818083704</td>
              <td className='py-4 font-medium'>Active</td>
              <td className='py-4 font-medium'>NAMIBIA</td>
              <td className='py-4 font-medium'>KHOMAS</td>
              <td className='py-4'>ADMIN, IT, LOGISTICS , EDUCATION, GRN</td>
            </tr>
            <tr className='text-center'>
              <td className='py-4 font-medium'>02-FEB-24</td>
              <td className='py-4 font-medium'>John</td>
              <td className='py-4 font-medium'>264818083704</td>
              <td className='py-4 font-medium'>Active</td>
              <td className='py-4 font-medium'>NAMIBIA</td>
              <td className='py-4 font-medium'>KHOMAS</td>
              <td className='py-4'>ADMIN, IT, LOGISTICS , EDUCATION, GRN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CreateListing