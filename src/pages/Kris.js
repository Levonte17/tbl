import React from 'react'
import { NavLink } from 'react-router-dom';

import krisCover from '../assets/krisCover.png'
import tbly1 from '../assets/tbly1.png'
import tbly from '../assets/tbly.png'

function Kris(props) {
  return (
    <div className='profilepage'>
        <img 
            src={krisCover} 
            alt='kris workout video'
            className="cover"
          />
        <h1> KRIS </h1>
        <h2> Click Any Image To Watch Workouts</h2>
          <br/>
    <NavLink to='https://www.youtube.com/watch?v=MqM_u8UGK3E'>
    <img 
            src={tbly1} 
            alt='kris workout video'
            className="videos"
          />
    </NavLink>
   
    <NavLink to='https://www.youtube.com/watch?v=CnTedyBHbjo'>
    <img 
            src={tbly} 
            alt='kris workout video'
            className="videos"
          />
    </NavLink>

    </div>
  )
}

export default Kris;
