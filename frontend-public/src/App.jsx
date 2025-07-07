import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Pay from "./pages/Pay/pay";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Pay />} />
      </Routes>
    </>
  );
}

export default App;
