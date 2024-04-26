import React, { useState, useEffect } from 'react';
import AgentDetails from './AgentDetails';
import { fetchStaff, addStaff } from "../actions/staffActions";
import { useSelector, useDispatch } from 'react-redux';
import { updatePassword } from '../actions/profileActions';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const ProfileSetting = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", staffCode: "" });
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", staffCode: "", accessControl: [] });
  const [error, setError] = useState({});
  const history = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaff());
  }, [dispatch]);

  const staffData = useSelector((state) => state.staff.staffList);
  const currentUser = staffData.find((user) => user.email === window.localStorage.email);
  const user = currentUser || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    dispatch(updatePassword(form)) // Dispatching change password action
      .then((response) => {
        console.log("login response-------", response);
      })
      .catch((error) => {
        console.log("login error", error);
        toast.error(`Login Failed ${error}`, { position: "top-right" });
        setError(error);
      });
  };

  const handleCreateStaff = (e) => {
    e.preventDefault();
    console.log("form", newUser)
    dispatch(addStaff(newUser))
      .then(() => {
        toast.success("Staff account created successfully", { position: "top-right" });
        setForm({ ...form, name: "", email: "", password: "", staffCode: "" });
      })
      .catch((error) => {
        console.log("Create staff error", error);
        toast.error(`Failed to create staff account: ${error}`, { position: "top-right" });
      });
  };

  const handlePermissionChange = (e) => {
    const selectedPermissions = Array.from(e.target.selectedOptions, option => option.value);
    console.log("selected permission's",selectedPermissions)
    setNewUser(prevState => ({
      ...prevState,
      accessControl: selectedPermissions
    }));
  };
  const permissionsOptions = ["Permission 1", "Permission 2", "Permission 3"]

  return (
    <div className="w-full max-w-[1150px] mx-auto px-8">
      <AgentDetails />

      <div>
        <h1 className="text-[#392e2d] text-[clamp(2rem,5vw,5rem)] text-left uppercase font-extrabold py-5 border-b-2 border-[#000]">
          Profile Settings
        </h1>

        <div className="profile-detail flex flex-col gap-4 max-w-[70%] py-6 border-b-2 border-[#000]">
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">Name</span>
            <span className="w-[50%]">{user.name}</span>
          </div>
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">Email Address</span>
            <span className="w-[50%]">{user.email}</span>
          </div>
          <div className="flex items-center justify-between text-left">
            <span className="w-[50%] font-bold">Mobile Number</span>
            <span className="w-[50%]">{user.mobile || "No Mobile Number Found"}</span>
          </div>
        </div>
      </div>

      <div className="change-password flex items-center gap-8 py-6">
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-[40%] xl:max-w-[25%]">
          <input
            onChange={handleChange}
            className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]"
            type="text"
            name="currentPassword"
            placeholder="Old Password"
            value={form.currentPassword}
          />
          <input
            onChange={handleChange}
            className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]"
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={form.newPassword}
          />
          <button
            className="bg-[#37266b] shadow-[0px_0px_20px_5px_#baa6e7] py-3 mt-3 rounded-md text-[#fff] uppercase font-semibold"
          >
            Change Password
          </button>
        </form>

        <form onSubmit={handleCreateStaff} className="flex flex-col gap-4 w-full max-w-[40%] xl:max-w-[25%]">
          <input
            onChange={handleNewUserChange}
            className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]"
            type="text"
            placeholder="Name"
            name="name"
            value={newUser.name}
          />
          <input
            onChange={handleNewUserChange}
            className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]"
            type="email"
            placeholder="Email"
            name="email"
            value={newUser.email}
          />
          <input
            onChange={handleNewUserChange}
            className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]"
            type="password"
            placeholder="Password"
            name="password"
            value={newUser.password}
          />
          <input
            onChange={handleNewUserChange}
            className="py-2.5 px-5 rounded-md placeholder:text-[#000] placeholder:text-[0.9rem]"
            type="number"
            placeholder="Mobile Number"
            name="staffCode"
            value={newUser.staffCode}
          />
          <select
            onChange={handlePermissionChange}
            className="py-2.5 px-5 rounded-md"
            name="accessControl"
            // value={newUser.permissions}
            multiple
          >
            {permissionsOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <button
            className="bg-[#37266b] shadow-[0px_0px_20px_5px_#baa6e7] py-3 mt-3 rounded-md text-[#fff] uppercase font-semibold"
          >
            Create Staff Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetting;
