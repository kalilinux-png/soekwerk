import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginPage from '../components/LoginPage';
import Dashboard from '../pages/Dashboard';
import ProfileStaffPage from '../pages/ProfileStaffPage';
import { Paths } from './path';
import ProfileSettingPage from '../pages/ProfileSettingPage';
import CreateListingPage from '../pages/CreateListingPage';
import UsersPage from '../pages/UsersPage';



const AppRouters = () => {
  return (
    <Routes>
      <Route>
        <Route path={Paths.login} element={<LoginPage />} />
        <Route path={Paths.dashboard} element={<Dashboard />} />
        <Route path={Paths.createListing} element={<CreateListingPage />} />
        <Route path={Paths.users} element={<UsersPage />} />
        <Route path={Paths.profileStaff} element={<ProfileStaffPage />} />
        <Route path={Paths.profileSetting} element={<ProfileSettingPage />} />

      </Route>
    </Routes>
  )
}

export default AppRouters