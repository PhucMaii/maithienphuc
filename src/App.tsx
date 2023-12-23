import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import './App.css';
import { AboutPage } from './pages/About/AboutPage';
import { ContactPage } from './pages/Contact/ContactPage';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
