import React from 'react';
import { NavLink } from 'react-router-dom';

import wyattCover from '../assets/wyattCover.png'
import wyatt4 from '../assets/wyatt4.png'
import wyatt5 from '../assets/wyatt5.png'
import wyatt3 from '../assets/wyatt3.png'

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
    <NavLink to='https://www.youtube.com/watch?v=97B5vwolnLw'>
        <img 
            src={wyatt5} 
            alt='wyatt workout video'
            className="videos"
        />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=mzQWkVbCiQo&t=21s'>
    <img 
        src={wyatt4} 
        alt='wyatt workout video'
        className="videos"
    />
    </NavLink>
    <NavLink to='https://youtu.be/Aolhn1JbZ98'>
        <img 
            src={wyatt3} 
            alt='wyatt workout video'
            className="videos"
        />
    </NavLink>

    </div>
  )
}

export default Wyatt
