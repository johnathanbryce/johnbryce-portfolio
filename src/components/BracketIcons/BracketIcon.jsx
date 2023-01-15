import React from 'react'
import styles from './BracketIcon.module.css';

function BracketIcon() {
  return (
      <div className={styles.bracket_container}> 
          <p className={styles.bracket_arrow}>{'<'} </p>
          <p className={styles.bracket_line}> {'/'} </p>
          <p className={styles.bracket_arrow}> {'>'} </p> 
      </div>
  )
}

export default BracketIcon