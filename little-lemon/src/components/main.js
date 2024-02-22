import React from 'react';
import Card from './card';

const Main = () => {
  return (
    <main className="main">
      <div className='menu-title'>
        <h1>This weeks specials !</h1>
        <button className='btn'>Online menu</button>
      </div>
      <div className="card-container">
        <Card 
          title="Greek Salad" 
          price="$12.99" 
          description="A fresh and healthy Greek salad with tomatoes, cucumbers, olives, and feta cheese." 
          imgSrc="/path/to/image.jpg"
        />
        {/* Add more Card components as needed */}
      </div>
    </main>
  );
};

export default Main;