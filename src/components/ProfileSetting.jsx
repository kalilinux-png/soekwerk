import React, { useState, useEffect } from 'react'
import AgentDetails from './AgentDetails'
import { fetchStaff } from "../actions/staffActions"
import { useSelector, useDispatch } from 'react-redux';
import validateLogin from '../validations/login';
import { updatePassword } from '../actions/profileActions';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const ProfileSetting = () => {
  const [form, setForm] = useState({ currentPassword: "", newPassword: "" });
  const [error, setError] = useState({});
  const history = useNavigate();

  console.log("form");
  console.log(form);


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStaff())
  }, [dispatch])

  const staffData = useSelector((state) => state.staff.staffList);

  // console.log("Staff Data", staffData)
  const currentUser = staffData.filter((user) => {
    if (user.email === window.localStorage.email) {
      return user
    }
  })
  const user = currentUser[0]

  const handleChange = (e) => {
    if (!e || !e.target) {
        return;
    }

    const { name, value } = e.target;
    if (!name) {
        return;
    }

    setForm(prevState => ({
        ...prevState,
        [name]: value
    }));
};


  const onSubmit = async (e) => {
    e.preventDefault();
    // const { errors, isValid } = validateLogin(form);
    console.log("form after submit", form); // Log the updated form state
    // console.log("errors", errors, isValid);
    // if (isValid) {
    setError("");
    const token = localStorage.getItem('token');
    dispatch(updatePassword(token, form)) // Dispatching change password action
      .then((response) => {
        // Assuming the JWT token is returned in the response
        console.log("login response-------", response)
        // Store the token in local storage
        history('/create_listing');
      })
      .catch((error) => {
        console.log("login error", error)
        toast.error(`Login Failed ${error}`, {
          position: "top-right"
        });
        setError(error); // Assuming there's an error message in the response
      });
    // } else {
    //   setError(errors);
    // }
  };
  return (
    <div className="w-full max-w-[1150px] mx-auto px-8">
      <AgentDetails />

      <div>
        <h1 className="text-[#392e2d] text-[clamp(2rem,5vw,5rem)] text-left uppercase font-extrabold py-5 border-b-2 border-[#000]">
          profile settings
        </h1>

        <div className="profile-detail flex flex-col gap-4 max-w-[70%] py-6 border-b-2 border-[#000]">
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">Name</span>
            <span className="w-[50%]">{user.name}</span>
          </div>
          {/* <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">SURNAME</span>
            <span className="w-[50%]">{l</span>
          </div> */}
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">EMAIL ADDRESS</span>
            <span className="w-[50%]">{user.email}</span>
          </div>
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">MOBILE NUMBER</span>
            <span className="w-[50%]">{user?.mobile || "No Mobile Number Found"}</span>
          </div>
        </div>
      </div>

      <div className="change-password flex items-center gap-8 py-6">
        <form action="submit" className="flex flex-col gap-4 w-full max-w-[40%] xl:max-w-[25%]">
          <input
            onChange={handleChange}
            className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]"
            type="text"
            name="currentPassword" // Add name attribute
            placeholder="Old Password"
            value={form.currentPassword} // Add value attribute
          />
          <input
            onChange={handleChange}
            className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]"
            type="password"
            name="newPassword" // Add name attribute
            placeholder="New Password"
            value={form.newPassword} // Add value attribute
          />

          <button
            onClick={(e) => onSubmit(e)}
            className="bg-[#37266b] shadow-[0px_0px_20px_5px_#baa6e7] py-3 mt-3 rounded-md text-[#fff] uppercase font-semibold"
          >
            Change Password
          </button>
        </form>

        <form action="submit" className="flex flex-col gap-4 w-full max-w-[40%] xl:max-w-[25%]">
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="text" placeholder="Name" />
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="text" placeholder="Surname" />
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="email" placeholder="Email" />
          <input className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]" type="number" placeholder="Mobile Number" />

          <button className="bg-[#37266b] shadow-[0px_0px_20px_5px_#baa6e7] py-3 mt-3 rounded-md text-[#fff] uppercase font-semibold">Create Staff account</button>
        </form>
      </div>
    </div>
  )
}

export default ProfileSetting