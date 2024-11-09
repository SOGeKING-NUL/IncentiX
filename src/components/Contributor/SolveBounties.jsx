import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { FaGithub } from 'react-icons/fa';

import { Sidebar } from '../shared/Sidebar';

const SolveBounties = () => {
  // State variables for MetaMask connection, issues, etc.
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  // Sample issues data for demo purposes
  const sampleIssues = [
    { id: 1, title: 'Fix authentication bug', repo: 'user/repo1', bounty: '50 USDC' },
    { id: 2, title: 'Improve API performance', repo: 'user/repo2', bounty: '100 USDC' },
    { id: 3, title: 'UI Enhancements', repo: 'user/repo3', bounty: '75 USDC' },
  ];

  function WalletRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        // If wallet is ready, redirect
        navigate('/wallet-connection');
    }, []);

    return <LoadingScreen />;
}

  // Load issues data (for now, use sample data)
  useEffect(() => {
    setIssues(sampleIssues);
  }, []);

  // Handler for submitting a pull request (mock implementation)
  const handleSubmitPR = () => {
    alert('Pull request submitted successfully! Awaiting maintainer approval.');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar type="contributor" />

      <div className="flex flex-col items-center text-white w-full p-8">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Solve Bounties</h1>
          <p className="text-lg text-gray-600 mb-6">Browse issues with bounties and start contributing!</p>

          {/* Wallet Connection */}
          <div className="mb-6 flex flex-col items-center">
            <button
              onClick={WalletRedirect}
              className={`py-3 px-6 ${isConnected ? 'bg-green-500' : 'bg-blue-600'} text-white font-semibold rounded-lg hover:bg-blue-700 transition`}
            >
              {isConnected ? `Wallet Connected: ${walletAddress.slice(0, 6)}...` : 'Connect MetaMask Wallet'}
            </button>
          </div>

          {/* Issues Dropdown */}
          <div className="mb-6 w-full">
            <label htmlFor="issues" className="block text-lg font-semibold text-gray-800 mb-2">
              Select an Issue to Work On
            </label>
            <Select
              id="issues"
              options={issues.map(issue => ({ value: issue.id, label: `${issue.title} - ${issue.bounty}` }))}
              value={selectedIssue ? { value: selectedIssue.id, label: `${selectedIssue.title} - ${selectedIssue.bounty}` } : null}
              onChange={(option) => setSelectedIssue(issues.find(issue => issue.id === option.value))}
              className="w-full"
              placeholder="Choose an issue..."
            />
          </div>

          {/* Issue Details */}
          {selectedIssue && (
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800">Issue Details</h3>
              <p className="text-gray-600 mt-2"><strong>Repository:</strong> {selectedIssue.repo}</p>
              <p className="text-gray-600"><strong>Bounty:</strong> {selectedIssue.bounty}</p>
            </div>
          )}

          {/* Submit PR Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmitPR}
              disabled={!selectedIssue}
              className={`py-3 px-6 ${selectedIssue ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white font-semibold rounded-lg transition`}
            >
              Submit Pull Request
            </button>
          </div>

          {/* GitHub and Bounty Display */}
          <div className="mt-4 flex items-center space-x-2">
            <FaGithub className="text-xl text-gray-600" />
            <a
              href={`https://github.com/${selectedIssue?.repo || ''}/issues/${selectedIssue?.id || ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              View on GitHub
            </a>
          </div>

          {selectedIssue && (
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                Bounty: {selectedIssue.bounty}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolveBounties;
