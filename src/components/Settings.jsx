import React, { useState } from 'react';
import { FaGithub, FaKey } from 'react-icons/fa';
import Select from 'react-select';
import { Sidebar } from '../components/shared/Sidebar';

const Settings = () => {
  const [username, setUsername] = useState('Arsh Tiwari'); // Example username
  const [accessToken, setAccessToken] = useState('');
  const [syncFrequency, setSyncFrequency] = useState('daily');
  const [notifications, setNotifications] = useState(true);

  // Sync frequency options
  const syncOptions = [
    { value: 'hourly', label: 'Hourly' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
  ];

  // Function to handle save settings
  const handleSaveSettings = () => {
    // Here we would send the data to an API or localStorage
    alert('Settings saved successfully!');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar type="user" />

      <div className="flex flex-col items-center text-white w-full p-8">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Settings</h1>
          <p className="text-lg text-gray-600 mb-6">Manage your GitHub integration settings and preferences</p>

          {/* GitHub Username */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-lg font-semibold text-gray-800">
              GitHub Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your GitHub username"
            />
          </div>

          {/* Access Token */}
          <div className="mb-6">
            <label htmlFor="accessToken" className="block text-lg font-semibold text-gray-800">
              Access Token <FaKey className="inline ml-2 text-gray-600" />
            </label>
            <input
              type="password"
              id="accessToken"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your GitHub access token"
            />
            <p className="mt-2 text-gray-500 text-sm">This token will be used to authenticate with GitHub.</p>
          </div>

          {/* Sync Frequency */}
          <div className="mb-6">
            <label htmlFor="syncFrequency" className="block text-lg font-semibold text-gray-800">
              Sync Frequency
            </label>
            <Select
              id="syncFrequency"
              options={syncOptions}
              value={syncOptions.find((option) => option.value === syncFrequency)}
              onChange={(selected) => setSyncFrequency(selected.value)}
              className="w-full mt-2"
            />
            <p className="mt-2 text-gray-500 text-sm">
              Choose how often to sync data with GitHub.
            </p>
          </div>

          {/* Notifications Toggle */}
          <div className="mb-6 flex items-center">
            <label htmlFor="notifications" className="block text-lg font-semibold text-gray-800 mr-4">
              Enable Notifications
            </label>
            <input
              type="checkbox"
              id="notifications"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 mt-1 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSaveSettings}
              className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Save Settings
            </button>
          </div>

          {/* GitHub Icon */}
          <div className="mt-6 flex items-center space-x-2">
            <FaGithub className="text-xl text-gray-600" />
            <span className="text-gray-600">GitHub Integration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
