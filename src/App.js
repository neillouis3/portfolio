import React from 'react';
import './App.css';

import Index from './components/pages/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div 
      class="bg-blue"
      className="App">
      <Router>
    
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>

      </Router> 
    </div>
  );
}

export default App;
