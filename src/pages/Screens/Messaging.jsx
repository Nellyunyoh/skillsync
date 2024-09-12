import Sidebar from '../../Components/Screens/Sidebar'
import Navbar from '../../Components/Screens/Navbar';
import '../css/Messaging.css'

export const Messaging = () => {
  return (
    <div className='container'>
        <Sidebar />
        <div className='main-content'>
            <Navbar />
        </div>


    </div>
  )
}

export default Messaging;