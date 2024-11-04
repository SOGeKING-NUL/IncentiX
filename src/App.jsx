import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage.jsx";


const App = () => {

  return (

    <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
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
</div>
  );
};

export default App;