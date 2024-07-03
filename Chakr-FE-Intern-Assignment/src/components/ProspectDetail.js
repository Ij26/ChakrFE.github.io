import React, { useState } from "react";
import "./ProspectDetail.css";

const ProspectDetail = ({ prospect }) => {
  const [activeTab, setActiveTab] = useState("tasks");

  if (!prospect) {
    return (
      <div className="prospect-detail">Select a prospect to view details</div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "tasks":
        return <div>Tasks Content</div>;
      case "notes":
        return <div>Notes Content</div>;
      case "emails":
        return <div>Emails Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="prospect-detail">
      <div className="prospect-info">
        <img
          src="profile-pic-url"
          alt={prospect.name}
          className="profile-pic"
        />
        <h2>{prospect.name}</h2>
        <p>Added about 20 hours ago</p>
        <div className="prospect-meta">
          <div>City: {prospect.city}</div>
          <div>
            Creation date: {new Date(prospect.creationDate).toLocaleString()}
          </div>
          <div>Email: {prospect.email}</div>
          <div>Job Title: {prospect.jobTitle}</div>
          <div>
            LinkedIn:{" "}
            <a
              href={`https://${prospect.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {prospect.linkedin}
            </a>
          </div>
        </div>
      </div>
      <div className="prospect-tabs">
        <button
          onClick={() => setActiveTab("tasks")}
          className={activeTab === "tasks" ? "active" : ""}
        >
          Tasks
        </button>
        <button
          onClick={() => setActiveTab("notes")}
          className={activeTab === "notes" ? "active" : ""}
        >
          Notes
        </button>
        <button
          onClick={() => setActiveTab("emails")}
          className={activeTab === "emails" ? "active" : ""}
        >
          Emails
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default ProspectDetail;
