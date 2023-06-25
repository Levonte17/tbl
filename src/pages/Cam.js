import React from 'react';
import { NavLink } from 'react-router-dom';

import camCover from '../assets/camCover.png'
import cam1 from '../assets/cam1.png'
import cam2 from '../assets/cam2.png'
import tbl1 from '../assets/tbl1.png'

function Cam(props) {
  return (
    <div className='profilepage'>
        <img 
            src={camCover} 
            alt='cam athlete page'
            className="cover"
            />
            <h1> CAM </h1>
            <h2> Click Any Image To Watch Workouts</h2>
    <br/>
    <NavLink to='https://www.youtube.com/watch?v=0OquLXqrhHU'>
        <img 
            src={tbl1} 
            alt='cam workout video'
            className="videos"
        />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=skdnYtqHhqg'>
        <img 
            src={cam2} 
            alt='cam workout video'
            className="videos"
        />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=RkRYXMNgf7A'>
        <img 
            src={cam1} 
            alt='cam workout video'
            className="videos"
        />
    </NavLink>
    </div>
  )
};

export default Cam;
