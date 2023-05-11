import React from 'react';
import { Link } from 'react-router-dom';
import wyattProfile from '../assets/wyattProfile.png';
import mattProfile from '../assets/mattProfile.png';
import krisProfile from '../assets/krisProfile.png';

function Athletes(props) {
  return (
    <div className='app'>
      <div className='athleteProfiles' >
      <h1>
         Athletes
      </h1>
        <div className='athleteProfiles'>
<Link to='/matt'>
        <img 
            src={mattProfile} 
            alt='matt football profile'
            className="athleteProfiles"
        />
</Link>
<Link to='/wyatt'>
        <img 
            src={wyattProfile} 
            alt='wyatt athlete profile'
            className="athleteProfiles"
        />
</Link>
<Link to='/kris'>
        <img 
            src={krisProfile} 
            alt='kris baseball profile'
            className="athleteProfiles"
        />
</Link>
    </div>
  </div>
</div>
  )
};

export default Athletes;
