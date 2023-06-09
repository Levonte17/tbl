import React from 'react'
import { NavLink } from 'react-router-dom';

import mattCover from '../assets/mattCover.png'

import matt8 from '../assets/matt8.png'
import matt9 from '../assets/matt9.png'

function Matt(props) {
  return (
    <div className='profilepage'>
        <img 
            src={mattCover} 
            alt='matt athlete page'
            className="cover"
          />
        <h1> MATT </h1>
        <h2> Click Any Image To Watch Workouts</h2>
    <NavLink to='https://www.youtube.com/watch?v=LRnneWmFHd8'>
        <img 
                src={matt9} 
                alt='matt workout video'
                className="videos"
              />
    </NavLink>
    
    <NavLink to='https://www.youtube.com/watch?v=O7w-3OumQxc&t=18s'>
        <img 
                src={matt8} 
                alt='matt workout video'
                className="videos"
              />
    </NavLink>
    
    </div>
  )
}

export default Matt
