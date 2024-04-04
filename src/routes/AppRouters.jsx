import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from './path';
import LoginPagesPage from '../pages/LoginPagesPage';
import Dashboard from '../pages/Dashboard';
import CreateListingPage from '../pages/CreateListingPage';
import UsersPage from '../pages/UsersPage';
import ProfileStaffPage from '../pages/ProfileStaffPage';
import ProfileSettingPage from '../pages/ProfileSettingPage';




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