import '../../Components/css/Navbar.css'
import profile from '../../assets/images/profile.webp';
import { FaSearch } from "react-icons/fa";
import navy from '../../assets/images/Frame 1249186503 (1).png'


export const Navbar = () => {
  return (
    <div className='main-content'>
          {/* <div className="header-wrapper"> */}
        {/* <div className="header-title"> */}
          <img src = {navy} className="alto" alt='' />
          {/* <span>Administrator</span>
          <h2>Dashboard</h2>
        </div> */}

        {/* <div className="user-info">
          <div className="search-box">
               <FaSearch  className='search'/>
            <input type="text" placeholder="Search" className='series' />

          </div>

          <img src={profile} alt="" />
        </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default Navbar;
