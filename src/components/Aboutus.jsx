import React from 'react';
import TypingEffect from 'react-typing-effect';
import { FaGift, FaUsers, FaAward, FaLock, FaChartBar, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <div className="py-16 text-center bg-black text-white" id="about">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-blue-500" id="about-section">
          About IncentiX - Rewarding Engagements
        </h2>
        <TypingEffect
          text={['Empower Your Ideas with Incentives', 'Transform Engagement into Rewards']}
          className="text-2xl font-semibold text-blue-400"
        />
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          IncentiX is a gamified platform that encourages innovation and participation through meaningful incentives. We use AI-driven personalization and real-time analytics to offer dynamic rewards for every action, making every interaction valuable and engaging.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Uniform Box Style with White Background and Blue Shadow */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl hover:shadow-blue-400 transition-shadow duration-300">
            <FaGift className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Reward System</h3>
            <p className="text-gray-700">
              Earn points and rewards for each interaction, from contributions to referrals, all converted into real incentives.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl hover:shadow-blue-400 transition-shadow duration-300">
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Challenges</h3>
            <p className="text-gray-700">
              Participate in themed challenges and group quests to earn rewards and engage with like-minded innovators.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl hover:shadow-blue-400 transition-shadow duration-300">
            <FaAward className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Achievements & Badges</h3>
            <p className="text-gray-700">
              Track your progress with badges and leaderboard rankings as you accomplish goals and achieve milestones.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl hover:shadow-blue-400 transition-shadow duration-300">
            <FaLock className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Private</h3>
            <p className="text-gray-700">
              Experience a secure platform with end-to-end encryption, ensuring your data and rewards remain private and protected.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl hover:shadow-blue-400 transition-shadow duration-300">
            <FaChartBar className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Analytics</h3>
            <p className="text-gray-700">
              Stay informed with live analytics that track engagement levels, reward earnings, and participation trends.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl hover:shadow-blue-400 transition-shadow duration-300">
            <FaRocket className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation Booster</h3>
            <p className="text-gray-700">
              Access personalized tools and resources that inspire creativity and accelerate your project's growth and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
