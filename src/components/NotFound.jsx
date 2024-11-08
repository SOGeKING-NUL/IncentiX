// NotFound.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  // Go back to the previous page
  const handleGoBack = () => {
    navigate(-1); // -1 goes to the previous page in history
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Icon Symbol */}
      <div className="text-6xl mb-4">🚫</div>
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">Oops! The page you are looking for does not exist.</p>
      <div className="flex space-x-4">
        {/* Go Back Button */}
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Go Back
        </button>
        {/* Read Our Docs Button */}
        <Link to="/docs" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Read Our Docs
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
