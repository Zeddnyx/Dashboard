import { Link } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineSubscriptions} from "react-icons/md";
import { CgProfile  } from "react-icons/cg";
import { ImNewspaper  } from "react-icons/im";
import { AiOutlineSetting  } from "react-icons/ai";

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
                <LI link="/" icon={<MdOutlineDashboard />} list="Dashboard" />
                <LI link="/profile" icon={<CgProfile/>} list="Profile" />
                <LI link="/subscription" icon={<MdOutlineSubscriptions/>} list="Subscription" />
                <LI link="/news" icon={<ImNewspaper/>} list="News" />
                <LI link="/settings" icon={<AiOutlineSetting/>} list="Setting" />
              </ul>
            </div>
          </div>
        </nav>

        <div className="col-span-4">{children}</div>
      </div>
    </>
  );
}
