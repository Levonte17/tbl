import React from 'react';
import { Link } from 'react-router-dom';
import wyattProfile from '../assets/wyattProfile.png';
import mattProfile from '../assets/mattProfile.png';
import krisProfile from '../assets/krisProfile.png';
import peytonProfile from '../assets/peytonProfile.png';

function Athletes(props) {
  return (
    <div className='app'>
      <div className='athleteProfiles' >
      <h1>
         Athletes
      </h1>
        <div className='athleteProfiles'>
<Link to='Matt'>
        <img 
            src={mattProfile} 
            alt='matt football profile'
            className="athleteProfiles"
        />
</Link>
<Link to='Wyatt'>
        <img 
            src={wyattProfile} 
            alt='wyatt athlete profile'
            className="athleteProfiles"
        />
</Link>
<Link to='Kris'>
        <img 
            src={krisProfile} 
            alt='kris baseball profile'
            className="athleteProfiles"
        />
</Link>
<Link to='Peyton'>
        <img 
            src={peytonProfile} 
            alt='peyton baseball profile'
            className="athleteProfiles"
        />
</Link>
    </div>
  </div>
</div>
  )
};

export default Athletes;
