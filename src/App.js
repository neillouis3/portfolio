import React from 'react';
import './App.css';

import Index from './components/pages/index';
import PrivatePolicyPage from './components/pages/privatePolicy';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div 
      class="bg-orange"
      className="App">
      <Router>
    
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/privatePolicy" element={<PrivatePolicyPage />} />
          </Routes>

      </Router> 
    </div>
  );
}

export default App;
