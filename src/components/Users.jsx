import React from 'react'
import AgentDetails from './AgentDetails'

const Users = () => {
  return (
    <div className="h-screen bg-[#f0f0f4] px-28">
      <AgentDetails />

      <div className="users flex items-center justify-between py-8">
        <div>
          <p className='uppercase text-[1.1rem] font-semibold '>Number of registered users</p>
          <p className='bg-[#1ea52b] max-w-[250px] text-[2.2rem] text-[#fff] font-bold text-center py-1 mt-1.5 rounded-2xl'>2000</p>
        </div>

        <div>
          <p className='uppercase text-[1.1rem] font-semibold '>Number of active users</p>
          <p className='bg-[#1ea52b] max-w-[250px] text-[2.2rem] text-[#fff] font-bold text-center py-1 mt-1.5 rounded-2xl'>1680</p>
        </div>

        <div>
          <p className='uppercase text-[1.1rem] font-semibold '>Number of inactive users</p>
          <p className='bg-[#1ea52b] max-w-[250px] text-[2.2rem] text-[#fff] font-bold text-center py-1 mt-1.5 rounded-2xl'>320</p>
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

export default Users