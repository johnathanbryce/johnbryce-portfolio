import styles from './About.module.css';
import { useEffect } from 'react';

// Internal Assets
import jbBioPic from '../../images/jbBioPic.jpeg';

// External Libraries
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';

// Components
import PagesContainer from '../../components/PagesContainer/PagesContainer';

function About() {
  const [ref, inView] = useInView({
    threshold: 0 // 
  });

  const animateHeader = useAnimation();

  useEffect(() => {
      if(inView){
        animateHeader.start({
          opacity: 1,
          transition:{
            type: 'ease-in-out', duration: 0.8
            } 
        })
      }
      if(!inView){
        animateHeader.start({
          opacity: 0,
          transition:{
          type: 'ease-in-out', duration: 0.8
          }      
        })
      }
  }, [inView])
  
  return (
    <PagesContainer >
      <motion.section ref={ref} animate={animateHeader}   className={styles.about_container}>
        <h2  className={styles.highlight_name}> Johnathan Bryce</h2>
        <div className={styles.about_flex_container}>
           <div className={styles.bio_pic_container}>
            <img className={styles.bio_pic} src={jbBioPic} alt='John Bryce holding a cup of coffee at the beach'/>
          </div>

          <div className={styles.line_content_break_vertical}> </div>
 
          <div className={styles.about_content_container}>
            <div className={styles.text_container}>
              <p> I am a Front-End Web Developer based in Vancouver BC.</p>
              <p> With a solid foundation in JavaScript, TypeScript, React, CSS & HTML, I am excited about building fluid, creative, and interactive websites and applications. My passion for this field has me constantly learning and seeking new challenges to improve my skills and stay up-to-date with the latest trends in web development.</p>
              <p> Welcome to my portfolio page!</p>
            </div>

            <div className={styles.line_content_break_horizontal}> </div>

            <div className={styles.links_container}>
              <div className={styles.resume_btn_container}>
                <button className={styles.resume_btn}>
                  <a 
                    href="https://docs.google.com/document/d/1Ak-nnkqrAXLXqr9GcqmnhahiYfiUkv06KU4QE5-bA-w/export?format=pdf"
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
        </div>
      </motion.section>    
    </PagesContainer>
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