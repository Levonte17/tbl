import React from 'react'
import {FiYoutube} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import { FiPhoneCall,
         FiInstagram
} from "react-icons/fi";

function Header(props) {
  return (
    <div className='header'>
      <div className='headers'>
        <a href='/' className='headers'>
          <FaHome/> 
        </a>
      </div>
                <div className='headers'>
                <a href='https://www.youtube.com/channel/UCu0gSo_y1R6tbXWK94ktP8Q' className='headers'>
                <FiYoutube />
                <b>Subscribe</b>
            </a>
                </div>
                <div className='headers' >
                    <a href='https://instagram.com/trainedby_lockdown?igshid=NTc4MTIwNjQ2YQ=='
                        className='headers'>
                        <FiInstagram/> 
                        <b>Follow Us</b>
                    </a> 
                </div>
                <div className='headers'>
    <a href='tel:+19125917848' className='headers'>
             <FiPhoneCall />
             <b>Call Us</b>
    </a>
                </div>    
                </div>
  )
};

export default Header;
