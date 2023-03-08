import React from 'react'
import lockd from '../assets/lockd.png'

function Ld(props) {
  return (
    <div className='sidebyside'>
<div className="side">
<img 
  src={lockd} 
  alt='ld'
  className="sbs"
/>
    </div>
    <div className="side">
    <h1> COACH LOCKDOWN </h1>
    </div>
    </div>
  )
};

export default Ld;
