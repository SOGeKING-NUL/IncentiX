// ContributorProfile.jsx
import React from 'react';
import { FaGithub, FaUserCircle, FaClipboardCheck, FaTrophy, FaStar } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import { useAuth0 } from "@auth0/auth0-react";

const ContributorProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    isAuthenticated &&(
    <div className="flex flex-col items-center bg-gray-100 p-8 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
          <FaUserCircle className="w-16 h-16 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-gray-500">Contributor</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 mb-4">
            I'm a passionate open-source contributor. I love tackling challenging bounties and making valuable contributions to the community.
          </p>
          <div className="flex space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <FaGithub className="text-xl" />
              <a href={`https://github.com/${user.nickname}`} className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-xl" />
              <span>Top Contributor</span>
            </div>
          </div>
        </div>

        {/* Bounties and Reputation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">Completed Bounties</h3>
            <p className="text-xl font-bold text-gray-700">25</p>
            <div className="flex items-center space-x-2 text-green-500">
              <FaClipboardCheck />
              <span>View completed tasks</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">Reputation</h3>
            <p className="text-xl font-bold text-gray-700">4.8/5</p>
            <div className="flex items-center space-x-2 text-yellow-500">
              <IoMdHeart />
              <span>Earned through contributions</span>
            </div>
          </div>
        </div>

        {/* Badge Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow mb-8">
          <h3 className="text-lg font-semibold text-gray-800">Achievements</h3>
          <div className="flex space-x-4 text-green-600">
            <FaTrophy className="text-3xl" />
            <span>Community Helper Badge</span>
          </div>
        </div>

        <button onClick={handleGoBack} className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
          Go back
        </button>
      </div>
    </div>)
  );
};

export default ContributorProfile;
