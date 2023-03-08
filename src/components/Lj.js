import React from 'react'
import lj from '../assets/lj.png'

function Lj(props) {
  return (
    <div className='sidebyside'>
<div className="side">
<img 
  src={lj} 
  alt='lj'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> LJ </h1>
    <a href='https://www.youtube.com/watch?v=1_h7i5szBsk&t=123s'>
      Day 1
    </a>
    </div>
    </div>
  )
}

export default Lj
