import React from 'react'
import './exp.css'
import { GrHtml5 } from "react-icons/gr";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaP, FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";


function Experience() {
  return (
    <section id='exp'>
      <h3>What Skills I have</h3>
      <h1>My Experience</h1>
      <div className="container experience__container">
        <div className='experience__frontend'>
          <h2>Frontend development</h2>
          <div className="experience__content">

            <article className='experience__details'>
              <GrHtml5 className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <FaJs className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
                <div>
                  <h4>ReactJS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

          </div>
        </div>
        <div className='experience__backend'>
        <h2>Backend development</h2>
          <div className="experience__content">
            <article className='experience__details'>
              <FaJava className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BiLogoSpringBoot className='experience__details-icon'/>
                <div>
                  <h4>SpringBoot</h4>
                  <small className='text-light'>Learning</small>
                </div>
            </article>

            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Learning</small>
                </div>
            </article>

            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
                <div>
                  <h4>ExpressJS</h4>
                  <small className='text-light'>Learning</small>
                </div>
            </article>

            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-light'>Learning</small>
                </div>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Learning</small>
                </div>
            </article>

            <article className='experience__details'>
              <FaPhp className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            </div>
          </div>
      </div>
    </section>
  )
}
 
export default Experience