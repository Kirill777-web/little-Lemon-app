import './App.css';
import Navbar from './components/navbar';
import React from 'react';
import Main from './components/main';
import Header from  './components/header';
import Footer from './components/footer';
import HamburgerMenu from './components/hamburger_menu';
import OrderOnline from './components/orderOnline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <HamburgerMenu />
        <div className='navbar-section'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/" element={
            <>
              <div className='header-section'>
                <Header />
              </div>
              <div className='main-section'>
                <Main />
              </div>
            </>
          } />
        </Routes>
        <div className='footer-section'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;