"use client"; // Add this line to indicate that this file is a Client Component

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
import TodoList from "../components/TodoList"; // Import the new TodoList component
import Settings from "../components/Settings"; // Import the new Settings component
import Companies from "../components/Companies"; // Import the new Companies component
import Prospects from "../components/Prospects"; // Import the new Prospects component
import ProspectDetail from "../components/ProspectDetail"; // Import the new ProspectDetail component
import "../styles/index.css"; // Ensure this file exists and has correct styles

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("tasks");
  const [selectedProspect, setSelectedProspect] = useState(null);
  const [theme, setTheme] = useState("light");

  const renderContent = () => {
    switch (selectedTab) {
      case "tasks":
        return <TodoList />;
      case "prospects":
        return (
          <div className="prospects-page">
            <Prospects onSelectProspect={setSelectedProspect} />
            <ProspectDetail prospect={selectedProspect} />
          </div>
        );
      case "companies":
        return <Companies />;
      case "search":
        return <div>Search Content</div>;
      case "notifications":
        return <div>Notifications Content</div>;
      case "settings":
        return <Settings setTheme={setTheme} />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <div className="main-content">
        <Sidebar onSelectTab={setSelectedTab} />
        <div className="content-area">{renderContent()}</div>
      </div>
    </div>
  );
};

export default HomePage;
