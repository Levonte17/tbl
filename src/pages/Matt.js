import React from 'react'
import { NavLink } from 'react-router-dom';

import mattCover from '../assets/mattCover.png'
import matt1 from '../assets/matt1.png'
import matt2 from '../assets/matt2.png'
import matt3 from '../assets/matt3.png'

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
    <NavLink to='https://youtu.be/soPquQQOE1Y'>
    <img 
            src={matt3} 
            alt='matt workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://youtu.be/v-UW_4SJp6w'>
        <img 
                src={matt2} 
                alt='matt workout video'
                className="videos"
              />
    </NavLink>
    <NavLink to='https://youtu.be/QqrSWbXn1A8'>
        <img 
                src={matt1} 
                alt='matt workout video'
                className="videos"
              />
    </NavLink>
    </div>
  )
}

export default Matt
