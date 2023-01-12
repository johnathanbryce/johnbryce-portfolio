import React from 'react';
import styles from './Skills.module.css'

// Components
import Header from '../../components/Header/Header';
import PagesContainer from '../../components/PagesContainer/PagesContainer';

function Skills() {
  return (
    <div>
    <Header />
    <PagesContainer>
      <section className={styles.skills_education_container}>

      <div className={styles.education_container}>
          <p> Web Development Fundamentals</p> 
          <p> Intro To Web Development </p>
          <p> BSc. Psychology </p>
      </div>
      <div className={styles.education_container}>
          <p> - BCIT </p> 
          <p> - Lighthouse Labs  </p>
          <p> - UVIC </p>
      </div>


        <div className={styles.skills_grid_container}>
          <div className={styles.skills_flex}>
            <p> JavaScript ES6</p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> HTML / CSS </p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> React</p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> Sass</p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> jQuery </p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> Styled Components </p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> Git / Github </p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> Figma / Adobe XD </p>
            <div className={styles.horizontal_line}> </div>
          </div>



        </div>
      </section>
      
    </PagesContainer>
    </div>
  )
}

export default Skills