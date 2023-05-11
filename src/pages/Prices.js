import React from 'react';
import gd from '../assets/gd.png';
import price from '../assets/price.png';

function Prices(props) {
  return (
    <div className='price'>
      <h1> OUR PRICES </h1>
      <b> All Weekly Plans Come A With Free T-Shirt </b>
      <h2> $30 Per Workout </h2>
      <h2> $50 2 Workouts </h2>
      <h2> $75 3 Workouts </h2>
      <h2> Athletes who workout 3x Per Week earn  
        <b> 1/2 Off online teaching sessions</b> 
      </h2>
        <img 
            src={gd} 
            alt='mori'
            className="sales"
            />
        <img 
            src={price} 
            alt='mori'
            className="sales"
          />
    </div>
  )
};

export default Prices;
