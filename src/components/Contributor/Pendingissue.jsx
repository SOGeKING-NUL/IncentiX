import React, { useState, useEffect } from 'react';
import { Sidebar } from '../shared/Sidebar';

// Mock data for 20 pending issues
const generateMockIssues = () => {
  const mockIssues = [];
  for (let i = 1; i <= 20; i++) {
    const daysLeft = Math.floor(Math.random() * 3) + 1;
    const status = daysLeft === 1 ? 'red' : daysLeft === 2 ? 'orange' : 'green';
    mockIssues.push({
      id: i,
      title: `Pending Issue ${i}`,
      user: {
        login: `user${i}`,
        avatar_url: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`
      },
      daysLeft,
      status,
      state: Math.random() > 0.5 ? 'open' : 'closed',
      contractMade: true
    });
  }
  return mockIssues;
};

const PendingIssue = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Simulating fetching mock issues (replace this with actual API call if needed)
    setIssues(generateMockIssues());
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar type="contributor" className="w-1/4 h-full text-white " />

      {/* Main content */}
      <div className="flex-1 overflow-auto p-4 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Pending Bounty Issues</h1>
        <p className="text-center text-gray-500 mb-4">
          <em>Here you can find all your pending issues. Note: Each issue is assigned to you for up to 3 days, after which it will be unassigned.</em>
        </p>

        <div className="flex flex-col space-y-4">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="bg-white border border-gray-300 p-4 rounded-lg shadow-md flex flex-col space-y-2"
            >
              <h2 className="text-lg font-semibold text-blue-600">{issue.title}</h2>
              <p className="text-gray-500">Status: {issue.state}</p>
              
              <div className="flex items-center space-x-3">
                <img
                  src={issue.user.avatar_url}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span>{issue.user.login}</span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Days left:</span> {issue.daysLeft} day(s)
                </p>
                <span
                  className={`h-4 w-4 rounded-full ${
                    issue.status === 'green'
                      ? 'bg-green-500'
                      : issue.status === 'orange'
                      ? 'bg-orange-500'
                      : 'bg-red-500'
                  }`}
                ></span>
              </div>

              <p className="text-green-600 font-semibold text-sm mt-2">Contract is made</p>

              <div className="flex items-center space-x-3 mt-4">
                <button
                  className="bg-white text-blue-600 border-2 border-blue-500 rounded-lg py-1 px-2"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  Work on this issue
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 border-2 border-blue-500 rounded-lg py-1 px-2"
                >
                  View This Issue on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingIssue;
