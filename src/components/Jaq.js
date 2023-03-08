import React from 'react'
import jaq from '../assets/jaq.png'

function Jaq(props) {
  return (
    <div className='sidebyside'>
<div className="side">
<img 
  src={jaq} 
  alt='jaq'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> JAQ </h1>
    <a href='https://www.youtube.com/watch?v=1_h7i5szBsk&t=123s'>
      Day 1
    </a>
    <br />
    <a href='https://www.youtube.com/watch?v=MhUwuUx2yRE'>
      Day 2
    </a>
    </div>
    </div>
  )
}

export default Jaq
