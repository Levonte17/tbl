import React from 'react'
import { NavLink } from 'react-router-dom';

import brennonCover from '../assets/brennonCover.png'
import tbly1 from '../assets/tbly1.png'
import brennon2 from '../assets/brennon2.png'

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
    <NavLink to='https://www.youtube.com/watch?v=ABMkmr5fTBg'>
    <img 
            src={brennon2} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=_BZlnBpHjFw'>
    <img 
            src={tbly1} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    
    </div>
  )
}

export default Brennon;
