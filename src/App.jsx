import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MaintainerDashboard } from './components/maintainer/Dashboard';
import { ContributorDashboard } from './components/contributor/Dashboard';
import LandingPage from './pages/Landingpage.jsx';
import About from './components/Aboutus.jsx';
import WalletConnection from './components/Walletconnection.jsx';
import NotFound from './components/NotFound.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import RoleSelection from './components/Question.jsx';
import ContributorProfile from './pages/Profile/ContributorProfile.jsx';
import MaintainerProfile from './pages/Profile/Maintainerprofile.jsx';
import CreateBounty from './components/Maintainer/CreateBounty.jsx';
import Docs from './components/Docs.jsx';
import Repositories from './components/Repository.jsx';
import SolveBounties from './components/Contributor/SolveBounties.jsx';
import Repocalling from './components/Contributor/RepoCalling.jsx';
import WalletConnector from './components/walletConnect.jsx'; 
import ConnectWalletModal from './components/connectwithmodal.jsx';
import IssuesFetcher from './components/Maintainer/IssueCalling.jsx';

import ContactFormWithFooter from './components/Footer.jsx';
import ReviewSection from './components/Review.jsx';

import IssuesList from './components/Contributor/AllIssuesforconti.jsx';
import MaintainerDash from './components/Maintainer/AssignedIssues.jsx';


import PendingIssue from './components/Contributor/Pendingissue.jsx';
import Settings from './components/Settings.jsx';

import ContributorEarnings from './components/Earning.jsx';


const App = () => {
  const { isAuthenticated } = useAuth0();

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

            {/* Sample Route -> Remove krdunga abhi  */}
            <Route
              path="/repositories"
              element={<Repositories /> }
            />

            <Route path="/role" element={<RoleSelection />} />
            <Route path="/contributor/profile" element={<ContributorProfile />} />
            <Route path="/maintainer/profile" element={<MaintainerProfile />} />
            <Route path="/maintainer/bounties" element={<CreateBounty />} />
            <Route path="/contributor/bounties" element={<SolveBounties />} />
            <Route path="/contributor/repos" element={<Repocalling />} />
            <Route path="/contributor/issues" element={<IssuesList />} />
            <Route path="/contributor/earnings" element={<ContributorEarnings />} />

            <Route path="/contributor/pendingissues" element={<PendingIssue />} />


           <Route path="/maintainer/issues" element={<IssuesFetcher />} />
            <Route path="/maintainer/assignissues" element={<MaintainerDash />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/connect" element={<WalletConnector />} />
            <Route path="lll" element={<IssuesFetcher />} />
            <Route path="/maintainer/settings" element={<Settings />} />

            <Route path="*" element={<NotFound />} />
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
      <ReviewSection/>
      <ContactFormWithFooter/>
    </div>

  );
};

export default App;