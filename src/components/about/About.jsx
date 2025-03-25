import React from 'react'
import './about.css'
import { TiArrowBackOutline } from 'react-icons/ti'
import ME from '../../assets/ME-r.png'
import { FaUserGraduate } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

function About() {
  return (
    <section id='about'>
      <h3>Get To Know</h3>
      <h1>About Me</h1>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about me image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <h5>Experience</h5>
              <small> 3rd Year Undergraduate </small>
              <FaUserGraduate className='about__icon' size={30}/>
            </article>

            <article className='about__card'>
              <h5>Clients</h5>
              <small> Searching.. </small>
              <FaUsers className='about__icon' size={40}/>
            </article>

            <article className='about__card'>
              <h5>Projects</h5>
              <small> 5 projects </small>
              <GrProjects className='about__icon' size={30}/>
            </article>
          </div>
            <p className='about__para'>
            Hi, I’m Kalana Dilshan, a 3rd-year <b>Computer Engineering undergraduate</b> at the <b>University of Jaffna,
            Faculty of Engineering </b>. I’m passionate about software development and am working toward becoming
            a skilled full-stack developer.My technical expertise includes Java, HTML, CSS, JavaScript, React JS, Node.js, and Flutter.
            I’ve built various projects, from an e-commerce mini website with Javascript , Student Attendance Management System using HTML, CSS, JS and PHP, 
            Portfolio mini project with ReactJS, and currenly working on Automated Examination System project using ReactJS and JavaSpringBoot.
            I enjoy solving problems, building interactive web applications, and constantly learning new technologies 
            to stay ahead in the ever-evolving tech world. Feel free to explore my work, and let’s connect if you’re 
            interested !
            </p>

            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About