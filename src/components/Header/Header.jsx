import React from 'react';
import styles from './Header.module.css';

// External Assets
import { HashLink as Link } from "react-router-hash-link";

// <span className={styles.nav_number}> 1.</span>&nbsp; -- navbar numbers (for future reference if returning to this style)

function Header() {

  let activeStyle = {
    color: 'rgba(166,52,70, 0.75)',

  };



  return (
    <div className={styles.header_container}>
      <nav>
        <ul className={styles.nav_container}>
          <li><Link to="#about" className={styles.nav_link}> About </Link></li>
          <li><Link to="#projects" className={styles.nav_link}> Projects </Link></li>
          <li><a className={`${styles.nav_link} ${styles.nav_link_main}`} href="/"> {'< JB >'} </a></li>
          <li><Link to="#skills" className={styles.nav_link}> Skills </Link></li>
          <li><Link to="#contact" className={styles.nav_link}> Contact </Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Header;

/*         
<li><NavLink to="/about" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}>  About </NavLink></li>
<li><NavLink to="/projects" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}> Projects </NavLink></li>
<li><a className={`${styles.nav_link} ${styles.nav_link_main}`} href="/about"> {'< JB >'} </a></li>
<li><NavLink to="/skills" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}> Skills </NavLink></li>
<li><NavLink to="/contact" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}>  Contact </NavLink></li> 
*/

