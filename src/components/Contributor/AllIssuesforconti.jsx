import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Bounty Modal Component
const BountyModal = ({ issue, onClose }) => {
  if (!issue) return null;

  const bountyLabel = issue.labels.find((label) => label.name.includes('bounty-'));
  const bountyAmount = bountyLabel ? bountyLabel.name.split('-')[1] : 'Not specified';

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Bounty Details</h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Contributor:</span> {issue.user.login}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Bounty Amount:</span> ${bountyAmount}
        </p>
        <p className="text-gray-500 mt-4">This contributor has assigned a bounty to this issue. Take your chance!</p>
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Main Component
const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const GITHUB_API_URL = 'https://api.github.com';

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${GITHUB_API_URL}/search/issues?q=label:incentix-bounty`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIssues(response.data.items);
      } catch (err) {
        setError('Error fetching issues');
      } finally {
        setLoading(false);
      }
    };
    fetchIssues();
  }, [token]);

  const handleAssignIssue = async (issue) => {
    try {
      await axios.post(
        `${GITHUB_API_URL}/repos/${issue.repository_url.split('repos/')[1]}/issues/${issue.number}/comments`,
        { body: 'assign me this issue' },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Assignment request posted on GitHub');
    } catch (err) {
      console.error('Error requesting assignment:', err);
      alert('Failed to request assignment');
    }
  };

  const handleViewBounty = (issue) => {
    setSelectedIssue(issue); // Set the issue data to display in the modal
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Incentix Bounty Issues</h1>
      {loading ? (
        <p className="text-center">Loading issues...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((issue) => (
            <div key={issue.id} className="bg-white border border-blue-500 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-blue-600">{issue.title}</h2>
              <p className="text-gray-500 mb-2">Status: {issue.state}</p>
              <div className="flex items-center mb-4">
                <img src={issue.user.avatar_url} alt="User Avatar" className="w-8 h-8 rounded-full" />
                <span className="ml-2">{issue.user.login}</span>
              </div>
              <button
                className="bg-white text-blue-600 border-2 border-blue-500 rounded-lg py-1 px-2 mr-2"
                onClick={() => handleAssignIssue(issue)}
                disabled={issue.assignee && issue.assignee.login === issue.user.login}
              >
                Assign Me This Issue
              </button>
              <button
                className="bg-white text-blue-600 border-2 border-blue-500 rounded-lg py-1 px-2 mr-2"
                onClick={() => handleViewBounty(issue)}
              >
                View the Bounty
              </button>
              <a
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 border-2 border-blue-500 rounded-lg py-1 px-2"
              >
                View This Issue on GitHub
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Render Bounty Modal if an issue is selected */}
      {selectedIssue && (
        <BountyModal issue={selectedIssue} onClose={() => setSelectedIssue(null)} />
      )}
    </div>
  );
};

export default IssueList;
