import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for cannot be found.</p>
        <p className="text-lg text-gray-500 mb-8">It might have been removed, or you may have entered an incorrect URL.</p>
        <button
          onClick={() => navigate(-1)} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;