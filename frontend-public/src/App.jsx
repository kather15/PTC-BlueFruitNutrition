import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Pay from "./pages/Pay/pay";
import Contact from "./pages/Contact/Contact"; 


import Products from "./pages/Products/Product2";


function App() {


  return (
    <>
    
      <Nav />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contact" element={<Contact/>} />
      
      </Routes>

      <Footer />
    </>
  );
}

export default App;