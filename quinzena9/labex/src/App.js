import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Viagens from './pages/Viagens'



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/viagens" element={<Viagens />} />
      <Route exact path="/login" element={<Login />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
  

