import React from 'react'
import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>KALANA KD</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebookSquare size={30}/></a>
        <a href="https://instagram.com"><FaInstagramSquare size={30}/></a>
        <a href="https://x.com"><FaSquareXTwitter size={30}/></a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; Kalana Dilshan - Portfolio Mini Project. All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer