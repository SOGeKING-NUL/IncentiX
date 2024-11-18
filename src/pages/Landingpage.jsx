import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/connect');
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className=" bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 md:px-16 lg:px-24  shadow-lg">
        <div className="text-3xl font-bold">
          <span className="text-blue-500">Incenti</span>X
        </div>
        <nav className="space-x-6 flex items-center">
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#reviews" className="text-gray-300 hover:text-white">Reviews</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          {isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full shadow-md transition duration-300'
          >
            Log Out
          </button> : <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md transition duration-300"
            onClick={() => loginWithRedirect()}>Sign In</button>}
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
        <p className="text-sm md:text-xl  text-gray-300 max-w-2xl mb-8">
        Transforming Open-Source with immediate crypto rewards for every contribution.
        Empowering developers, fueling innovation, and building a collaborative ecosystem where every effort is recognized instantly.
        </p>

        {/* Just for testing of auth0 */}
        {/* {isAuthenticated && (
          <div>
          <p>{user.name}</p>
          <p>{user.nickname}</p>
          </div>
        )} */}

        {/* Get Started Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg transition duration-300"
          onClick={() => loginWithRedirect({
            connection: "github",
            // scope: "read:user repo",
            scope: "public_repo",
          })}>
          Get Started</button>
      </main>
      

    </div>
  );
};

export default LandingPage;
