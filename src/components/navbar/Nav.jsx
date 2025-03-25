import React, { useState } from 'react';
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

function Nav() {
  const [activeNav, setActiveNav] = useState('#'); // ✅ Correct useState initialization

  return (
    <div>
      <nav>
        <a title='Home'
          href="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <IoHomeOutline />
        
        </a> 
        <a title='About'
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <CiUser />
        </a>
        <a title='Experience'
          href="#exp"
          onClick={() => setActiveNav('#exp')}
          className={activeNav === '#exp' ? 'active' : ''}
        >
          <GiSkills />
        </a>
        <a title='Services'
          href="#services"
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <MdOutlineElectricalServices />
        </a>

        <a title='Projects'
          href="#portfolio"
          onClick={() => setActiveNav('#portfolio')}
          className={activeNav === '#portfolio' ? 'active' : ''}
        >
          <GrProjects />
        </a>

        <a title='Contact'
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <MdOutlineContactPhone />
        </a>
        
      </nav>
    </div>
  );
}

export default Nav;
