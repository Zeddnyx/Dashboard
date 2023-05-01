import React from "react";
import { Outlet } from "react-router-dom";

export default function Base() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
