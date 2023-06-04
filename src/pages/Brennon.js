import React from 'react'
import { NavLink } from 'react-router-dom';

import brennonCover from '../assets/brennonCover.png'
import brennon1 from '../assets/brennon1.png'



function Brennon(props) {
  return (
    <div className='profilepage'>
        <img 
            src={brennonCover} 
            alt='brennon workout video'
            className="cover"
          />
        <h1> Brennon </h1>
        <h2> Click Any Image To Watch Workouts</h2>
          <br/>
    <NavLink to='https://www.youtube.com/watch?v=MtYcvyx54ZM&t=4s'>
    <img 
            src={brennon1} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    
    </div>
  )
}

export default Brennon;
