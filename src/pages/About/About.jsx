import React from 'react';
import styles from './About.module.css';

// Internal Assets
import jbBioPic from '../../images/jbBioPic.jpeg';

// External Libraries
import { 
  FaLinkedin, FaGithub
} from "react-icons/fa";

// Components
import Header from '../../components/Header/Header';
import PagesContainer from '../../components/PagesContainer/PagesContainer';


function About() {
  return (
    <div>
      
    <Header />
    <PagesContainer>
      <section className={styles.about_container}>

          {/* left side content on web / column on mobile */}
          <div className={styles.bio_pic_container}>
            <img className={styles.bio_pic} src={jbBioPic} alt='John Bryce holding a cup of coffee at the beach'/>
          </div>

        {/* content separating line */}
        <div className={styles.line_content_break_vertical}> </div>
        {/* content separating line */}

          {/* right side content on web / column on mobile */}
          <div className={styles.about_content_container}>
            <div className={styles.text_container}>
              <p><span className={styles.highlight}>Hello, </span> my name is<span className={styles.highlight_name}> Johnathan Bryce. </span></p>
              <p> I am a <span className={styles.highlight}> Front-End Web Developer </span> based in Vancouver, BC.</p> 
              <p> I am excited about building fluid, creative, and interactive websites and applications and continually expanding on my coding skillsets. Welcome to my portfolio page!</p>
            </div>
            
        {/* content separating line */}
        <div className={styles.line_content_break_horizontal}> </div>
        {/* content separating line */}
            
            <div className={styles.links_container}>
              <div className={styles.resume_btn_container}>
                <button className={styles.resume_btn}>
                  <a
                    href="https://docs.google.com/document/d/1BvGc7f8dbyUsqAugpslSbU677PLChgDRwdLFniFwkJc/export?format=pdf"
                    download
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </button>
              </div>
              <div className={styles.icons_container}>
                <a href="https://github.com/johnathanbryce" target="_blank" rel="noreferrer"><FaLinkedin className={styles.icon}/></a>
                <a href="https://github.com/johnathanbryce" target="_blank" rel="noreferrer"><FaGithub className={styles.icon}/></a>
              </div>
            </div>

          </div>

      </section>

      
    </PagesContainer>
    </div>
  )
}

export default About