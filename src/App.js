import React from 'react';
import './i18n';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Platform from './pages/PlatformPage/Platform';
import Solution from './pages/SolutionPage/Solution';
import Products from './pages/ProductsPage/Products';
import About from './pages/AboutPage/About';
import Contact from './pages/ContactPage/Contact';
import Main from './pages/MainPage/Main';
import DaasPano from './pages/DaasPanoPage/DaasPanoPage';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Platform" element={<Platform />} />
      <Route path="/Solution" element={<Solution />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/DaasPano" element={<DaasPano />} />
    </Routes>
  </BrowserRouter>
);

export default App;
