import React from 'react';
import axios from "axios";
import Login from './components/Login';
import Create from './components/Create';
import {
  BrowserRouter as Router, Routes,Route
} from "react-router-dom";
import './App.css';

function App() {
  const checkStatus = () => {
    
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/create" element = {<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
