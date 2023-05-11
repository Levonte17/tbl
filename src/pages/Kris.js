import React from 'react'
import { NavLink } from 'react-router-dom';

import krisCover from '../assets/krisCover.png'
import kris1 from '../assets/kris1.png'
import kris2 from '../assets/kris2.png'

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
    <NavLink to='/kris'>
        <img 
                src={kris2} 
                alt='kris workout video'
                className="videos"
              />
    </NavLink>
    <NavLink to='/kris'>
    <img 
            src={kris1} 
            alt='kris workout video'
            className="videos"
          />
    </NavLink>
    </div>
  )
}

export default Kris;
