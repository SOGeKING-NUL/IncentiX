import React, { useState } from 'react';
import Select from 'react-select';
import { FaGithub } from 'react-icons/fa';
import { Sidebar } from '../shared/Sidebar';

const CreateBounty = () => {
  // State for issue URL, amount, description, selected currency, etc.
  const [issueUrl, setIssueUrl] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USDC');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [daysSinceOpened, setDaysSinceOpened] = useState(0);

  // Currency options for the dropdown
  const currencyOptions = [
    { value: 'USDC', label: 'USDC' },
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
  ];

  // Handler to create bounty
  const handleCreateBounty = () => {
    // Handle logic to create the bounty, such as API call or updating the state.
    alert('Bounty created successfully!');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar type="maintainer" />

      <div className="flex flex-col items-center text-white w-full p-8">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Create Bounty</h1>
          <p className="text-lg text-gray-600 mb-6">Create a new bounty and get it published on GitHub</p>

          {/* Issue URL */}
          <div className="mb-6">
            <label htmlFor="issueUrl" className="block text-lg font-semibold text-gray-800">
              Issue URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="issueUrl"
              placeholder="Enter the issue URL you want to assign the bounty for"
              value={issueUrl}
              onChange={(e) => setIssueUrl(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Amount Section */}
          <div className="mb-6">
            <label htmlFor="amount" className="block text-lg font-semibold text-black-200">
              Amount <span className="text-red-500">*</span> (USDC)
            </label>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="number"
                id="amount"
                placeholder="Enter the amount to be assigned"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Select
                options={currencyOptions}
                value={{ value: currency, label: currency }}
                onChange={(selected) => setCurrency(selected.value)}
                className="w-1/2"
              />
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Amount that will be given to the contributor once you merge their PR.
            </p>
          </div>

          {/* Issue Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-lg font-semibold text-gray-800">
              Issue Description
            </label>
            <textarea
              id="description"
              placeholder="Describe what the issue is about"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          {/* Issue Details */}
          <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">Issue Details</h3>
            <div className="mt-4 text-gray-600">
              <p><strong>Days Since Opened:</strong> {daysSinceOpened} days</p>
              <p><strong>Assigned To:</strong> {assignedTo || 'No one assigned yet'}</p>
            </div>
          </div>

          {/* Create Bounty Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleCreateBounty}
              className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Create Bounty
            </button>
          </div>

          {/* GitHub and Tag Display */}
          <div className="mt-4 flex items-center space-x-2">
            <FaGithub className="text-xl text-gray-600" />
            <a href={issueUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              View on GitHub
            </a>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
              Bounty-${amount} {currency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBounty;
