import React from 'react'
import { NavLink } from 'react-router-dom';

import peytonCover from '../assets/peytonCover.png'
import peyton4 from '../assets/peyton4.png'
import peyton5 from '../assets/peyton5.png'
import peyton6 from '../assets/peyton6.png'

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
    <NavLink to='https://www.youtube.com/watch?v=0dpxe7-rxLc'>
    <img 
            src={peyton6} 
            alt='peyton workout video'
            className="videos"
          />
    </NavLink>
    
    <NavLink to='https://www.youtube.com/watch?v=YvnWXoIPqz0'>
    <img 
            src={peyton5} 
            alt='peyton workout video'
            className="videos"
          />
    </NavLink>
    
    <NavLink to='https://www.youtube.com/watch?v=UJ-Az6KP3Tk'>
    <img 
            src={peyton4} 
            alt='peyton workout video'
            className="videos"
          />
    </NavLink>
    
    </div>
  )
}

export default Peyton;
