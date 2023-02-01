import styles from './UpArrow.module.css'

// External Assets
import {  FaArrowUp } from "react-icons/fa";

function UpArrow() {

  return (
    <>
      <FaArrowUp  className={styles.up_arrow}/>
    </>
    
  )
}

export default UpArrow