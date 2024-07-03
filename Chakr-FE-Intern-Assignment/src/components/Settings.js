import React, { useState } from "react";
import "./Settings.css";

const Profile = () => (
  <div>
    <h2>Profile</h2>
    <form>
      <label>
        Profile Picture:
        <input type="file" />
      </label>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button type="submit">Save</button>
    </form>
  </div>
);

const Appearance = ({ setTheme }) => (
  <div>
    <h2>Appearance</h2>
    <p>Select a theme:</p>
    <button onClick={() => setTheme("light")}>Light</button>
    <button onClick={() => setTheme("dark")}>Dark</button>
    <button onClick={() => setTheme("purple-light")}>Purple Light</button>
    <button onClick={() => setTheme("purple-dark")}>Purple Dark</button>
  </div>
);

const Settings = ({ setTheme }) => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "appearance":
        return <Appearance setTheme={setTheme} />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="settings-container">
      <aside className="settings-sidebar">
        <ul>
          <li onClick={() => setActiveSection("profile")}>Profile</li>
          <li onClick={() => setActiveSection("appearance")}>Appearance</li>
        </ul>
      </aside>
      <div className="settings-content">{renderSection()}</div>
    </div>
  );
};

export default Settings;
