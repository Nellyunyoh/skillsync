// import React from 'react'
import Sidebar from '../../Components/Screens/Sidebar'
import Navbar from '../../Components/Screens/Navbar';
import '../css/Tasks.css'

export const Tasks = () => {
  return (
    <div className='container'>
        <Sidebar />
        <div className='main-content'>
            <Navbar />

        </div>


    </div>
  )
}

export default Tasks;