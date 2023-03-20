import React from 'react';
import { Link } from 'react-router-dom';
import mori from '../assets/mori.png';
function Blogs(props) {
  return (
    <div className='blogs'>
        <h1> TBL Sports Blogs</h1>
      <Link to='/jamoriwright' >
        <img src={mori} alt='jamori' className="jamori" /> 
        <h2>Jamori Wright</h2>
      </Link>
    </div>
  )
};

export default Blogs;
