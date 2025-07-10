import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Pay from "./pages/Pay/pay";
import Products from "./pages/Products/Product2";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Pay />} />
        <Route path="/productos" element={<Products />} />
      
      </Routes>
    </>
  );
}

export default App;