import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/examination.jpg'
import IMG2 from '../../assets/attendance.jpg'
import IMG3 from '../../assets/amazon.jpg'


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'> 
            <img src={IMG1} alt="port1 " />
          </div>
          <h3>Automated Examination System</h3>
          <div className='portfolio__btns'>
            <a href="https://github.com" className='btn-1' target='https://github.com/Dinith132/Automated-Examination-System'>Github</a>
            
          </div> 
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'> 
            <img src={IMG2} alt="port1 " />
          </div>
          <h3>Student Attendance Management System</h3>
          <div className='portfolio__btns'>
            <a href="https://github.com" className='btn-1' target='https://github.com/KalanaKD/SAMS'>Github</a>
            
          </div> 
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'> 
            <img src={IMG3} alt="port1 " />
          </div>
          <h3>E-Commerce-Web-JS</h3>
          <div className='portfolio__btns'>
            <a href="https://github.com" className='btn-1' target='https://github.com/KalanaKD/E-Commerce-Web-JS'>Github</a>
            
          </div> 
        </article>

      
      </div> 
    </section>
  )
}

export default Portfolio 