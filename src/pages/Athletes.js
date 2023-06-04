import React from 'react';
import { Link } from 'react-router-dom';
import wyattProfile from '../assets/wyattProfile.png';
import mattProfile from '../assets/mattProfile.png';
import krisProfile from '../assets/krisProfile.png';
import peytonProfile from '../assets/peytonProfile.png';
import bryceProfile from '../assets/bryceProfile.png';
import garrisonProfile from '../assets/garrisonProfile.png';
import brennonProfile from '../assets/brennonProfile.png';

function Athletes(props) {
  return (
    <div className='app'>
      <div className='reviews' >
      <h1>
        Our Athletes
      </h1>
        <div className='review'>
<Link to='Matt'>
        <img 
            src={mattProfile} 
            alt='matt football profile'
            className="reviews"
            />
</Link>
<Link to='Wyatt'>
        <img 
            src={wyattProfile} 
            alt='wyatt athlete profile'
            className="reviews"
          />
</Link>
<Link to='Kris'>
        <img 
            src={krisProfile} 
            alt='kris baseball profile'
            className="reviews"
        />
</Link>
<Link to='Peyton'>
        <img 
            src={peytonProfile} 
            alt='peyton baseball profile'
            className="reviews"
        />
</Link>
<Link to='Garrison'>
        <img 
            src={garrisonProfile} 
            alt='garrison football profile'
            className="athleteProfiles"
        />
</Link>
<Link to='Bryce'>
        <img 
            src={bryceProfile} 
            alt='Bryce athlete profile'
            className="athleteProfiles"
        />
</Link>
<Link to='Brennon'>
        <img 
            src={brennonProfile} 
            alt='Brennon baseball profile'
            className="athleteProfiles"
        />
</Link>
    </div>
  </div>
</div>
  )
};

export default Athletes;
