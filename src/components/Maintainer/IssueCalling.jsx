import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sidebar } from '../shared/Sidebar';

const IssuesFetcher = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [bountyAssigned, setBountyAssigned] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState(null);
  const [bountyAmount, setBountyAmount] = useState('');

  // GitHub API URL
  const GITHUB_API_URL = 'https://api.github.com/issues';
  
  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      setError('');
      try {
        // Fetch issues with the label 'incentix-bounty' from GitHub
        const res = await axios.get(
          'https://api.github.com/search/issues?q=label:incentix-bounty'
        );
        setIssues(res.data.items || []);  // Ensure issues is never null
      } catch (err) {
        setError('Failed to fetch issues');
        console.error('Error fetching issues:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchIssues();
  }, []);

  const openModal = (issueId) => {
    setSelectedIssueId(issueId);
    setBountyAmount(''); // Reset bounty amount on each open
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAssignBounty = () => {
    if (selectedIssueId && bountyAmount) {
      setBountyAssigned((prev) => ({
        ...prev,
        [selectedIssueId]: { amount: bountyAmount, currency: 'USD' },
      }));
      closeModal();
    }
  };

  const handleRemoveBounty = (issueId) => {
    setBountyAssigned((prev) => {
      const updated = { ...prev };
      delete updated[issueId];  // Remove bounty for the issue
      return updated;
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 text-white">
        <Sidebar type="maintainer" />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Incentix Bounty Issues
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the Incentix Bounty Issues page. Here you can find all the issues labeled with
          the "incentix-bounty" tag on GitHub. These issues are open for contributions, and you can assign a bounty to them.   
        </p>

        {loading && <p className="text-center text-xl text-blue-500">Loading issues...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="space-y-4">
          {issues && issues.length > 0 ? (
            issues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white border-2 border-blue-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold text-blue-600">{issue.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{issue.body || 'No description available'}</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Status: </strong>{issue.state === 'open' ? 'Open' : 'Closed'}
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  {/* User Profile */}
                  <img
                    src={issue.user?.avatar_url || '/default-avatar.png'}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-600">{issue.user?.login || 'Unknown user'}</span>
                </div>
                
                {/* Bounty Controls */}
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => openModal(issue.id)}
                    className="bg-white text-blue-600 border-2 border-blue-500 rounded-lg py-2 px-4"
                    disabled={bountyAssigned[issue.id]}
                  >
                    Create Bounty
                  </button>
                  <button
                    onClick={() => handleRemoveBounty(issue.id)}
                    className="bg-white text-blue-600 border-2 border-blue-500 rounded-lg py-2 px-4"
                    disabled={!bountyAssigned[issue.id]}
                  >
                    Remove Bounty
                  </button>
                </div>

                {/* Bounty Info */}
                {bountyAssigned[issue.id] && (
                  <div className="mt-2 text-green-600">
                    <p>
                    Smart Contract holding amount {bountyAssigned[issue.id].amount} {bountyAssigned[issue.id].currency} is ready to be deployed when assigned.
                    </p>
                  </div>
                )}

                <a
                  href={issue.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 inline-block"
                >
                  View Issue on GitHub
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No issues found</p>
          )}
        </div>
      </div>

      {/* Modal for Bounty Assignment */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Assign Bounty</h2>
            <label className="block text-gray-700 mb-2">Bounty Amount (USD):</label>
            <input
              type="number"
              className="w-full border-2 border-gray-300 rounded-lg p-2 mb-4"
              value={bountyAmount}
              onChange={(e) => setBountyAmount(e.target.value)}
              placeholder="Enter bounty amount"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 rounded-lg py-2 px-4"
              >
                Cancel
              </button>
              <button
                onClick={handleAssignBounty}
                className="bg-blue-600 text-white rounded-lg py-2 px-4"
              >
                Assign Bounty
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssuesFetcher;
