import React from 'react'
import styles from './PagesContainer.module.css'

function PagesContainer(props) {
  return (
    <div className={styles.pages_container}>
        {props.children}
    </div>
  )
}

export default PagesContainer