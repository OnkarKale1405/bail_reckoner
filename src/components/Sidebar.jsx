import React from 'react';
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="relative h-full flex flex-col justify-between items-center bg-[#3182ce]">
      <ul className="mt-24 h-full flex flex-col justify-start items-center text-white">
        <li className="p-4 flex flex-col items-center">
          <Link to="/dashboards/home" className="flex flex-col items-center group">
            <CiHome className='text-4xl' />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              home
            </span>
          </Link>
        </li>
        <li className="p-4 flex flex-col items-center">
          <Link to="/dashboards/notification" className="flex flex-col items-center group">
            <IoIosNotificationsOutline className='text-4xl' />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              notifications
            </span>
          </Link>
        </li>
        <li className="p-4 flex flex-col items-center">
          <Link to="/dashboards/add-client" className="flex flex-col items-center group">
            <CgDetailsMore className='text-4xl' />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              details
            </span>
          </Link>
        </li>
        <li className="p-4 flex flex-col items-center">
          <Link to="/login" className="flex flex-col items-center group">
            <MdLogout className='text-4xl' />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Logout
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;