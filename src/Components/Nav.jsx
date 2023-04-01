import React, { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiExit } from "react-icons/bi";
import Sign from "../Pages/Login/Sign";
import { getTokenLocal } from "../utils/getToken";
import { authContext } from "../context/context";
import { getSign } from "../Pages/Login/getData";

export default function Nav({ children }) {
  const { isLocal, getToken } = getTokenLocal();
  const { user } = useContext(authContext);

  const LI = ({ list, link, icon }) => {
    return (
      <Link to={link}>
        <li className="li">
          <span className="text-text">{icon}</span>
          <span>{list}</span>
        </li>
      </Link>
    );
  };

  if (isLocal === false) {
    return <Sign />;
  }

  useEffect(() => {
    getSign();
  }, []);

  const handleExit = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    return <Navigate to="/sign" replace={true} />;
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5">
        <nav>
          <div className="col-span-1 h-screen w-full grid gap-2 place-items-center bg-bgNav text-center">
            {/* profile section */}
            <div className="bg-yellow flex flex-col justify-center gap-2 items-center w-full h-full">
              <div className="rounded-full w-36 h-36 bg-bgNav"></div>
              <p className="font-bold">{user?.firstName}</p>
            </div>

            {/* List Navigasi */}
            <div className="bg-bgNav w-full text-text">
              <ul className="ml-5 font-bold grid gap-2 grid-cols-3 md:grid-cols-1">
                <LI
                  link="/dashboard"
                  icon={<MdOutlineDashboard />}
                  list="Dashboard"
                />
                <LI
                  link="/dashboard/profile"
                  icon={<CgProfile />}
                  list="Profile"
                />

                <button
                  className="flex gap-3 h-12 px-3 items-center outline-none hover:text-red-500"
                  onClick={handleExit}
                  type="submit"
                >
                  <span>
                    <BiExit />
                  </span>
                  <span>Exit</span>
                </button>
              </ul>
            </div>
          </div>
        </nav>

        <div className="col-span-3 xl:col-span-4 px-5">{children}</div>
      </div>
    </>
  );
}
