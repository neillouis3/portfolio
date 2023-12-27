import React from 'react';
import './App.css';
import HeaderBanner from './components/headerBanner';
import NavBar from './components/navBar';
import Profile from './components/profile';
import Index from './components/pages/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Social from './components/social';
import Footer from './components/footer';


function App() {
  return (
    <div
      class="
        bg-gray-dark
        container
        w-9/12
      "
    >
      <Router>
        <HeaderBanner/>
        <NavBar/>
        <Profile/>
        <Routes>
          <Route exact path="/" element={<Index/>} />
        </Routes>
        <Social/>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
