import React from 'react'
import AgentDetails from './AgentDetails'

const Users = () => {
  
  return (
    <div className="w-full max-w-[1150px] mx-auto px-8">
      <AgentDetails />

      <div className="users flex items-center justify-between py-8">
        <div>
          <p className='uppercase md:text-[0.9rem] xl:text-[1.1rem] font-semibold '>Number of registered users</p>
          <p className='bg-[#1ea52b] max-w-[250px] md:text-[1.8rem] xl:text-[2.2rem] text-[#fff] font-bold text-center py-1 mt-1.5 rounded-2xl'>2000</p>
        </div>

        <div>
          <p className='uppercase md:text-[0.9rem] xl:text-[1.1rem] font-semibold '>Number of active users</p>
          <p className='bg-[#1ea52b] max-w-[250px] md:text-[1.8rem] xl:text-[2.2rem] text-[#fff] font-bold text-center py-1 mt-1.5 rounded-2xl'>1680</p>
        </div>

        <div>
          <p className='uppercase md:text-[0.9rem] xl:text-[1.1rem] font-semibold '>Number of inactive users</p>
          <p className='bg-[#1ea52b] max-w-[250px] md:text-[1.8rem] xl:text-[2.2rem] text-[#fff] font-bold text-center py-1 mt-1.5 rounded-2xl'>320</p>
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
                <th className='text-nowrap py-4 px-7 uppercase'>REG Date</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Name </th>
                <th className='text-nowrap py-4 px-7 uppercase'>Mobile</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Status</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Country</th>
                <th className='text-nowrap py-4 px-7 uppercase'>Region</th>
                <th className='text-nowrap py-4 px-7 uppercase text-left'>Fields</th>
              </tr>
            </thead>

            <tbody>
              <tr className='text-center'>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>02-FEB-24</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>John</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>264818083704</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>Active</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>NAMIBIA</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>KHOMAS</td>
                <td className='text-nowrap py-4 px-7 uppercase'>ADMIN, IT, LOGISTICS , EDUCATION, GRN</td>
              </tr>
              <tr className='text-center'>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>02-FEB-24</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>John</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>264818083704</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>Active</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>NAMIBIA</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>KHOMAS</td>
                <td className='text-nowrap py-4 px-7 uppercase'>ADMIN, IT, LOGISTICS , EDUCATION, GRN</td>
              </tr>
              <tr className='text-center'>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>02-FEB-24</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>John</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>264818083704</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>Active</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>NAMIBIA</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>KHOMAS</td>
                <td className='text-nowrap py-4 px-7 uppercase'>ADMIN, IT, LOGISTICS , EDUCATION, GRN</td>
              </tr>
              <tr className='text-center'>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>02-FEB-24</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>John</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>264818083704</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>Active</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>NAMIBIA</td>
                <td className='text-nowrap py-4 px-7 uppercase font-medium'>KHOMAS</td>
                <td className='text-nowrap py-4 px-7 uppercase'>ADMIN, IT, LOGISTICS , EDUCATION, GRN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users