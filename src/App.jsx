import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage.jsx";
import About from "./components/Aboutus.jsx";
import WalletConnection from "./components/Walletconnection.jsx";
import Profile from "./pages/Profile.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const {isAuthenticated} = useAuth0();
  return (

    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/wallet-connection" element={<WalletConnection />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
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