import React from 'react'
import location from '../assets/location.png'

function Locations(props) {
  return (
    <div className='lo'>
        <h1> Our Locations</h1>
      <p>
       I offer a unique service of traveling to train athletes in their own environment.
       Prices vary depending on the location and the number of athletes I will be training.  
       My goal is to help athletes reach their full potential and achieve their goals.
       Workouts are tailored to your group's needs. I will provide the necessary equipment 
       and guidance to ensure that everyone in your group is getting the most
       out of their workout. With my help, if you are coachable, you can reach your 
       fitness goals and have a great time doing it.
      </p>

<img 
  src={location} 
  alt='location'
  className="ld"
/>
    </div>
  )
};

export default Locations;
