import React,{useEffect} from 'react'
import { fetchStaff } from "../actions/staffActions"
import { useSelector, useDispatch } from 'react-redux';

const AgentDetails = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStaff())
  }, [dispatch])

  const staffData = useSelector((state) => state.staff.staffList);

  console.log("Staff Data", staffData)
  const currentUser = staffData.filter((user) => {
    if(user.email === window.localStorage.email) { 
      return user
    }
  })
  const user = currentUser[0]

  return (
    <div className="agent-details flex items-center justify-between gap-14 py-6 border-b-2 border-[#000]">
      <div className="uppercase text-[1.2rem]">
        Agent Code:{" "}
        <span className="text-[#c85e22] font-semibold">{user?.staffCode}</span>
      </div>
      <div className="uppercase text-[1.2rem]">
        Agent Code:{" "}
        <span className="text-[#c85e22] font-semibold">{user?.staffCode}</span>
      </div>
      <div className="uppercase text-[1.2rem]">
        Agent Code:{" "}
        <span className="text-[#c85e22] font-semibold">{user?.staffCode}</span>
      </div>
    </div>
  )
}

export default AgentDetails