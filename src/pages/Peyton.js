import React from 'react'
import { NavLink } from 'react-router-dom';

import peytonCover from '../assets/peytonCover.png'
import peyton2 from '../assets/peyton2.png'
import peyton1 from '../assets/peyton1.png'


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
    <NavLink to='https://www.youtube.com/watch?v=WFUh-w-Aa7A'>
    <img 
            src={peyton2} 
            alt='peyton workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=g0Big_CvNp8'>
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
