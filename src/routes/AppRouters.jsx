import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from './path';
import Dashboard from '../Pages/Dashboard';
import CreateListingPage from '../Pages/CreateListingPage';
import UsersPage from '../Pages/UsersPage';
import ProfileStaffPage from '../Pages/ProfileStaffPage';
import ProfileSettingPage from '../Pages/ProfileSettingPage';
import LoginPagesPage from '../Pages/LoginPagesPage';





const AppRouters = () => {
  return (
    <Routes>
      <Route path={Paths.login} element={<LoginPagesPage />} />
      <Route path={Paths.dashboard} element={<Dashboard />} />
      <Route path={Paths.createListing} element={<CreateListingPage />} />
      <Route path={Paths.users} element={<UsersPage />} />
      <Route path={Paths.profileStaff} element={<ProfileStaffPage />} />
      <Route path={Paths.profileSetting} element={<ProfileSettingPage />} />
    </Routes>
  )
}

export default AppRouters