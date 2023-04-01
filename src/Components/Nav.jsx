import React from "react";
import { Link, Navigate } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import Sign from "../Pages/Login/Sign";
import { getTokenLocal } from '../utils/getToken'

export default function Nav({ children }) {
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

  const { isLocal, getToken } = getTokenLocal()
  if(!isLocal){
    return <Sign/>
  }
  console.log(getToken)

  const handleExit = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    return <Navigate to='/sign' replace={true} />
  }
  return (
    <>
      <div className="grid grid-cols-5">
        <nav className="">
          <div className="col-span-1 h-screen w-full grid gap-2 place-items-center bg-bgNav text-center">
            {/* profile section */}
            <div className="bg-yellow flex flex-col justify-center gap-2 items-center w-full h-full">
              <div className="rounded-full w-36 h-36 bg-bgNav"></div>
              <p className="font-bold">Zedd</p>
            </div>

            {/* List Navigasi */}
            <div className="bg-bgNav w-full text-text">
              <ul className="ml-5 font-bold grid gap-2">
                <LI link="/dashboard" icon={<MdOutlineDashboard />} list="Dashboard" />
                <LI link="/dashboard/profile" icon={<CgProfile />} list="Profile" />
                <LI
                  link="/dashboard/subscription"
                  icon={<MdOutlineSubscriptions />}
                  list="Subscription"
                />
                <LI link="/dashboard/news" icon={<ImNewspaper />} list="News" />
                <LI
                  link="/dashboard/settings"
                  icon={<AiOutlineSetting />}
                  list="Setting"
                />
              </ul>
            </div>

            <button className='flex gap-4 items-center' onClick={handleExit} type="submit">
              <span>
                <BiExit />
              </span>
              <span>Exit</span>
            </button>
          </div>
        </nav>

        <div className="col-span-4">{children}</div>
      </div>
    </>
  );
}
