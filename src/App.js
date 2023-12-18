import React from 'react';
import './App.css';
import HeaderBanner from './components/headerBanner';
import NavBar from './components/navBar';
import Profile from './components/profile';
import Index from './components/pages/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Social from './components/social';


function App() {
  return (
    <>
      <Router>
        <Profile/>
        <Routes>
          <Route exact path="/" element={<Index/>} />
        </Routes>
        <Social/>
      </Router> 
    </>
  );
}

export default App;
