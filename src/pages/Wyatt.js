import React from 'react';
import { NavLink } from 'react-router-dom';

import wyattCover from '../assets/wyattCover.png'
import wyatt1 from '../assets/wyatt1.png'
import wyatt2 from '../assets/wyatt2.png'

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
    <NavLink to='https://www.youtube.com/watch?v=tTf27ym3ACg'>
        <img 
            src={wyatt2} 
            alt='wyatt workout video'
            className="videos"
        />
    </NavLink>
    
    <NavLink to='https://www.youtube.com/watch?v=5qvwwbOXRAw'>
        <img 
            src={wyatt1} 
            alt='wyatt workout video'
            className="videos"
        />
    </NavLink>

    </div>
  )
}

export default Wyatt
