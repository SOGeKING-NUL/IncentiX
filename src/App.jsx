import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage.jsx";
import About from "./components/Aboutus.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import WalletConnection from "./components/Walletconnection.jsx";

const App = () => {

  return (

    <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/wallet-connection" element={<WalletConnection />} />
                         

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