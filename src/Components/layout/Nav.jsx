import React, { useContext, useEffect } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiExit } from "react-icons/bi";
import { AiOutlineSetting } from 'react-icons/ai'
import Sign from "../../Pages/Login/Sign";
import { getTokenLocal } from "../../utils/getToken";
import { appContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const { isLocal, getToken } = getTokenLocal();
  const { user } = appContext();
  const navigate = useNavigate();

  const LI = ({ list, link, icon }) => {
    return (
      <Link to={link}>
        <li className='flex items-start w-full'>
          <NavLink
            to={link}
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "li-active" : "li"
            }
          >
            <span>{icon}</span>
            <span className='hidden md:inline'>{list}</span>
          </NavLink>
        </li>
      </Link>
    );
  };

  const handleExit = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <nav>
        <div className="parent-nav">
          {/* profile section */}
          <div className="img-nav-profile">
            <img
              className="rounded-full w-12 h-12 md:w-36 md:h-36 bg-bgNav"
              src={user?.image}
              alt={user?.firstName}
            />
            <p className="hidden md:inline font-bold font-xs md:font-sm">{user?.firstName}</p>
            <p className="hidden md:inline font-xs md:font-sm">{user?.email}</p>
          </div>

          {/* List Navigasi */}
          <div className=" w-full text-text">
            <ul className="ul">
              <LI
                link="/dashboard/homepage"
                icon={<MdOutlineDashboard />}
                list="Dashboard"
              />
              <LI
                link="/dashboard/profile"
                icon={<CgProfile />}
                list="Profile"
              />
              <LI
                link="/dashboard/settings"
                icon={<AiOutlineSetting />}
                list="Settings"
              />

              <button
                className="flex gap-3 h-12 md:px-3 items-center outline-none hover:text-red-500"
                onClick={handleExit}
                type="submit"
              >
                <span>
                  <BiExit />
                </span>
                <span className='hidden md:inline'>Exit</span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
