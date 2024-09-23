// Import necessary libraries
import { useState } from 'react';
import Sidebar from '../../Components/Screens/Sidebar';
import Navbar from '../../Components/Screens/Navbar';
import '../css/Settings.css';

export const Settings = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

 
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleEmailNotificationsChange = () => setEmailNotifications(!emailNotifications);
  const handlePushNotificationsChange = () => setPushNotifications(!pushNotifications);
  const handleTwoFactorAuthChange = () => setTwoFactorAuth(!twoFactorAuth);

  // Function to simulate viewing account activity
  const viewAccountActivity = () => {
    alert('Account activity is currently unavailable.');
  };

  return (
    <div className='container'>
      <Sidebar />
      <div className='main-content'>
        <Navbar />
        <div className="settings-container">
          <aside className="side"></aside>
          <main className="content">
            {/* Account Settings Section */}
            <section id="account" className="settings-section">
              <h3>Account Settings</h3>
              <div className="setting">
                <label htmlFor="username">Username:</label>
                <input 
                  type="text" 
                  id="username" 
                  value={username} 
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="setting">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={handleEmailChange}
                />
              </div>
              <div className="setting">
                <label htmlFor="password">Password:</label>
                <input 
                  type="password" 
                  id="password" 
                  value={password} 
                  onChange={handlePasswordChange}
                />
              </div>
            </section>

            {/* Preferences Section */}
            <section id="preferences" className="settings-section">
              <h3>Preferences</h3>
              <div className="setting">
                <label htmlFor="theme">Theme:</label>
                <select 
                  id="theme" 
                  value={theme} 
                  onChange={handleThemeChange}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div className="setting">
                <label htmlFor="language">Language:</label>
                <select 
                  id="language" 
                  value={language} 
                  onChange={handleLanguageChange}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </section>

            {/* Notifications Section */}
            <section id="notifications" className="settings-section">
              <h3>Notifications</h3>
              <div className="setting">
                <label htmlFor="email-notifications">Email Notifications:</label>
                <input 
                  type="checkbox" 
                  id="email-notifications" 
                  checked={emailNotifications} 
                  onChange={handleEmailNotificationsChange}
                />
              </div>
              <div className="setting">
                <label htmlFor="push-notifications">Push Notifications:</label>
                <input 
                  type="checkbox" 
                  id="push-notifications" 
                  checked={pushNotifications} 
                  onChange={handlePushNotificationsChange}
                />
              </div>
            </section>

            {/* Privacy & Security Section */}
            <section id="privacy" className="settings-section">
              <h3>Privacy & Security</h3>
              <div className="setting">
                <label htmlFor="2fa">Two-Factor Authentication:</label>
                <input 
                  type="checkbox" 
                  id="2fa" 
                  checked={twoFactorAuth} 
                  onChange={handleTwoFactorAuthChange}
                />
              </div>
              <div className="setting">
                <label htmlFor="account-activity">Account Activity:</label>
                <button onClick={viewAccountActivity}>View Activity</button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
