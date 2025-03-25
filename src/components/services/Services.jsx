import React from 'react'
import './services.css'
import { FaCheckCircle } from "react-icons/fa";

function Services() {
  return (
    <section id='services'>
      <h3>What I Offer</h3>
      <h1>Services</h1>

      <div className='container services__container'> 
        <article className='service'>
          <div className='service__head'>
            <h2>UI/UX DESIGN</h2>
          </div>
          <ul className='service__list'>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>Interactive & Animated UI Components</p>
            </li>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>Wireframing & Prototyping (Figma, Adobe XD)</p>
            </li>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>User Interface(UI) Design (Modern, responsive layouts)</p>
            </li>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>User Experience(UX) Research (User flows, usability testing)</p>
            </li>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>Branding & Visual Design (Color schemes, typography, icons)</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h2>WEB DEVELOPMENT</h2>
          </div>
          <ul className='service__list'>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>Custom Website Development(React.js, HTML, CSS, JavaScript)</p>
            </li>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>Full-Stack Development (React + Node.js,express.js/Spring Boot)</p>
            </li>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>Backend Development (APIs, Databases - MySQL, MongoDB, PostgreSQL)</p>
            </li>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>E-Commerce Development (Payment integrations, shopping carts)</p>
            </li>
            <li>
              <FaCheckCircle className='service__list-icon' size={30}/>
              <p>Performance Optimization (Faster load times, SEO-friendly)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services 