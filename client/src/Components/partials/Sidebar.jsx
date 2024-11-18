import "../../Components/css/Sidebar.css";
import { IoIosSettings } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import image from '../../assets/images/image 20.png'

export const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

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
      title: "Interns",
      path: "/interns",
      icon: <IoIosPeople className="icons" />,
    },
    {
      title: "Projects",
      path: "",
      icon: <HiClipboardDocumentList className="icons" />,
      isDropdown: true,
      subItems: [
        {
          title: "Projects",
          path: "/projects",
                    icon: <HiClipboardDocumentList className="icons" />,
        },
        {
          title: "Tasks",
          path: "/tasks",
          icon: <FaTasks className="icons" />,
        },
      ],
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
      <ul className="menu">
      <img src = {image} className="desk" alt=""  />
        {data.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${
              item.isDropdown && openDropdown === index ? "open" : ""
            }`}
          >
            <Link to={item.path} className="sidebar-item">
              <li className="black">
                {item.icon}
                <span>{item.title}</span>
                {item.isDropdown && (
                  <RiArrowDownSFill
                    className={`dropdown-toggle ${
                      openDropdown === index ? "open" : ""
                    }`}
                    onClick={() => toggleDropdown(index)}
                  />
                )}
              </li>
            </Link>
            {item.isDropdown && openDropdown === index && (
              <ul className="sub-menu">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className="sidebar-sub-item"
                  >
                    <li className="black">
                      {subItem.icon}
                      <span>{subItem.title}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
