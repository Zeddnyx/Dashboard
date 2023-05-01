import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile";
import Settings from "../Pages/Dashboard/Settings";
import BaseLayout from "./BaseLayout";
import Sign from "../Pages/Login/Sign";
import HomePage from "../Pages/HomePage";

export default function Routing() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sign" element={<Sign />} />

        <Route path="dashboard">
          // <Route index element={<Dashboard />} />
          <Route path="homepage" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}
