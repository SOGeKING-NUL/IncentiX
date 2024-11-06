import React, { useState } from 'react';
import { HiUser, HiMail, HiLockClosed } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaWallet } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'contributor',
    githubId: '',
    linkedInId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.role === 'maintainer') {
      navigate('/maintainer-dashboard');
    } else {
      navigate('/contributor-dashboard');
    }
    toast.success('Account created successfully!');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In');
    toast.success("Signed in with Google!");
  };

  const handleGitHubSignIn = () => {
    console.log('GitHub Sign-In');
    toast.success("Signed in with GitHub!");
  };

  const handleWalletConnect = () => {
    navigate('/wallet-connection');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="flex flex-col justify-center items-center p-10 w-full max-w-md bg-white shadow-lg rounded-lg border border-blue-200">
        <h1 className="text-3xl font-bold mb-3 text-blue-900">Sign Up</h1>
        <p className="text-md text-gray-600 mb-6">Join Incentix quickly and easily!</p>
        
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex space-x-4">
            <div className="flex items-center w-full border-b border-blue-300 pb-2 mb-4">
              <HiUser className="text-blue-400 w-5 h-5 mx-2" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-1 border-0 focus:outline-none"
              />
           </div>
            <div className="flex items-center w-full border-b border-blue-300 pb-2 mb-4">
              <HiUser className="text-blue-400 w-5 h-5 mx-2" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-1 border-0 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center border-b border-blue-300 pb-2 mb-4">
            <HiMail className="text-blue-400 w-5 h-5 mx-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-blue-300 pb-2 mb-4">
            <HiLockClosed className="text-blue-400 w-5 h-5 mx-2" />
            <input
              type="password"
              name="password"
              placeholder="Create a Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-blue-300 pb-2 mb-4">
            <HiLockClosed className="text-blue-400 w-5 h-5 mx-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-blue-300 pb-2 mb-4">
            <FaGithub className="text-blue-400 w-5 h-5 mx-2" />
            <input
              type="text"
              name="githubId"
              placeholder="GitHub Username"
              value={formData.githubId}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-blue-300 pb-2 mb-4">
            <HiUser className="text-blue-400 w-5 h-5 mx-2" />
            <input
              type="text"
              name="linkedInId"
              placeholder="LinkedIn Profile URL"
              value={formData.linkedInId}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-blue-300 pb-2 mb-4">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-1 border-0 focus:outline-none"
              required
            >
              <option value="contributor">Contributor</option>
              <option value="maintainer">Maintainer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition duration-200"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 flex flex-col items-center">
          <button
            onClick={handleWalletConnect}
            className="flex items-center p-3 bg-indigo-600 text-white rounded-full mb-4 hover:bg-indigo-700 transition duration-200"
          >
            <FaWallet className="w-5 h-5 mr-2" />
            Connect with Wallet
          </button>

          <div className="flex items-center justify-center">
            <p className="text-gray-600">or continue with</p>
            <button
              onClick={handleGoogleSignIn}
              className="ml-4 flex items-center p-3 bg-white border border-blue-300 text-blue-900 rounded hover:bg-blue-100 transition duration-200"
            >
              <FcGoogle className="w-6 h-6 mr-2" />
              Google
            </button>
            <button
              onClick={handleGitHubSignIn}
              className="ml-4 flex items-center p-3 bg-white border border-blue-300 text-blue-900 rounded hover:bg-blue-100 transition duration-200"
            >
              <FaGithub className="w-6 h-6 mr-2" />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
