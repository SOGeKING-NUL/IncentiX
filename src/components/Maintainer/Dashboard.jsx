// MaintainerDashboard.jsx
import React, { useEffect, useState } from 'react';
import { GitPullRequest, DollarSign, CheckCircle } from 'lucide-react';
import { githubAPI } from '../../lib/github';
import { useAuthStore } from '../../store/auth';
import { Sidebar } from '../shared/Sidebar';

export const MaintainerDashboard = () => {
  const [bounties, setBounties] = useState([]);
  const [completedBounties, setCompletedBounties] = useState([]);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) {
      githubAPI.setToken(token);
      loadBounties();
    }
  }, [token]);

  const loadBounties = async () => {
    try {
      const issues = await githubAPI.getBountyIssues();
      setBounties(issues.filter(issue => issue.state === 'open'));
      setCompletedBounties(issues.filter(issue => issue.state === 'closed'));
    } catch (error) {
      console.error('Error loading bounties:', error);
    }
  };

  const totalValue = bounties.reduce((acc, bounty) => {
    const match = bounty.body.match(/\/bounty-\$(\d+)/);
    return acc + (match ? parseInt(match[1]) : 0);
  }, 0);

  const completedValue = completedBounties.reduce((acc, bounty) => {
    const match = bounty.body.match(/\/bounty-\$(\d+)/);
    return acc + (match ? parseInt(match[1]) : 0);
  }, 0);

  return (
    <div className="flex">
      {/* Sidebar Component */}
     <Sidebar type="maintainer" />

      {/* Dashboard Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Maintainer Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Active Bounties</p>
                <h2 className="text-3xl font-bold">{bounties.length}</h2>
              </div>
              <GitPullRequest className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Value Available</p>
                <h2 className="text-3xl font-bold">${totalValue}</h2>
              </div>
              <DollarSign className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Completed Bounties</p>
                <h2 className="text-3xl font-bold">{completedBounties.length}</h2>
              </div>
              <CheckCircle className="w-12 h-12 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Active Bounties</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {bounties.map((bounty) => {
                  const match = bounty.body.match(/\/bounty-\$(\d+)/);
                  const bountyAmount = match ? parseInt(match[1]) : 0;

                  return (
                    <div
                      key={bounty.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium">{bounty.title}</h3>
                        <p className="text-sm text-gray-500">
                          {bounty.repository.full_name}
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          {bounty.labels.map((label) => (
                            <span
                              key={label.id}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: `#${label.color}`,
                                color: parseInt(label.color, 16) > 0x7fffff
                                  ? '#000'
                                  : '#fff',
                              }}
                            >
                              {label.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4 flex items-center space-x-4">
                        <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                          ${bountyAmount}
                        </span>
                        <a
                          href={bounty.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View Issue
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Completed Bounties</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {completedBounties.map((bounty) => {
                  const match = bounty.body.match(/\/bounty-\$(\d+)/);
                  const bountyAmount = match ? parseInt(match[1]) : 0;

                  return (
                    <div
                      key={bounty.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium">{bounty.title}</h3>
                        <p className="text-sm text-gray-500">
                          {bounty.repository.full_name}
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          {bounty.labels.map((label) => (
                            <span
                              key={label.id}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: `#${label.color}`,
                                color: parseInt(label.color, 16) > 0x7fffff
                                  ? '#000'
                                  : '#fff',
                              }}
                            >
                              {label.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4 flex items-center space-x-4">
                        <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                          ${bountyAmount}
                        </span>
                        <a
                          href={bounty.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View Issue
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
