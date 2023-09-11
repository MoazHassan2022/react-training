import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage/Login';
import HomePage from './Components/HomePage/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
