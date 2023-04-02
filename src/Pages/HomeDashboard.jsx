import React, { useEffect } from "react";
import { appContext } from "../context/context";
import Nav from "../Components/Nav";
import { useNavigate } from "react-router-dom";

export default function HomeDashboard({ children }) {
  const { user } = appContext();
  const navigate = useNavigate();
  console.log(user);

  // if refresh it will go to sign page cause the data store from sign in is lost
  //
  useEffect(() => {
    if (!user) {
      navigate("/sign");
      console.log(user);
    }
  }, [user]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5">
      <div className="col-span-1">
        <Nav />
      </div>
      <div className="col-span-3 xl:col-span-4 px-5">{children}</div>
    </div>
  );
}
