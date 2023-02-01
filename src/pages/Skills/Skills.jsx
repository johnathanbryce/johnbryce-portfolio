import React from 'react';
import styles from './Skills.module.css'

// Components
import PagesContainer from '../../components/PagesContainer/PagesContainer';
import SectionBreakTitle from '../../components/SectionBreakTitle/SectionBreakTitle';

function Skills() {
  return (
    <div id="skills">
    <SectionBreakTitle header='relevant education & skills.' />
    <PagesContainer>
      <section  className={styles.skills_education_container}>

      <div className={styles.education_grid_container}>
        {/* <h2 className={styles.education_header}> Relevant Education</h2> */}
          <p><a href="https://www.bcit.ca/programs/web-development-fundamentals-statement-of-completion-part-time-0325000000/" target="_blank" rel="noreferrer"> 
          Web Development Fundamentals  </a></p>
          <div className={styles.horizontal_line}> </div>
          <p className={styles.education_insititution_name}> British Columbia Institute of Technology (2021) </p>
          <p><a href="https://www.lighthouselabs.ca/en/intro-web-development-course" target="_blank" rel="noreferrer"> 
          Intro to Web Development </a></p>
          <div className={styles.horizontal_line}> </div>
          <p className={styles.education_insititution_name}> Lighthouse Labs (2020) </p>
          <p><a href="https://www.uvic.ca/socialsciences/psychology/index.php" target="_blank" rel="noreferrer"> 
          BSc. Psychology </a></p>
          <div className={styles.horizontal_line}> </div>
          <p className={styles.education_insititution_name}> University of Victoria (2017)</p>
      </div>


        <div className={styles.skills_grid_container}>
          {/* <h2 className={styles.skills_header}> Skills </h2> */}
          <div className={styles.skills_flex}>
            <p> JavaScript ES6</p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> HTML5 </p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> CSS3 </p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> React</p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> SASS </p>
            <div className={styles.horizontal_line}> </div>
          </div>
          <div className={styles.skills_flex}>
            <p> jQuery </p>
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