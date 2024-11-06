import React, { useState } from 'react';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    navigate('/dashboard');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In clicked');
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center p-10 w-full max-w-md bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-2 text-indigo-800">Login</h1>
        <p className="text-md text-gray-500 mb-6">Welcome back! Please login to your account.</p>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex items-center border-b border-indigo-600 pb-2 mb-4">
            <HiMail className="text-indigo-600 w-5 h-5 mx-2" />
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
          <div className="flex items-center border-b border-indigo-600 pb-2 mb-4">
            <HiLockClosed className="text-indigo-600 w-5 h-5 mx-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-1 border-0 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => console.log('Forgot Password Clicked')}
            className="text-indigo-800 text-sm hover:underline mb-4"
          >
            Forgot Password?
          </button>
          <button
            type="submit"
            className="w-full p-3 bg-indigo-800 text-white rounded hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex items-center">
          <p className="text-gray-500">or continue with</p>
          <button
            onClick={handleGoogleSignIn}
            className="ml-4 flex items-center p-2 bg-white border border-indigo-800 text-indigo-800 rounded hover:bg-indigo-100 transition duration-200"
          >
            <FcGoogle className="mr-2 w-5 h-5" />
            Google
          </button>
        </div>
        <p className="mt-4 text-gray-500">
          Don't have an account?
          <a href="/signup" className="text-indigo-800 hover:underline"> Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
