import React from 'react'
import { NavLink } from 'react-router-dom';

import bryceCover from '../assets/bryceCover.png'
import kris2 from '../assets/kris2.png'
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
    <NavLink to='https://www.youtube.com/watch?v=TGlNS53tsNU'>
    <img 
            src={tbly1} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
          <NavLink to='https://www.youtube.com/watch?v=KR-JKN9BWLI'>
    <img 
            src={kris2} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    
    </div>
  )
}

export default Bryce;
