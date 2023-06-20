import React from 'react';
import { Link } from "react-router-dom";
import viewAthletes from '../assets/viewAthletes.png';
import performance from '../assets/performance.png';
import personal from '../assets/personal.png';

function Posters(props) {
  return (
    <div className='price'>
      <h1> OUR SERVICES </h1>
      <h2> Our coach knows how to get better
            and the little details in between. 
            <br/>  
        <b> This Is Why Dedicated Clients Come To Us </b> 
      </h2>

      <h2> Athletic Development </h2>
      <h2> Personal Fitness </h2>
      <h2> Camps & Combine Prep </h2>

    <Link to='/about-us'>
        <img 
            src={performance} 
            alt='mori'
            className="sales"
            />
    </Link>

    <Link to='/athletes'>
        <img 
            src={viewAthletes} 
            alt='mori'
            className="sales"
            />
            </Link>
        <img 
            src={personal} 
            alt='mori'
            className="sales"
          />
    </div>
  )
};

export default Posters;
