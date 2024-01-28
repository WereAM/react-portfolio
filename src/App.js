import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import React from 'react';
import Projects from './Components/Projects';
import Connect from './Components/Connect';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route index element={<Home />}/> 
          <Route path="projects" element={<Projects />}/> 
          <Route path="connect" element={<Connect />}/> 
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

