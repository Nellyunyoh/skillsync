// import React from 'react'
import '../../Components/css/Navbar.css'
import profile from '../../assets/images/profile.webp';
// import { FaSearch } from "react-icons/fa";


export const Navbar = () => {
  return (
    <div className='main-content'>
          <div className="header-wrapper">
        <div className="header-title">
          <span>Administrator</span>
          <h2>Dashboard</h2>
        </div>

        <div className="user-info">
          <div className="search-box">
               {/* <FaSearch  className='search'/> */}
            <input type="text" placeholder="Search" />

          </div>

          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
