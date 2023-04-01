import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Subcription from "../Pages/Subscription";
import News from "../Pages/News";
import Settings from "../Pages/Settings";
import BaseLayout from "../Components/layout/BaseLayout";
import Sign from "../Pages/Login/Sign";
import HomePage from "../Pages/HomePage";

export default function Routing() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sign" element={<Sign />} />

        <Route path="dashboard">
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="subscription" element={<Subcription />} />
          <Route path="news" element={<News />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}
