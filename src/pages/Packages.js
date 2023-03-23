import React from 'react';
import st from '../assets/st.png'
import gd from '../assets/gd.png'
import dbt from '../assets/dbt.png'

function Packages(props) {
  return (
      <div className='package'>
          <img 
            src={gd} 
            alt='mori'
            className="pimg"
          />

        <img 
          src={st} 
          alt='mori'
          className="pimg"
        />
        
        <img 
          src={dbt} 
          alt='mori'
          className="pimg"
        />

    </div>
  )
}

export default Packages;
