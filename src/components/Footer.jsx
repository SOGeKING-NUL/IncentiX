import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactFormWithFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 font-sans">
      {/* Contact Form Section */}
      <div className="max-w-md mx-auto pt-16 px-4">
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all"
              onChange={handleChange}
              value={formData.message}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg px-5 py-2.5 font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 mt-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-blue-400">About</a>
                </li>
                <li>
                  <a href="/features" className="hover:text-blue-400">Features</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-400">Contact</a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
              <p>Email: incentix@gmail.com</p>
              <p>Phone: (+91) 88XXX44XXX</p>
              <p>Address:  Rohini, Delhi, India</p>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFormWithFooter;