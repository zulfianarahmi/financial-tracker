import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Features from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import FinancialTracker from "./components/FinancialTracker";

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Features />
              <About />
              <Contact />
              <Footer />
            </div>
          }
        />

        <Route path="/tracker" element={<FinancialTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
