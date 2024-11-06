import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className=" bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 md:px-16 lg:px-24  shadow-lg">
        <div className="text-3xl font-bold">
          <span className="text-blue-500">Incenti</span>X
        </div>
        <nav className="space-x-6 flex items-center">
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/features" className="text-gray-300 hover:text-white">Features</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link to="/signin" className="text-gray-300 hover:text-white">Sign In</Link>
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md transition duration-300">Sign Up</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 md:px-0 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-50 rounded-lg blur-2xl -z-10"></div>

        {/* Title with Gradient "X" */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          Incenti<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">X</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-8">
          Empowering innovation through incentivized solutions. IncentiX is your gateway to rewarding creativity and fostering growth within communities and projects.
        </p>

        {/* Get Started Button */}
        <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg transition duration-300">
          Get Started
        </Link>
      </main>

    
    </div>
  );
};

export default LandingPage;
