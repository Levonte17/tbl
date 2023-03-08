import React from 'react'
import glizzy from '../assets/glizzy.png'

function Glizzy(props) {
  return (
    <div className='sidebyside'>
<div className="side">
<img 
  src={glizzy} 
  alt='glizzy'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> GLIZZY </h1>
    </div>
    </div>
  )
}

export default Glizzy
