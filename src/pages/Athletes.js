import React from 'react';
import { Link } from 'react-router-dom';
import wyattProfile from '../assets/wyattProfile.png';
import mattProfile from '../assets/mattProfile.png';
import krisProfile from '../assets/krisProfile.png';

function Athletes(props) {
  return (
    <div className='app'>
      <div className='reviews' >
      <h1>
        Our Athletes
      </h1>
        <div className='review'>
<Link to='/matt'>
        <img 
            src={mattProfile} 
            alt='matt football profile'
            className="reviews"
            />
</Link>
<Link to='/wyatt'>
        <img 
            src={wyattProfile} 
            alt='wyatt athlete profile'
            className="reviews"
          />
</Link>
<Link to='/kris'>
        <img 
            src={krisProfile} 
            alt='kris baseball profile'
            className="reviews"
        />
</Link>
    </div>
  </div>
</div>
  )
};

export default Athletes;
