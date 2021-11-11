import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Viagens from './pages/Viagens'
import Inscrevase from './pages/Inscreavase'
import Painel from './pages/Painel'



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/viagens" element={<Viagens />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/inscrevase" element={<Inscrevase />} />
      <Route exact path="/painel" element={<Painel />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
  

