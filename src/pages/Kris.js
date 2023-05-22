import React from 'react'
import { NavLink } from 'react-router-dom';

import krisCover from '../assets/krisCover.png'
import kris1 from '../assets/kris1.png'
import kris2 from '../assets/kris2.png'
import kris3 from '../assets/kris3.png'
import kris4 from '../assets/kris4.png'
import kris5 from '../assets/kris5.png'

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
    <NavLink to='https://www.youtube.com/watch?v=wO5p7zmj71o'>
    <img 
            src={kris5} 
            alt='kris workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://www.youtube.com/watch?v=zFoJAaFC4sc'>
    <img 
            src={kris4} 
            alt='kris workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://youtu.be/oWpRrXHmXS8'>
    <img 
            src={kris3} 
            alt='kris workout video'
            className="videos"
          />
    </NavLink>
    <NavLink to='https://youtu.be/Ymr-XLrnZLA'>
        <img 
                src={kris2} 
                alt='kris workout video'
                className="videos"
              />
    </NavLink>
    <NavLink to='https://youtu.be/1HXbjVeAwOQ'>
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
