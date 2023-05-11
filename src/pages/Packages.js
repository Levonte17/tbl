import React from 'react';
import free from '../assets/free.png'
import gd from '../assets/gd.png'

function Packages(props) {
  return (
      <div className='package'>
        <h1>  DEALS & PACKAGES </h1>
        <h2> 
          We offer discounts for group training sessions
          <br/>
          FREE training session when you collect 10 subscribers and 10 google reviews
        </h2>
          <img 
            src={gd} 
            alt='group dscounts'
            className="sales"
          />

        <img 
          src={free} 
          alt='subscribers and reviews'
          className="sales"
        />
    </div>
  )
}

export default Packages;
