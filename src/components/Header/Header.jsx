import {useState, useRef, useEffect} from 'react';
import styles from './Header.module.css';

// External Assets
import { HashLink as Link } from "react-router-hash-link";

// <span className={styles.nav_number}> 1.</span>&nbsp; -- navbar numbers (for future reference if returning to this style)

function Header() {
    // dropdown navbar menu on smaller screens:
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    // toggle dropdown navbar menu on smaller screens:
    const toggleDropdown = () =>{
      setIsDropdownActive((prev) => !prev); /* relies on prior state so dont change it to just !isDropdownActive */
    }

    // closes dropdown menu on nav item click
    const onNavItemClickCloseDropdown = () =>{
      setIsDropdownActive(false)
    }

    // closes dropdown menu when clicking outside the dropdown menu
    let dropdownRef = useRef();
    useEffect(() => {
     const closeDropdownHandler =  (event) =>{
        if(!dropdownRef.current.contains(event.target)){
            setIsDropdownActive(false)
        }
      }
       document.addEventListener('mousedown', closeDropdownHandler)

      return () => {
        document.removeEventListener('mousedown', closeDropdownHandler)
      }
    }, [])

  return (
    <div className={styles.header_container}>
      <nav className={styles.navbar}>
        <ul className={styles.nav_container}>
          <li><Link to="#about" className={styles.nav_link}> ABOUT </Link></li>
          <li><Link to="#projects" className={styles.nav_link}> PROJECTS </Link></li>
          <li><a className={`${styles.nav_link} ${styles.nav_link_main}`} href="/"> {'< JB >'} </a></li>
          <li><Link to="#skills" className={styles.nav_link}> SKILLS </Link></li>
          <li><Link to="#contact" className={styles.nav_link}> CONTACT </Link></li>
        </ul>
      </nav>

      { /*  hamburger menu dropdown */}
      <nav className={styles.navbar_dropdown} ref={dropdownRef}  >
        
          <div><a className={`${styles.nav_link} ${styles.nav_link_main}`} href="/"> {'< JB >'} </a></div>
          <div className={`${styles.hamburger} ${isDropdownActive ? styles.hamburger_active : '' }`} onClick={toggleDropdown}>
              <div className={styles.bar} ></div>
              <div className={styles.bar} ></div>
              <div className={styles.bar} ></div>
          </div> 
          <ul className={`${styles.menu_nav} ${isDropdownActive ? styles.show_menu : '' }`}>
              <Link to="#about" smooth={true} onClick={onNavItemClickCloseDropdown}><li className={styles.menu_link}> ABOUT </li></Link>
              <Link to="#projects" smooth={true} onClick={onNavItemClickCloseDropdown}> <li className={styles.menu_link}>PROJECTS </li></Link>
              <Link to="#skills" smooth={true} onClick={onNavItemClickCloseDropdown }><li className={styles.menu_link}> SKILLS </li></Link>
              <Link to="#contact" smooth={true} onClick={onNavItemClickCloseDropdown}><li className={styles.menu_link}> CONTACT </li></Link>
          </ul>
      </nav>
      {/* Applies an opacity to the remainder of the content underneath the menu navbar drop down */}
      <div className={isDropdownActive ? styles.shade_content : null }> </div>

    </div>
  )
}

export default Header;

/*   

let activeStyle = {
  color: 'rgba(166,52,70, 0.75)',

};

<li><NavLink to="/about" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}>  About </NavLink></li>
<li><NavLink to="/projects" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}> Projects </NavLink></li>
<li><a className={`${styles.nav_link} ${styles.nav_link_main}`} href="/about"> {'< JB >'} </a></li>
<li><NavLink to="/skills" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}> Skills </NavLink></li>
<li><NavLink to="/contact" className={styles.nav_link} style={({ isActive }) => isActive ? activeStyle : undefined}>  Contact </NavLink></li> 
*/

