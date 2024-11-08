// MaintainerProfile.jsx
import React from 'react';
import { FaGithub, FaUserCircle, FaClipboardList, FaDollarSign, FaShieldAlt } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';

const MaintainerProfile = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
          <FaUserCircle className="w-16 h-16 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
            <p className="text-sm text-gray-500">Maintainer</p>
          </div>
        </div>

        {/* Bio and Info */}
        <div className="mb-8">
          <p className="text-gray-700 mb-4">
            Hi, I'm John Doe, a passionate maintainer of open-source projects. I manage bounties and ensure the smooth running of our projects. I believe in the power of collaboration and strive to support contributors effectively.
          </p>
          <div className="flex space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <FaGithub className="text-xl" />
              <a href="https://github.com/johndoe" className="hover:text-blue-500">GitHub</a>
            </div>
            <div className="flex items-center space-x-2">
              <BsFillGearFill className="text-xl" />
              <span>Admin</span>
            </div>
          </div>
        </div>

        {/* Bounties and Earnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">Active Bounties</h3>
            <p className="text-xl font-bold text-gray-700">12</p>
            <div className="flex items-center space-x-2 text-green-500">
              <FaClipboardList />
              <span>Manage bounties</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">Earnings</h3>
            <p className="text-xl font-bold text-gray-700">$5,500</p>
            <div className="flex items-center space-x-2 text-yellow-500">
              <FaDollarSign />
              <span>Track earnings</span>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow mb-8">
          <h3 className="text-lg font-semibold text-gray-800">Security</h3>
          <p className="text-sm text-gray-500 mb-4">Ensure the safety of the platform and contributors.</p>
          <div className="flex items-center space-x-2 text-red-600">
            <FaShieldAlt />
            <span>Enable 2FA</span>
          </div>
        </div>

        {/* Settings Button */}
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MaintainerProfile;
