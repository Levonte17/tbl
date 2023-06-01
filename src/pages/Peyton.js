import React from 'react'
import { NavLink } from 'react-router-dom';

import peytonCover from '../assets/peytonCover.png'
import peyton1 from '../assets/peyton1.png'
import peyton2 from '../assets/peyton2.png'
import peyton3 from '../assets/peyton3.png'


function Peyton(props) {
  return (
    <div className='profilepage'>
        <img 
            src={peytonCover} 
            alt='peyton workout video'
            className="cover"
          />
        <h1> Peyton </h1>
        <h2> Click Any Image To Watch Workouts</h2>
          <br/>
    <NavLink to='https://www.youtube.com/watch?v=m8OHkkDby8A'>
    <img 
            src={peyton3} 
            alt='peyton workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=FvBc-8cskb4'>
    <img 
            src={peyton2} 
            alt='peyton workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=d7UlqNe6U38'>
    <img 
            src={peyton1} 
            alt='peyton workout video'
            className="videos"
          />
    </NavLink>


    </div>
  )
}

export default Peyton;
