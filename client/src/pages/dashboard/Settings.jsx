
import { useState } from "react";
import "../css/Settings.css";
import DashboardLayouts from "../../layouts/DashboardLayouts";

export const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleEmailNotificationsChange = () =>
    setEmailNotifications(!emailNotifications);
  const handlePushNotificationsChange = () =>
    setPushNotifications(!pushNotifications);

  return (
    <DashboardLayouts>
      <div className="settings-container">
        <aside className="side"></aside>
        <main className="content">
         
          <section id="preferences" className="settings-section">
            <h3>Preferences</h3>
            <div className="setting">
              <label htmlFor="theme">Theme:</label>
              <select id="theme" value={theme} onChange={handleThemeChange}>
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

        </main>
      </div>
    </DashboardLayouts>
  );
};

export default Settings;
