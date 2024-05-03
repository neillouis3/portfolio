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
        container

        "
    >
      <Router>
        <HeaderBanner/>
        <div
            class="
              container
              flex
              w-9/12
              gap-4

              z-10
              -mt-5
            "
        >
          <div
            class="
              container
              rounded-lg
              border-2
              border-black
              w-72
              h-screen
              bg-white
            "
          >
            <Profile/>
            <Social/>
          </div>
          <div
            class="
              container

            "
          >
            <NavBar/>
          </div>
          
          
          <Routes>
            <Route exact path="/" element={<Index/>} />
          </Routes>

        </div>
       
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
