import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 bg-gray-800">
        <div className="text-3xl font-bold">
          <span className="text-blue-500">Incenti</span>X
        </div>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#features" className="text-gray-300 hover:text-white">Features</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 md:px-0">
        {/* Title with Gradient "X" */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Incenti<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">X</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl">
          Empowering innovation through incentivized solutions. IncentiX is your gateway to rewarding creativity and fostering growth within communities and projects.
        </p>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-400">
        © 2024 IncentiX. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
