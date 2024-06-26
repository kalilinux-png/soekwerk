import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from './path';
import Dashboard from '../Pages/Dashboard';
import CreateListingPage from '../Pages/CreateListingPage';
import UsersPage from '../Pages/UsersPage';
import ProfileStaffPage from '../Pages/ProfileStaffPage';
import ProfileSettingPage from '../Pages/ProfileSettingPage';
import LoginPagesPage from '../Pages/LoginPagesPage';
import App from "../Pages/blogsTest"
import Registration from "../Pages/register"
import ExcelUploader from "../Pages/ExcelUpload"
import FilePage from "../Pages/FilePage"
import Navigation from "../components/Navigation/Navigation"




const AppRouters = () => {
  return (
    <Routes>
      <Route path={Paths.login} element={<LoginPagesPage />} />
      <Route path={Paths.dashboard} element={<Dashboard />} />
      <Route path={Paths.createListing} element={<CreateListingPage />} />
      <Route path={Paths.users} element={<UsersPage />} />
      <Route path={Paths.profileStaff} element={<ProfileStaffPage />} />
      <Route path={Paths.profileSetting} element={<ProfileSettingPage />} />
      <Route path={Paths.file} element={<FilePage />} />
      <Route path="/test" element={<App />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/excel" element={<ExcelUploader />} />
      <Route path="/nav" element={<Navigation />} />
    </Routes>
  )
}

export default AppRouters