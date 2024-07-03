import React, { useState } from "react";
import "./Prospects.css";

const initialProspects = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    city: "New York",
    jobTitle: "Engineer",
    linkedin: "linkedin.com/in/johndoe",
    creationDate: "2024-05-23T18:00:00",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    city: "San Francisco",
    jobTitle: "Designer",
    linkedin: "linkedin.com/in/janesmith",
    creationDate: "2024-05-23T18:00:00",
  },
  // Add more prospect data here
];

const Prospects = ({ onSelectProspect }) => {
  const [prospects, setProspects] = useState(initialProspects);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProspects = prospects.filter((prospect) =>
    prospect.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="prospects-container">
      <div className="prospects-header">
        <h2>Prospects</h2>
        <input
          type="text"
          placeholder="Search prospects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Job Title</th>
            <th>LinkedIn</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredProspects.map((prospect) => (
            <tr key={prospect.id} onClick={() => onSelectProspect(prospect)}>
              <td>{prospect.name}</td>
              <td>{prospect.email}</td>
              <td>{prospect.city}</td>
              <td>{prospect.jobTitle}</td>
              <td>
                <a
                  href={`https://${prospect.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {prospect.linkedin}
                </a>
              </td>
              <td>{new Date(prospect.creationDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prospects;
