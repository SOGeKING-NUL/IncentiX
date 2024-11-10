import React, { useState } from 'react';
import { FaGithub, FaDollarSign } from 'react-icons/fa';
import { Sidebar } from '../components/shared/Sidebar';

const Earnings = () => {
  const [timeFilter, setTimeFilter] = useState('monthly'); // Default filter to monthly

  // Sample data for earnings
  const earningsData = [
    {
      issueTitle: 'Fix login authentication bug',
      bounty: 80,
      date: '2024-10-12',
    },
    {
      issueTitle: 'Implement dark mode feature',
      bounty: 120,
      date: '2024-09-28',
    },
    {
      issueTitle: 'Optimize database queries',
      bounty: 200,
      date: '2024-09-10',
    },
    {
      issueTitle: 'Improve page load time',
      bounty: 80,
      date: '2024-08-25',
    },
  ];

  // Filtered earnings based on selected time period
  const filteredEarnings = earningsData.filter((item) => {
    const today = new Date();
    const itemDate = new Date(item.date);
    const diffTime = today - itemDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (timeFilter === 'daily') return diffDays <= 1;
    if (timeFilter === 'monthly') return diffDays <= 30;
    if (timeFilter === 'yearly') return diffDays <= 365;
    return true;
  });

  // Calculate total earnings based on filtered data
  const totalEarnings = filteredEarnings.reduce((total, item) => total + item.bounty, 0);

  // Function to handle time filter change
  const handleTimeFilterChange = (filter) => {
    setTimeFilter(filter);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar type="contributor" />

      <div className="flex flex-col items-center text-white w-full p-8">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Earnings</h1>
          <p className="text-lg text-gray-600 mb-6">View your earnings from resolved issues on GitHub</p>

          {/* Time Filter */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Select Time Period</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => handleTimeFilterChange('daily')}
                className={`py-2 px-4 font-semibold rounded-lg ${timeFilter === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Daily
              </button>
              <button
                onClick={() => handleTimeFilterChange('monthly')}
                className={`py-2 px-4 font-semibold rounded-lg ${timeFilter === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => handleTimeFilterChange('yearly')}
                className={`py-2 px-4 font-semibold rounded-lg ${timeFilter === 'yearly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Earnings List */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Issues Resolved</h3>
            <div className="space-y-4">
              {filteredEarnings.length > 0 ? (
                filteredEarnings.map((earning, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                      <h4 className="text-gray-800 font-semibold">{earning.issueTitle}</h4>
                      <p className="text-gray-500 text-sm">Resolved on: {earning.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaDollarSign className="text-green-500" />
                      <span className="text-lg font-semibold text-green-600">${earning.bounty}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No earnings for the selected period.</p>
              )}
            </div>
          </div>

          {/* Total Earnings */}
          <div className="flex justify-between items-center mt-6 p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">Total Earnings</h3>
            <div className="flex items-center space-x-2">
              <FaDollarSign className="text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">${totalEarnings}</span>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="mt-6 flex items-center space-x-2">
            <FaGithub className="text-xl text-gray-600" />
            <span className="text-gray-600">View on GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
