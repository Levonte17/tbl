import React from 'react'
import jamori from '../assets/jamori.png'

function Jamori(props) {
  return (
    <div className='sidebyside'>
<div className="side">
<img 
  src={jamori} 
  alt='jamori'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> JAMORI </h1>
    <a href='https://www.youtube.com/watch?v=MhUwuUx2yRE'>
      Day 1
    </a>
    <br />
    <a href='https://www.youtube.com/watch?v=nbyVvDU5U9w&t=157s'>
      Day 2
    </a>
    </div>
    </div>  
    )
}

export default Jamori;
