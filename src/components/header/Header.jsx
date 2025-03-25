import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/ME-b.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
   
    <header>
      <div className="container header__container"> 
        <h2>Hello I'm </h2> 
        <h1>KALANA WEERASINGHE</h1>
        <h2 className="text-light"> Fullstack Developer </h2>
        <CTA/> 
        <HeaderSocials/>
        <div className="me">
          <img src={me} alt="me" />
          <a href="#contact" className='scroll__name'>Scroll Down</a>
        </div>
      </div>
    </header>

  )
}

export default Header