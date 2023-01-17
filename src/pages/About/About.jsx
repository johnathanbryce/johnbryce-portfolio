import React from 'react';
import styles from './About.module.css';

// Internal Assets
import jbBioPic from '../../images/jbBioPic.jpeg';
import DownArrow from '../../components/DownArrow/DownArrow';

// External Libraries
import { 
  FaLinkedin, FaGithub, 
} from "react-icons/fa";

// Components
import Header from '../../components/Header/Header';
import PagesContainer from '../../components/PagesContainer/PagesContainer';


function About() {
  return (
    <div>
      
    <Header />
    <div className={styles.fullscreen_intro_container}>
      <svg className={styles.intro_text} width="148" height="44" viewBox="0 0 148 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.280235 6.22C0.280235 4.38 0.920235 2.96 2.20023 1.96C3.48023 0.959998 5.32023 0.459997 7.72024 0.459997V16.06C7.20023 16.62 6.72023 17.26 6.28023 17.98L6.64023 18.22C9.40023 14.38 12.9202 12.46 17.2002 12.46C19.2402 12.46 21.0402 12.92 22.6002 13.84C24.1602 14.76 25.3602 16.02 26.2002 17.62C27.0802 19.22 27.5202 21.02 27.5202 23.02V38.98C27.5202 40.58 26.9002 41.74 25.6602 42.46C24.4202 43.18 22.5402 43.54 20.0202 43.54V24.1C20.0202 22.58 19.5602 21.34 18.6402 20.38C17.7602 19.42 16.4602 18.94 14.7402 18.94C12.7002 18.94 11.0202 19.58 9.70023 20.86C8.38024 22.1 7.72024 23.66 7.72024 25.54V38.98C7.72024 40.58 7.10024 41.74 5.86023 42.46C4.62023 43.18 2.76023 43.54 0.280235 43.54V6.22ZM47.0516 43.54C44.5716 43.54 42.3116 43.06 40.2716 42.1C38.2316 41.1 36.6116 39.76 35.4116 38.08C34.2116 36.36 33.6116 34.44 33.6116 32.32V24.34C33.6116 22.1 34.2316 20.08 35.4716 18.28C36.7116 16.48 38.3516 15.06 40.3916 14.02C42.4716 12.98 44.7116 12.46 47.1116 12.46C49.4716 12.46 51.6316 12.96 53.5916 13.96C55.5916 14.92 57.1716 16.28 58.3316 18.04C59.4916 19.76 60.0716 21.74 60.0716 23.98V27.34C60.0716 28.22 59.7316 28.96 59.0516 29.56C58.4116 30.16 57.5916 30.46 56.5916 30.46H40.8716V31.78C40.8716 33.5 41.3916 34.9 42.4316 35.98C43.4716 37.06 45.0316 37.6 47.1116 37.6C49.1116 37.6 50.5916 37.16 51.5516 36.28C52.5516 35.4 53.0516 34.26 53.0516 32.86C53.7716 32.78 54.2716 32.74 54.5516 32.74C56.0316 32.74 57.1916 33.08 58.0316 33.76C58.8716 34.4 59.2916 35.32 59.2916 36.52C59.2916 37.68 58.7516 38.8 57.6716 39.88C56.5916 40.96 55.1116 41.84 53.2316 42.52C51.3516 43.2 49.2916 43.54 47.0516 43.54ZM53.2916 25.12V23.98C53.2916 22.3 52.7116 20.94 51.5516 19.9C50.3916 18.86 48.8916 18.34 47.0516 18.34C45.2116 18.34 43.7116 18.86 42.5516 19.9C41.4316 20.9 40.8716 22.26 40.8716 23.98V25.12H53.2916ZM75.6866 43.54C72.3666 43.54 69.8466 42.6 68.1266 40.72C66.4466 38.8 65.6066 36.38 65.6066 33.46V5.02C65.6066 3.38 66.2066 2.22 67.4066 1.54C68.6466 0.819997 70.5466 0.459997 73.1066 0.459997V33.16C73.1066 34.52 73.4066 35.52 74.0066 36.16C74.6066 36.76 75.5666 37.06 76.8866 37.06C78.3666 37.06 79.8466 36.68 81.3266 35.92C81.7266 36.28 82.0266 36.74 82.2266 37.3C82.4666 37.82 82.5866 38.36 82.5866 38.92C82.5866 40.12 81.9866 41.2 80.7866 42.16C79.5866 43.08 77.8866 43.54 75.6866 43.54ZM96.0773 43.54C92.7573 43.54 90.2373 42.6 88.5173 40.72C86.8373 38.8 85.9973 36.38 85.9973 33.46V5.02C85.9973 3.38 86.5973 2.22 87.7973 1.54C89.0373 0.819997 90.9373 0.459997 93.4973 0.459997V33.16C93.4973 34.52 93.7973 35.52 94.3973 36.16C94.9973 36.76 95.9573 37.06 97.2773 37.06C98.7573 37.06 100.237 36.68 101.717 35.92C102.117 36.28 102.417 36.74 102.617 37.3C102.857 37.82 102.977 38.36 102.977 38.92C102.977 40.12 102.377 41.2 101.177 42.16C99.9773 43.08 98.2773 43.54 96.0773 43.54ZM119.168 43.54C116.568 43.54 114.208 43.08 112.088 42.16C110.008 41.2 108.368 39.88 107.168 38.2C105.968 36.52 105.368 34.62 105.368 32.5V24.04C105.368 21.88 105.948 19.92 107.108 18.16C108.308 16.4 109.948 15.02 112.028 14.02C114.108 12.98 116.488 12.46 119.168 12.46C121.848 12.46 124.228 12.98 126.308 14.02C128.428 15.02 130.068 16.4 131.228 18.16C132.428 19.92 133.028 21.88 133.028 24.04V32.5C133.028 34.62 132.408 36.52 131.168 38.2C129.968 39.88 128.308 41.2 126.188 42.16C124.108 43.08 121.768 43.54 119.168 43.54ZM119.168 37.12C121.168 37.12 122.728 36.66 123.848 35.74C125.008 34.82 125.588 33.58 125.588 32.02V24.4C125.588 22.76 125.008 21.44 123.848 20.44C122.728 19.4 121.168 18.88 119.168 18.88C117.208 18.88 115.648 19.4 114.488 20.44C113.328 21.44 112.748 22.76 112.748 24.4V32.02C112.748 33.58 113.328 34.82 114.488 35.74C115.648 36.66 117.208 37.12 119.168 37.12ZM142.274 43.54C140.954 43.54 139.834 43.12 138.914 42.28C138.034 41.4 137.594 40.3 137.594 38.98C137.594 37.66 138.034 36.56 138.914 35.68C139.834 34.76 140.954 34.3 142.274 34.3C143.554 34.3 144.654 34.76 145.574 35.68C146.534 36.56 147.014 37.66 147.014 38.98C147.014 40.26 146.534 41.34 145.574 42.22C144.654 43.1 143.554 43.54 142.274 43.54Z" fill="white"/>
      </svg>
    </div>

    <DownArrow />

    <PagesContainer>
    <h2 className={styles.highlight_name}> Johnathan Bryce</h2>
      <section className={styles.about_container}>

          {/* right side content on web / column on mobile */}
          <div className={styles.bio_pic_container}>
            <img className={styles.bio_pic} src={jbBioPic} alt='John Bryce holding a cup of coffee at the beach'/>

          </div>

          <div className={styles.line_content_break_vertical}> </div>
 
          {/* left side content on web / column on mobile */}
          
          <div className={styles.about_content_container}>
            <div className={styles.text_container}>
              <p> I am a passionate Front-End Web Developer based in Vancouver BC.</p>
              <p> I am excited about building fluid, creative, and interactive websites and applications. My focus is on continually expanding on my coding skillsets and experience.</p>
              <p> Welcome to my portfolio page!</p>
            </div>

            <div className={styles.line_content_break_horizontal}> </div>

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
                <a href="https://www.linkedin.com/in/johnathanbryce/" target="_blank" rel="noreferrer"><FaLinkedin className={styles.icon}/></a>
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


/* OLD LAYOUT



          <div className={styles.bio_pic_container}>
            <img className={styles.bio_pic} src={jbBioPic} alt='John Bryce holding a cup of coffee at the beach'/>
          </div>


        <div className={styles.line_content_break_vertical}> </div>

          <div className={styles.about_content_container}>
            <div className={styles.text_container}>
              <h2> hello. </h2>
              <p> My name is<span className={styles.highlight_name}> Johnathan Bryce. </span></p>
              <p> I am a  Front-End Web Developer based in Vancouver, BC.</p> 
              <p> I am excited about building fluid, creative, and interactive websites and applications and continually expanding on my coding skillsets. Welcome to my portfolio page!</p>
            </div>
            
 
        <div className={styles.line_content_break_horizontal}> </div>

            
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



*/