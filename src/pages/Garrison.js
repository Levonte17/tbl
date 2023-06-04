import React from 'react'
import { NavLink } from 'react-router-dom';

import garrisonCover from '../assets/garrisonCover.png'
import garrison1 from '../assets/garrison1.png'



function Garrison(props) {
  return (
    <div className='profilepage'>
        <img 
            src={garrisonCover} 
            alt='Garrison workout video'
            className="cover"
          />
        <h1> Garrison </h1>
        <h2> Click Any Image To Watch Workouts</h2>
          <br/>
    <NavLink to='https://www.youtube.com/watch?v=F-9m0Nh5FzE'>
    <img 
            src={garrison1} 
            alt='Garrison workout video'
            className="videos"
          />
    </NavLink>
    
    </div>
  )
}

export default Garrison;
