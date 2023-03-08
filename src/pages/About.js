import React from 'react'
import about from '../assets/about.png'

function About(props) {
  return (
    <div className='us'>
      <h1> Trained By LockDown </h1>
      <p>
      With Trained By LockDown, you can expect to enhance your 
      speed, agility, and defensive back skills. 
      Additionally, we craft mentality and confidence in our athletes.
      We work on a good, great, perfect scale to ensure consistancy 
      and muscle memory in our athletes.
      We travel to different locations to provide personalized 
      training sessions at competitive prices according to group sizes.
      We believe in helping athletes reach their full potential and strive. 
      Coach LockDown years of experience and is dedicated to 
      helping athletes reach their goals.
      </p>


<img 
  src={about} 
  alt='about'
  className="about"
/>
    </div>
  )
}

export default About
