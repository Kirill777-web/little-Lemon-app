
import './App.css';
import Navbar from './components/navbar';
import React from 'react';
import Main from './components/main';
import Header from  './components/header';
import Footer from './components/footer';


function App() {
  return (
      <div className='App'>
      <div className='navbar-section'>
        <Navbar />
      </div>
      <div className='header-section'>
        <Header />
      </div>
      <div className='main-section'>
        <Main />
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
