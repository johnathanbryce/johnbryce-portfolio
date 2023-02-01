import styles from './DownArrow.module.css'

// External Assets
import {  FaArrowDown } from "react-icons/fa";

function DownArrow() {

  return (
    <>
      <FaArrowDown  className={styles.down_arrow}/>
    </>
    
  )
}

export default DownArrow