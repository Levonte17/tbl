import React from 'react';
import { NavLink } from 'react-router-dom';

import wyattCover from '../assets/wyattCover.png'
import wyatt6 from '../assets/wyatt6.png'

function Wyatt(props) {
  return (
    <div className='profilepage'>
        <img 
            src={wyattCover} 
            alt='wyatt athlete page'
            className="cover"
            />
            <h1> WYATT </h1>
            <h2> Click Any Image To Watch Workouts</h2>
    <br/>
    <NavLink to='https://www.youtube.com/watch?v=MKyk1-aqTls'>
        <img 
            src={wyatt6} 
            alt='wyatt workout video'
            className="videos"
        />
    </NavLink>

    </div>
  )
}

export default Wyatt
