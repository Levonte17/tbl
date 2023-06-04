import React from 'react'
import { NavLink } from 'react-router-dom';

import krisCover from '../assets/krisCover.png'
import kris6 from '../assets/kris6.png'


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
    <NavLink to='https://www.youtube.com/watch?v=Py3PDr819Tg'>
    <img 
            src={kris6} 
            alt='kris workout video'
            className="videos"
          />
    </NavLink>
   
    </div>
  )
}

export default Kris;
