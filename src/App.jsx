
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MaintainerDashboard } from './components/maintainer/Dashboard';
import { ContributorDashboard } from './components/contributor/Dashboard';
import LandingPage from './pages/Landingpage.jsx';
import About from './components/Aboutus.jsx';

import WalletConnection from './components/Walletconnection.jsx';
import NotRoutedDefined from './components/Error404.jsx';


import Profile from "./pages/Profile.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import RoleSelection from './components/Question.jsx';


const App = () => {
  const {isAuthenticated} = useAuth0();

  return (
    <Router>

      <div className="flex min-h-screen bg-gray-100">
        
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
          
            <Route path="/wallet-connection" element={<WalletConnection />} />

            {/* Dashboard Routes */}
            <Route path="/maintainer" element={<MaintainerDashboard />} />
            <Route path="/contributor" element={<ContributorDashboard />} />
            <Route path="/404" element={<NotRoutedDefined />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/role" element={<RoleSelection />} />
       
        

            {/* Redirect for undefined routes */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </main>
      </div>
      <Toaster position="top-right" />
    </Router>

      
           
           
           
     
  );
};

const Landing = () => {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <About />
    </div>

  );
};



export default App;
