import React from 'react';
import { Link } from 'react-router-dom';
import Appetizers from './appetizers';
import Soup from './soupsSection';
import Salads from './saladsSections';
import Entrees from './entreesSection';
import Desserts from './dessertsSection';
import Beverage from './bevaragesSection';
import { appetizers, soups, salads, entrees, desserts, beverages  } from './menuItems'; // Ensure this import path is correct

const Menu = () => {
  return (
    <main>
      <header className="header">
        <h1 className='title'>Little Lemon</h1>
        <p className='sub-title'>New Brunswick</p>
        <p className='p-description'>Our mission is to provide you with the best dining experience. We offer a variety of dishes and drinks that are sure to satisfy your taste buds. We look forward to serving you!</p>
        <Link to="/reservations" className='btn'>Reserve a Table</Link>
        <img src="/assets/menu.jpg" alt="logo" />
      </header>
      <Appetizers items={appetizers} />
      <Soup items={soups} />
      <Salads items={salads} />
      <Entrees items={entrees} />
      <Desserts items={desserts} />
      <Beverage items={beverages} />
    </main>
  );
};

export default Menu;