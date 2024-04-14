import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importing useDispatch hook
import { login } from '../actions/authActions'; // Importing the login action creator
import loginImg from "../assets/images/soekwerk.jpeg";
import "./LoginPage.css"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import validateLogin from '../validations/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const { logins, handleSubmit } = useForm();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const dispatch = useDispatch(); // Initializing useDispatch hook
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { errors, isValid } = validateLogin(form);
    console.log("form after submit", form); // Log the updated form state
    console.log("errors", errors, isValid);
    if (isValid) {
      setError("");
      dispatch(login(form)) // Dispatching login action
        .then((response) => {
          // Assuming the JWT token is returned in the response
          console.log("login response", response)
          const token = response.token;
          // Store the token in local storage
          localStorage.setItem('token', token);
          localStorage.setItem('email', form.email);
          // Redirect to the dashboard page
          history('/create_listing');
        })
        .catch((error) => {
          console.log("login error", error)
          toast.error(`Login Failed ${error}`, {
            position: "top-right"
          });
          setError(error); // Assuming there's an error message in the response
        });
    } else {
      setError(errors);
    }
  };

  return (
    <>
      <div className="py-[4rem] px-10">
        <div className="w-full max-w-[1120px] mx-auto  bg-[#fff] flex items-center rounded-[1.9rem]">
          <div className="w-full login bg-[#c7bdb1] px-[5rem] py-[2.5rem] rounded-tl-[1.9rem] rounded-bl-[1.9rem]">
            <div className="form-heading text-left">
              <h1 className="font-bold text-[1.5rem]">Login</h1>
              <span className="text-[0.9rem]">Login and create listing</span>
            </div>

            <form action="submit" className="max-w-[350px] flex flex-col gap-8 mt-8">
              <input
                type="text"
                name="email"
                className="border placeholder:text-[#000] placeholder:text-[0.9rem] px-5 py-2.5 rounded-md"
                placeholder="Email Address"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className="border placeholder:text-[#000] placeholder:text-[0.9rem] px-5 py-2.5 rounded-md"
                placeholder="Password"
                onChange={handleChange}
              />

              <button onClick={(e) => onSubmit(e)} className="uppercase font-bold bg-[#fbbc41] rounded-md text-[1.25rem] py-2 shadow-[0px_0px_10px_4px_#78b172]">Login</button>
            </form>

            <p className="Capitalize my-4 text-left">Forget Password- ? <span className="font-bold">Click here</span></p>
          </div>

          <div className="image  px-9">
            <img className="w-[clamp(600px,2vw,800px)] " src={loginImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
