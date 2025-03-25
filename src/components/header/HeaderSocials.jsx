import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function HeaderSocials() { 
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kalana-weerasinghe-607b322b6/" target='_blank'><FaLinkedin size={40}/></a>
        <a href="https://github.com/KalanaKD" target='_blank'><FaGithubSquare size={40}/></a>
        <a href="https://web.facebook.com/dila.kd.3/" target='_blank'><FaFacebook size={40}/></a> 
    </div>
  )
}

export default HeaderSocials