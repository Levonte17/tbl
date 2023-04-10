import React from 'react'
import r from '../assets/r.png';
import rr from '../assets/rr.png';
import rrr from '../assets/rr.png';
import rrrr from '../assets/rr.png';
import rrrrr from '../assets/rr.png';
import rrrrrr from '../assets/rr.png';

function Reviews(props) {
  return (
    <div className='reviews' >
      <h1>
        Our Reviews
      </h1>
        <div className='review'>

        <img 
            src={r} 
            alt='mori'
            className="reviews"
            />
        <img 
            src={rr} 
            alt='mori'
            className="reviews"
          />
        <img 
            src={rrr} 
            alt='mori'
            className="reviews"
          />

    <br/>

        <img 
            src={rrrr} 
            alt='mori'
            className="reviews"
          />
        <img 
            src={rrrrr} 
            alt='mori'
            className="reviews"
          />
        <img 
            src={rrrrrr} 
            alt='mori'
            className="reviews"
          />
      
        </div>
    </div>
  )
}

export default Reviews
