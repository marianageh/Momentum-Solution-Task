import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Products from './component/Products'; 
import Product from './component/Product';
import Footer from './component/Footer';
import './App.css';



function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />.
          <Route exact path="/products/:id" element={<Product />} />
        </Routes>
        <Footer/>


    </>
  );
}

export default App;
