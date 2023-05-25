import React from 'react'
import { NavLink } from 'react-router-dom';

import mattCover from '../assets/mattCover.png'

import matt7 from '../assets/matt7.png'
import matt5 from '../assets/matt5.png'
import matt6 from '../assets/matt6.png'

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
    <NavLink to='https://www.youtube.com/watch?v=6yt4YB1BKQs'>
        <img 
                src={matt7} 
                alt='matt workout video'
                className="videos"
              />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=3enyUdC8nPQ'>
        <img 
                src={matt6} 
                alt='matt workout video'
                className="videos"
              />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=cuqSb7VFBPU'>
        <img 
                src={matt5} 
                alt='matt workout video'
                className="videos"
              />
    </NavLink>
    </div>
  )
}

export default Matt
