import React from 'react'
import { NavLink } from 'react-router-dom';

import bryceCover from '../assets/bryceCover.png'
import bryce1 from '../assets/bryce1.png'
import tbly1 from '../assets/tbly1.png'

function Bryce(props) {
  return (
    <div className='profilepage'>
        <img 
            src={bryceCover} 
            alt='Bryce workout video'
            className="cover"
          />
        <h1> Bryce </h1>
        <h2> Click Any Image To Watch Workouts</h2>
          <br/>
          <NavLink to='https://www.youtube.com/watch?v=CUT9x1z6YZw'>
    <img 
            src={bryce1} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=TGlNS53tsNU'>
    <img 
            src={tbly1} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    
    </div>
  )
}

export default Bryce;
