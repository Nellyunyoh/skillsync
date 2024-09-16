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
            <div className="settings-container">
        <aside className="side">
          {/* <!-- <h2>Settings</h2> --> */}
          {/* <ul>
            <li className="active"><a href="#account">Account</a></li>
            <li><a href="#preferences">Preferences</a></li>
            <li><a href="#notifications">Notifications</a></li>
            <li><a href="#privacy">Privacy & Security</a></li>
            <li><a href="#billing">Billing</a></li>
          </ul> */}
        </aside>
        <main className="content">
          <section id="account" className="settings-section">
            <h3>Account Settings</h3>
            <div className="setting">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value="" />
            </div>
            <div className="setting">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value="" />
            </div>
            <div className="setting">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value="" />
            </div>
          </section>

          <section id="preferences" className="settings-section">
            <h3>Preferences</h3>
            <div className="setting">
              <label htmlFor="theme">Theme:</label>
              <select id="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="setting">
              <label htmlFor="language">Language:</label>
              <select id="language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </section>

          <section id="notifications" className="settings-section">
            <h3>Notifications</h3>
            <div className="setting">
              <label htmlFor="email-notifications">Email Notifications:</label>
              <input type="checkbox" id="email-notifications"  />
            </div>
            <div className="setting">
              <label htmlFor="push-notifications">Push Notifications:</label>
              <input type="checkbox" id="push-notifications" />
            </div>
          </section>

          <section id="privacy" className="settings-section">
            <h3>Privacy & Security</h3>
            <div className="setting">
              <label htmlFor="2fa">Two-Factor Authentication:</label>
              <input type="checkbox" id="2fa"/>
            </div>
            <div className="setting">
              <label htmlFor="account-activity">Account Activity:</label>
              <button>View Activity</button>
            </div>
          </section>

          
        </main>
      </div>

        </div>


    </div>
  )
}

export default Settings;