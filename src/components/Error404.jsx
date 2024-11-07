// NotRoutedDefined.jsx

import React from 'react';
import { FaRegFrownOpen } from 'react-icons/fa'; // Using a sad face icon to indicate error
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const NotRoutedDefined = () => {
  return (
    <div className="flex flex-col flex justify-center item-center items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center    ">
        <FaRegFrownOpen className="text-6xl flex justify-center item-center  text-gray-600 mb-10" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-4">
          The page you're looking for doesn't exist. Our team is working hard to bring it online. Stay tuned!
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Error Code: <span className="font-semibold">404</span>
        </p>

        <div className="flex justify-center item-center space-x-4">
          <Link
            to="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Go Back Home
          </Link>
          <Link
            to="/docs"
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
          >
            Read Our Docs
          </Link>
        </div>

        <div className="mt-6">
          
        </div>
      </div>
    </div>
  );
};

export default NotRoutedDefined;
