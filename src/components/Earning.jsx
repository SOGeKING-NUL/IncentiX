import React from 'react';
import { CheckCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Sidebar } from '../components/shared/Sidebar';
import dayjs from 'dayjs';


const ContributorEarnings = () => {
  const issues = [
    { id: 1, title: 'Fix login authentication bug', dateMerged: '2024-10-12', bounty: 50 },
    { id: 2, title: 'Implement dark mode feature', dateMerged: '2024-09-28', bounty: 120 },
    { id: 3, title: 'Optimize database queries', dateMerged: '2024-09-10', bounty: 200 },
    { id: 4, title: 'Improve page load time', dateMerged: '2024-08-25', bounty: 80 },
    { id: 5, title: 'Refactor backend API', dateMerged: '2024-08-05', bounty: 60 },
    { id: 6, title: 'Update user profile page', dateMerged: '2024-07-30', bounty: 90 },
    { id: 7, title: 'Fix homepage responsive design', dateMerged: '2024-07-15', bounty: 40 },
    { id: 8, title: 'Integrate Stripe payment gateway', dateMerged: '2024-06-20', bounty: 150 },
    { id: 9, title: 'Add multi-language support', dateMerged: '2024-06-05', bounty: 200 },
    { id: 10, title: 'Fix footer layout issue', dateMerged: '2024-05-25', bounty: 30 },
    { id: 11, title: 'Set up continuous integration pipeline', dateMerged: '2024-05-10', bounty: 250 },
    { id: 12, title: 'Add sorting feature to product listings', dateMerged: '2024-04-15', bounty: 80 },
    { id: 13, title: 'Improve user authentication flow', dateMerged: '2024-03-10', bounty: 60 },
    { id: 14, title: 'Fix bug in product search feature', dateMerged: '2024-02-28', bounty: 40 },
    { id: 15, title: 'Implement email notification system', dateMerged: '2024-02-10', bounty: 150 },
    { id: 16, title: 'Refactor user settings page', dateMerged: '2024-01-20', bounty: 120 },
    { id: 17, title: 'Improve accessibility for visually impaired users', dateMerged: '2024-01-05', bounty: 180 },
    { id: 18, title: 'Add dark mode toggle to the app', dateMerged: '2023-12-30', bounty: 50 },
    { id: 19, title: 'Fix security vulnerability in payment system', dateMerged: '2023-12-15', bounty: 250 },
    { id: 20, title: 'Update user dashboard with new stats', dateMerged: '2023-11-25', bounty: 100 },
    { id: 21, title: 'Refactor homepage design for better SEO', dateMerged: '2023-11-10', bounty: 130 },
    { id: 22, title: 'Add pagination to the product catalog', dateMerged: '2023-10-30', bounty: 70 },
    { id: 23, title: 'Fix bug in user notifications system', dateMerged: '2023-10-15', bounty: 90 },
    { id: 24, title: 'Implement feature flags for beta testing', dateMerged: '2023-09-20', bounty: 110 },
    { id: 25, title: 'Fix bug in checkout flow', dateMerged: '2023-09-05', bounty: 130 },
    { id: 26, title: 'Add file upload functionality to profile settings', dateMerged: '2023-08-25', bounty: 140 },

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

  const totalBountyEarned = issues.reduce((acc, issue) => acc + issue.bounty, 0);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar type="contributor" />
      <div className="flex-1 p-6 bg-white overflow-hidden rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">Contributor Earnings Summary</h1>

        {/* Earnings Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <CurrencyDollarIcon className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <p className="text-gray-600">Total Bounty Earned</p>
              <p className="text-2xl font-semibold text-blue-600">${totalBountyEarned}</p>
            </div>
          </div>
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <CheckCircleIcon className="w-8 h-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-gray-600">Issues Closed</p>
              <p className="text-2xl font-semibold text-blue-600">{issues.length}</p>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Transaction History</h2>
        <div className="overflow-x-auto shadow-sm rounded-lg">
          <table className="w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Issue</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Date Merged</th>
                <th className="py-2 px-4 text-left font-medium text-gray-600">Bounty Earned</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <a href="#" className="text-blue-500 hover:underline">{issue.title}</a>
                  </td>
                  <td className="py-3 px-4">{dayjs(issue.dateMerged).format('DD MMM YYYY')}</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">${issue.bounty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContributorEarnings;
