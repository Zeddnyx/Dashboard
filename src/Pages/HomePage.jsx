import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../context/context";

export default function Homepage() {
  const { user } = appContext()
  return (
    <div>
      {user ? (
        <p>udh login</p>
      ) : (
        <Link to="sign">
          <button type="button" className="p-2 bg-slate-500">
            Sign in
          </button>
        </Link>
      )}
    </div>
  );
}
