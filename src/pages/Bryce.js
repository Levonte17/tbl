import React from 'react'
import { NavLink } from 'react-router-dom';

import bryceCover from '../assets/bryceCover.png'
import kris2 from '../assets/kris2.png'
import bb1 from '../assets/bb1.png'



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
          <NavLink to='https://www.youtube.com/watch?v=KR-JKN9BWLI'>
    <img 
            src={kris2} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=5pvQyikJNZM'>
    <img 
            src={bb1} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    
    </div>
  )
}

export default Bryce;
