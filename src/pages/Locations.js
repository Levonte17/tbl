import React from 'react'
import location from '../assets/location.png'

function Locations(props) {
  return (
    <div className='lo'>
        <h1> Our Locations</h1>
      <p>
       Trained By Lockdown offers the best personal training near
       Appling County, Pierce County, Waycross GA, Jesup GA, Richmond Hill GA, Savannah GA and Brunswick Ga and surrounding counties.
       We also provide the best online workouts/coaching for all sports and non athletes.
       Additionally, our staff will travel to train  anywhere in the United States for groups of athletes or fixed prices. 
       My goal is to help athletes reach their full potential and achieve their goals.
       Workouts are tailored to your group's needs. I will provide the necessary equipment 
       and guidance to ensure that everyone in your group is getting the most
       out of their workout. Our workouts are held outside on grass or turf fields. Finally, You can get faster, quicker, explosive, and better athletic iq from our how to 
       youtube videos With my help, if you are coachable, you can reach your fitness goals and have a great time doing it.
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
