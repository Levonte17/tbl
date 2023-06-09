import React from 'react'
import { Link } from "react-router-dom";

function Posters(props) {
  return (
    <div className='posters'>
      <Link to='/athletes'>
    <h2> 
        View Athletes
    </h2>
</Link>
    </div>
  )
}

export default Posters
