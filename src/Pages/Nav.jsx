import React, { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiExit } from "react-icons/bi";
import Sign from "../Pages/Login/Sign";
import { getTokenLocal } from "../utils/getToken";
import { appContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const { isLocal, getToken } = getTokenLocal();
  const { user } = appContext()
  const navigate = useNavigate();

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

  const handleExit = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/sign");
  };

  return (
    <>
      <nav>
        <div className="parent-nav">
          {/* profile section */}
          <div className="img-nav-profile">
            <img
              className="rounded-full w-36 h-36 bg-bgNav"
              src={user?.image}
              alt={user?.firstName}
            />
            <p className="font-bold">{user?.firstName}</p>
            <p className="font-sm">{user?.email}</p>
          </div>

          {/* List Navigasi */}
          <div className="bg-bgNav w-full text-text">
            <ul className="ul">
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
    </>
  );
}
