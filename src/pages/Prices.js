import React from 'react';
import gd from '../assets/gd.png';
import price from '../assets/price.png';

function Prices(props) {
  return (
    <div className='price'>
        <img 
            src={gd} 
            alt='mori'
            className="pimg"
            />
        <img 
            src={price} 
            alt='mori'
            className="pimg"
          />
    </div>
  )
};

export default Prices;
