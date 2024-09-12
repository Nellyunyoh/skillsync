// import React from 'react'

import Sidebar from '../../Components/Screens/Sidebar'
import Navbar from '../../Components/Screens/Navbar';
import '../css/Settings.css'

export const Settings = () => {
  return (
    <div className='container'>
        <Sidebar />
        <div className='main-content'>
            <Navbar />

        </div>


    </div>
  )
}

export default Settings;