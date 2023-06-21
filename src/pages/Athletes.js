import React from 'react';
import { Link } from 'react-router-dom';
import wyattProfile from '../assets/wyattProfile.png';
import mattProfile from '../assets/mattProfile.png';
import krisProfile from '../assets/krisProfile.png';
import peytonProfile from '../assets/peytonProfile.png';
import bryceProfile from '../assets/bryceProfile.png';
import brennonProfile from '../assets/brennonProfile.png';
import camProfile from '../assets/camProfile.png';

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
<Link to='/peyton'>
        <img 
            src={peytonProfile} 
            alt='peyton baseball profile'
            className="reviews"
        />
</Link>

<Link to='/bryce'>
        <img 
            src={bryceProfile} 
            alt='Bryce athlete profile'
            className="athleteProfiles"
        />
</Link>
<Link to='/brennon'>
        <img 
            src={brennonProfile} 
            alt='Brennon baseball profile'
            className="athleteProfiles"
        />
</Link>
<Link to='/cam'>
        <img 
            src={camProfile} 
            alt='cam football profile'
            className="athleteProfiles"
        />
</Link>
    </div>
  </div>
</div>
  )
};

export default Athletes;
