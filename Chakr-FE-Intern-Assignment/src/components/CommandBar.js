import React, { useState, useEffect } from "react";
import "./CommandBar.css";

const CommandBar = ({ isVisible, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Implement search logic here
  };

  return isVisible ? (
    <div className="command-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search or jump to..."
      />
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            {result}
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default CommandBar;
