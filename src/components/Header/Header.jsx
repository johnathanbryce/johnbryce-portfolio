import React from 'react';
import styles from './Header.module.css';

// Internal Assets
import logo from '../../images/jbLogo.png';


function Header() {
  return (
    <div className={styles.header_container}>

      <nav>
        <ul className={styles.nav_container}>
          <li><a className={styles.nav_link} href="/"> Home </a></li>
          <li><a className={styles.nav_link} href="/projects"> Projects </a></li>
          <li><a className={styles.nav_link} href="/skills"> Skills </a></li>
          <li><a className={styles.nav_link} href="/about"> About </a></li>
          <li><a className={styles.nav_link} href="/contact"> Contact </a></li>
        </ul>
      </nav>

    </div>
  )
}

export default Header