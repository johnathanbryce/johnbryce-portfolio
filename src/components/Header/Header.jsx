import React from 'react';
import styles from './Header.module.css';

// Internal Assets
import logo from '../../images/jbLogo.png';

// External Assets
import { NavLink } from "react-router-dom";


function Header() {

  let activeStyle = {
    color: 'pink',

  };



  return (
    <div className={styles.header_container}>

      <nav>
        <ul className={styles.nav_container}>
          <li><a className={styles.nav_link} href="/"> Home </a></li>
          <li><NavLink to="/projects" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}> Projects </NavLink></li>
          <li><NavLink to="/skills" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}> Skills </NavLink></li>
          <li><NavLink to="/about" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}> About </NavLink></li>
          <li><NavLink to="/contact" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}> Contact </NavLink></li>
        </ul>
      </nav>

    </div>
  )
}

export default Header