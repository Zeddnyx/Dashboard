import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../../Pages/Login/Sign";

export default function Base() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
