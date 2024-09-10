// import React from 'react'
import "./Sidebar.css";
import { IoIosSettings } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const sidebar = () => {
  const data = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: <MdDashboard className="icons" />,
    },
    {
      title: "Mentors",
      path: "/Mentors",
      icon: <IoPerson className="icons" />,
    },

    {
      title: "Tasks",
      path: "/tasks",
      icon: <FaTasks className="icons" />,
    },

    {
      title: "Interns",
      path: "/interns",
      icon: <IoIosPeople className="icons" />,
    },

    {
      title: "Projects",
      path: "/projects",
      icon: <HiClipboardDocumentList className="icons" />,
    },

    {
      title: "Evaluation",
      path: "/evaluation",
      icon: <FaSheetPlastic className="icons" />,
    },

    {
      title: "Attendance",
      path: "/attendance",
      icon: <FaExclamationCircle className="icons" />,
    },

    {
      title: "Messaging",
      path: "/messaging",
      icon: <FaMessage className="icons" />,
    },

    {
      title: "Settings",
      path: "/settings",
      icon: <IoIosSettings className="icons" />,
    },
  ];
  return (
    <div className="sidebar">
      <div className="logo">
        <ul className="menu">
          {data.map((item, index) => (
            <Link key={index} to={item.path}>
              <li className="black">
                {item.icon}
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
