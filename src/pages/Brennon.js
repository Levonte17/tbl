import React from 'react'
import { NavLink } from 'react-router-dom';

import brennonCover from '../assets/brennonCover.png'
import kris2 from '../assets/kris2.png'
import bb1 from '../assets/bb1.png'



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
    <NavLink to='https://www.youtube.com/watch?v=_BZlnBpHjFw'>
    <img 
            src={kris2} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=bDgrDTECWFI'>
    <img 
            src={bb1} 
            alt='brennon workout video'
            className="videos"
          />
    </NavLink>
    
    </div>
  )
}

export default Brennon;
