import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onSelectTab }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>CRM App</h2>
        <p>Logged in as: User Name</p>
      </div>
      <nav>
        <ul>
          <li onClick={() => onSelectTab("prospects")}>Prospects</li>
          <li onClick={() => onSelectTab("companies")}>Companies</li>
          <li onClick={() => onSelectTab("search")}>Search</li>
          <li onClick={() => onSelectTab("notifications")}>Notifications</li>
          <li onClick={() => onSelectTab("tasks")}>Tasks</li>
          <li onClick={() => onSelectTab("settings")}>Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
