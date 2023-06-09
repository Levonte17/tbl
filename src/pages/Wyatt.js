import React from 'react';
import { NavLink } from 'react-router-dom';

import wyattCover from '../assets/wyattCover.png'
import wyatt6 from '../assets/wyatt6.png'
import wyatt7 from '../assets/wyatt7.png'
import wyatt8 from '../assets/wyatt8.png'

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
    <NavLink to='https://www.youtube.com/watch?v=6lXrg2yRgpQ'>
        <img 
            src={wyatt8} 
            alt='wyatt workout video'
            className="videos"
        />
    </NavLink>
    
    <NavLink to='https://www.youtube.com/watch?v=GvRLTvCgN9o'>
        <img 
            src={wyatt7} 
            alt='wyatt workout video'
            className="videos"
        />
    </NavLink>
    
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
