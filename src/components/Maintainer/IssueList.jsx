// IssueList.jsx
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IssueList = ({ selectedRepo, setSelectedIssue }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${selectedRepo.owner.login}/${selectedRepo.name}/issues`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('githubToken')}`,
            },
          }
        );
        setIssues(response.data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, [selectedRepo]);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Issues in {selectedRepo.name}</h2>
      <ul className="space-y-2">
        {issues.map((issue) => (
          <li
            key={issue.id}
            onClick={() => setSelectedIssue(issue)}
            className="cursor-pointer p-2 rounded hover:bg-emerald-100"
          >
            #{issue.number}: {issue.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;*/
