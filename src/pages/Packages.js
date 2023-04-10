import React from 'react';
import free from '../assets/free.png'
import gd from '../assets/gd.png'
import partner from '../assets/partner.png'

function Packages(props) {
  return (
      <div className='package'>
        <h1>  DEALS & PACKAGES </h1>
          <img 
            src={gd} 
            alt='mori'
            className="pimg"
          />

        <img 
          src={free} 
          alt='mori'
          className="pimg"
        />
        
        <img 
          src={partner} 
          alt='mori'
          className="pimg"
        />

    </div>
  )
}

export default Packages;
