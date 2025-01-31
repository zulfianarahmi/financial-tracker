import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import FinancialTracker from "../components/FinancialTracker";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<FinancialTracker />} />{" "}
      </Routes>
    </Router>
  );
}

export default AppRouter;
