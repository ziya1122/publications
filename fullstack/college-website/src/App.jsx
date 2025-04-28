import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Publications from './pages/Publications';
import Achievements from './pages/Achievements';
import Collaborations from './pages/Collaborations';
import Form from './pages/login'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/login" element={< Form/>} />


      </Routes>
    </>
  );
}

export default App;

