import React from 'react';
import './App.css';

import Projects from './components/pages/projects';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
    
          <Routes>
            <Route exact path="/" element={<Projects />} />
          </Routes>

      </Router> 
    </div>
  );
}

export default App;
