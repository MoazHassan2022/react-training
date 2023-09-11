import './App.css';
import React from "react";
import LoginPage from './Components/LoginPage/Login';
import HomePage from './Components/HomePage/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={HomePage} />
        <Route path="login" element={LoginPage} />
      </Routes>
    </Router>
  );
}

export default App;
