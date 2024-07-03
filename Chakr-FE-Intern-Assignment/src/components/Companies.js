import React, { useState } from "react";
import "./Companies.css";

const initialCompanies = [
  {
    id: 1,
    name: "TestA",
    domain: "testa.com",
    owner: "OwnerA",
    creationDate: "2024-05-24T06:08:00",
    linkedin: "linkedin.com/in/testa",
    address: "AddressA",
  },
  {
    id: 2,
    name: "CASPR Software",
    domain: "casprsoftware.com",
    owner: "OwnerB",
    creationDate: "2024-05-24T04:42:00",
    linkedin: "linkedin.com/in/caspr",
    address: "AddressB",
  },
  {
    id: 3,
    name: "TestB",
    domain: "testb.de",
    owner: "OwnerC",
    creationDate: "2024-05-24T00:31:00",
    linkedin: "linkedin.com/in/testb",
    address: "AddressC",
  },
  // Add more company data here
];

const Companies = () => {
  const [companies, setCompanies] = useState(initialCompanies);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="companies-container">
      <div className="companies-header">
        <h2>Companies</h2>
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain Name</th>
            <th>Account Owner</th>
            <th>Creation Date</th>
            <th>LinkedIn</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.domain}</td>
              <td>{company.owner}</td>
              <td>{new Date(company.creationDate).toLocaleString()}</td>
              <td>
                <a
                  href={`https://${company.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.linkedin}
                </a>
              </td>
              <td>{company.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Companies;
