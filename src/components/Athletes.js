import React from 'react';
import { Link } from 'react-router-dom';
import bryceProfile from '../assets/bryceProfile.png';
import garrisonProfile from '../assets/garrisonProfile.png';
import brennonProfile from '../assets/brennonProfile.png';

function Athletes(props) {
  return (
    <div className='app'>
      <div className='athleteProfiles' >
      <h1>
         Athletes
      </h1>
        <div className='athleteProfiles'>
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
<Link to='Athletes'>
  <br/>
  <br/>
        <button className='athbtn'>
           All Athletes
        </button>
</Link>

    </div>
  </div>
</div>
  )
};

export default Athletes;
