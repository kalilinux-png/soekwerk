import React from "react";
import AgentDetails from "./AgentDetails";
import { fetchUsers } from "../actions/userAction";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [searchReference, setSearchReference] = useState("");

  const usersList = useSelector((state) => state.users.userList); // Select usersList directly
  console.log("userList", usersList);
  // Calculate total, active, and inactive users
  const totalUsers = usersList.length;
  const activeUsers = usersList.filter((user) => user.isActive === true).length;
  const inactiveUsers = usersList.filter(
    (user) => user.isActive === false
  ).length;
  const filteredUsers = usersList.filter((user) => {
    console.log("search filter", searchCriteria, searchReference);
    if (searchCriteria === "REG Date") {
      return user.regDate.toLowerCase().includes(searchReference.toLowerCase());
    } else if (searchCriteria === "Name") {
      return user.name.toLowerCase().includes(searchReference.toLowerCase());
    } else if (searchCriteria === "Email") {
      return user.email.toLowerCase().includes(searchReference.toLowerCase());
    }
    // Add other search criteria here
    return true;
  });
  return (
    <div className="w-full max-w-[1150px] mx-auto px-8">
      <AgentDetails />

      <div className="users flex flex-col lg:flex-row items-start justify-between gap-4 py-8">
        <div className="flex lg:flex-col items-center justify-between gap-3 w-full">
          <p className="uppercase text-[0.8rem] xl:text-[1.1rem] font-semibold ">
            Number of registered users
          </p>
          <p className="bg-[#1ea52b] w-full max-w-[150px] md:max-w-[200px] text-[1.4rem] md:text-[1.8rem] xl:text-[2.2rem] text-[#fff] font-bold text-center py-1 md:mt-1.5 rounded-2xl">
            {totalUsers}
          </p>
        </div>

        <div className="flex lg:flex-col items-center justify-between gap-3 w-full">
          <p className="uppercase text-[0.8rem] xl:text-[1.1rem] font-semibold ">
            Number of active users
          </p>
          <p className="bg-[#1ea52b] w-full max-w-[150px] md:max-w-[200px] text-[1.4rem] md:text-[1.8rem] xl:text-[2.2rem] text-[#fff] font-bold text-center py-1 md:mt-1.5 rounded-2xl">
            {activeUsers}
          </p>
        </div>

        <div className="flex lg:flex-col items-center justify-between gap-3 w-full">
          <p className="uppercase text-[0.8rem] xl:text-[1.1rem] font-semibold ">
            Number of inactive users
          </p>
          <p className="bg-[#1ea52b] w-full max-w-[150px] md:max-w-[200px] text-[1.4rem] md:text-[1.8rem] xl:text-[2.2rem] text-[#fff] font-bold text-center py-1 md:mt-1.5 rounded-2xl">
            {inactiveUsers}
          </p>
        </div>
      </div>

      <div className="user-details ">
        <div className="search w-full flex flex-col lg:flex-row items-center justify-between gap-3 border-b-2 border-[#000] py-8">
          <div className="w-full flex items-center justify-between gap-3">
            <div className="w-full max-w-[20rem] field flex flex-col">
              <label className="text-[0.9rem] font-bold" htmlFor="">
                Search Criteria
              </label>
              <select
                className="py-2 px-3 mt-2 rounded-md"
                name="search-criteria"
                id="search-criteria"
                value={searchCriteria}
                onChange={(e) => setSearchCriteria(e.target.value)}
              >
                <option value="REG Date">REG Date</option>
                <option value="Name">Name</option>
                <option value="Email">Email </option>
                {/* other search criteria */}
              </select>
            </div>

            <div className="w-full max-w-[20rem] field flex flex-col">
              <label className="text-[0.9rem] font-bold" htmlFor="">
                Search Reference
              </label>
              <input
                className="py-2 px-3 mt-2 rounded-md"
                type="search"
                placeholder="Type Reference"
                value={searchReference}
                onChange={(e) => setSearchReference(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full flex items-center gap-3">
            <button className="py-1.5 px-2 w-full max-w-[200px] mt-2 rounded-md text-[1.1rem] text-[#fff] mb-[-1.15rem] font-semibold bg-[#1ea52b]">
              Search
            </button>

            <button className="py-1.5 px-2 w-full max-w-[200px] mt-2 rounded-md text-[1.1rem] text-[#fff] mb-[-1.15rem] font-semibold bg-[#917dcd]">
              Download Excel
            </button>
          </div>
        </div>

        <div className="h-[62vh] overflow-auto">
          <table className="w-full">
            <thead className="border-b-2 border-[#000]">
              <tr>
                <th className="text-nowrap py-4 pr-7 uppercase">REG Date</th>
                <th className="text-nowrap py-4 px-7 uppercase">Name </th>
                <th className="text-nowrap py-4 px-7 uppercase">Email </th>
                <th className="text-nowrap py-4 px-7 uppercase">Mobile</th>
                <th className="text-nowrap py-4 px-7 uppercase">Status</th>
                <th className="text-nowrap py-4 px-7 uppercase">Country</th>
                <th className="text-nowrap py-4 px-7 uppercase">Region</th>
                <th className="text-nowrap py-4 px-7 uppercase text-left">
                  Fields
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="text-nowrap py-2 px-7 uppercase font-medium">
                    {user.regDate}
                  </td>
                  <td className="text-nowrap py-2 px-7 uppercase font-medium">
                    {user.name}
                  </td>
                  <td className="text-nowrap py-2 px-7 uppercase font-medium">
                    {user.email}
                  </td>
                  <td className="text-nowrap py-2 px-7 uppercase font-medium">
                    {user.mobile}
                  </td>
                  <td className="text-nowrap py-2 px-7 uppercase font-medium">
                    {user.status}
                  </td>
                  <td className="text-nowrap py-2 px-7 uppercase font-medium">
                    {user.country}
                  </td>
                  <td className="text-nowrap py-2 px-7 uppercase font-medium">
                    {user.region}
                  </td>
                  {/* <td className='text-nowrap py-4 px-7 uppercase'>{user.fields.join(', ')}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
