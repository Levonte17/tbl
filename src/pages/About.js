import React from 'react'
import about from '../assets/about.png'

function About(props) {
  return (
    <div className='us'>
      <h1> Trained By LockDown </h1>
      <p>
      No matter what level you begin working out/training 
      You can expect to enhance your speed, agility,
      quickness to a high level to establish a great athletic foundation
      for your sports career if you are a athlete ages four and up. 
      Our customers are most proud of our fast results. According to our 
      clients, trained by lockdown is the best trainer for football, 
      soccer, baseball, track, and basketball teams.
       <br/>
       Additionally, we offer position specific training for all skill positions
       (defensive backs, wide recievers, running backs and linebackers).
      We develop our athletes mentality and physically to endure long term focus 
      and concistency in their performance.
      <br/>
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
};

export default About;
