// RoleSelection.jsx

import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null); // Track selected role
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Handle the selection of a role
  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  // Handle the "Get Started" button click
  const handleGetStarted = () => {
    if (selectedRole) {
      navigate(`/${selectedRole.toLowerCase()}`); // Redirect based on selected role
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-800 to-black p-6">
      <h1 className="text-3xl font-bold text-white mb-8">
  Choose Your Role in Incenti<span className="text-blue-500">X</span>
</h1>
      <p className="text-lg text-white mb-6">
        Select the role you would like to proceed with:
      </p>

      <div className="space-y-4 w-full max-w-md">
        {/* Contributor Option */}
        <div
          onClick={() => handleSelectRole('Contributor')}
          className={`flex items-center justify-between p-4 shadow-lg rounded-lg border transition duration-200 cursor-pointer ${
            selectedRole === 'Contributor' ? 'border-blue-600 bg-blue-100' : 'border-gray-300 bg-white'
          } hover:bg-blue-50`}
        >
          <div className="flex items-center space-x-3">
            <FaCheckCircle
              className={`text-2xl ${
                selectedRole === 'Contributor' ? 'text-blue-600' : 'text-gray-300'
              }`}
            />
            <span className="text-lg font-medium text-gray-800">Contributor</span>
          </div>
          <span className="text-blue-500">👤</span> {/* Contributor icon */}
        </div>

        {/* Maintainer Option */}
        <div
          onClick={() => handleSelectRole('Maintainer')}
          className={`flex items-center justify-between p-4 rounded-lg border transition duration-200 cursor-pointer ${
            selectedRole === 'Maintainer' ? 'border-blue-600 bg-blue-100' : 'border-gray-300 bg-white'
          } hover:bg-blue-50`}
        >
          <div className="flex items-center space-x-3">
            <FaCheckCircle
              className={`text-2xl ${
                selectedRole === 'Maintainer' ? 'text-blue-600' : 'text-gray-300'
              }`}
            />
            <span className="text-lg font-medium text-gray-800">Maintainer</span>
          </div>
          <span className="text-green-500">🔧</span> {/* Maintainer icon */}
        </div>
      </div>

      {/* Get Started Button */}
      <button
        onClick={handleGetStarted}
        disabled={!selectedRole}
        className={`mt-8 px-6 py-2 text-lg font-semibold rounded-md text-white transition duration-200 ${
          selectedRole ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default RoleSelection;
