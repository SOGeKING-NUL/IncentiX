import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Sidebar } from './components/shared/Sidebar';
import { MaintainerDashboard } from './components/maintainer/Dashboard';
import { ContributorDashboard } from './components/contributor/Dashboard';
import LandingPage from './pages/Landingpage.jsx';
import About from './components/Aboutus.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import WalletConnection from './components/Walletconnection.jsx';
import NotRoutedDefined from './components/Error404.jsx';

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/wallet-connection" element={<WalletConnection />} />

            {/* Dashboard Routes */}
            <Route path="/maintainer" element={<MaintainerDashboard />} />
            <Route path="/contributor" element={<ContributorDashboard />} />
            <Route path="/404" element={<NotRoutedDefined />} />
       
        

            {/* Redirect for undefined routes */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </main>
      </div>
      <Toaster position="top-right" />
    </Router>
  );
};

const Landing = () => (
  <div className="flex flex-col">
    <LandingPage />
    <About />
  </div>
);

export default App;
