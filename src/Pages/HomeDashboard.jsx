import React, { useEffect } from "react";
import { appContext } from "../context/context";
import Nav from "../Components/layout/Nav";
import { useNavigate } from "react-router-dom";
import { getTokenLocal } from "../utils/getToken";

export default function HomeDashboard({ children }) {
  const { user, setUser } = appContext();
  const navigate = useNavigate();
  const { getUser, getToken } = getTokenLocal();

  useEffect(() => {
    setUser(getUser);
    if (!getUser && getToken) {
      navigate("/");
    } else {
      return;
    }
  }, []);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Nav />
      </div>
      <div className="col-span-4 px-5">{children}</div>
    </div>
  );
}
