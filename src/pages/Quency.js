import React from 'react';
import { NavLink } from 'react-router-dom';

import quencyCover from '../assets/quencyCover.png'
import tbl1 from '../assets/tbl1.png'
import wq from '../assets/wq.png'

function Quency(props) {
  return (
    <div className='profilepage'>
        <img 
            src={quencyCover} 
            alt='QUENCY athlete page'
            className="cover"
        />
            <h1> QUENCY </h1>
            <h2> Click Any Image To Watch Workouts</h2>
    <br/>
    <NavLink to='https://www.youtube.com/watch?v=nOtECVK9KPA'>
        <img 
            src={wq} 
            alt='QUENCY workout video'
            className="videos"
        />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=9WIEYclVpk0'>
        <img 
            src={tbl1} 
            alt='QUENCY workout video'
            className="videos"
        />
    </NavLink>
    

    </div>
  )
}

export default Quency
