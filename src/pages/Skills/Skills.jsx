import {useEffect} from 'react';
import styles from './Skills.module.css'

// Components
import PagesContainer from '../../components/PagesContainer/PagesContainer';
import SectionBreakTitle from '../../components/SectionBreakTitle/SectionBreakTitle';

// External Libraries
import { SiJavascript, SiCss3, SiJquery } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaFigma, FaGithub } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0 // 
  });

  const animateSectionFadeIn = useAnimation();

  useEffect(() => {
      if(inView){
        animateSectionFadeIn.start({
          opacity: 1,
          transition:{
            type: 'ease-in-out', duration: 0.85
            } 
        })
      }
      if(!inView){
        animateSectionFadeIn.start({
          opacity: 0,
          transition:{
          type: 'ease-in-out', duration: 0.85
          }      
        })
      }
  }, [inView])
  
  return (
    <div id="skills">
    <SectionBreakTitle header='skills & education.' />
    <PagesContainer>
      <motion.section ref={ref} animate={animateSectionFadeIn} className={styles.skills_education_container}>
        <div>
          <div className={styles.skills_container}>
            <h3> Skills </h3>
              <div className={styles.skills_flex}>
                <div className={styles.horizontal_line}> </div>
                <p> Proficient in HTML, CSS, SASS, JavaScript, jQuery and React </p>
              </div> 
                
              <div className={styles.skills_flex}>
                <div className={styles.horizontal_line}> </div>
                <p> Design experience using Figma and AdobeXD </p>
              </div>

              <div className={styles.skills_flex}>
                <div className={styles.horizontal_line}> </div>
                <p> Knowledge and usage of version control using Git and GitHub </p>
              </div>

              <div className={styles.skills_flex}>
                <div className={styles.horizontal_line}> </div>
                <p> Strong problem-solving and debugging skills </p>
              </div>

              <div className={styles.skills_flex}>
                <div className={styles.horizontal_line}> </div>
                <p> Excellent written and verbal communication skills </p>
              </div>
          </div>

          <div className={styles.education_container}>
            <h3> Education </h3>
              <div className={styles.education_flex}>
                <div className={styles.horizontal_line}> </div>
                <p><a href="https://www.bcit.ca/programs/web-development-fundamentals-statement-of-completion-part-time-0325000000/" target="_blank" rel="noreferrer"> 
                Web Development Fundamentals, British Columbia Institute of Technology (2021)  </a></p>
              </div> 
                
              <div className={styles.education_flex}>
                <div className={styles.horizontal_line}> </div>
                <p><a href="https://www.lighthouselabs.ca/en/intro-web-development-course" target="_blank" rel="noreferrer"> 
                Intro to Web Development, Lighthouse Labs (2020) </a></p>
              </div>

              <div className={styles.education_flex}>
                <div className={styles.horizontal_line}> </div>
                <p><a href="https://www.uvic.ca/socialsciences/psychology/index.php" target="_blank" rel="noreferrer"> 
                BSc. Psychology, University of Victoria (2017) </a></p>
              </div>
          </div>
        </div>

        <div className={styles.icons_container}>
         {/*  <div className={styles.icons_absolute_wrapper}> */}
            <SiJavascript className={styles.icon_1} />
            <AiFillHtml5  className={styles.icon_2}/>
            <SiCss3 className={styles.icon_3}/>
            <SiJquery className={styles.icon_4}/>
            <FaReact className={styles.icon_5}/>
            <FaFigma className={styles.icon_6}/>
            <FaGithub className={styles.icon_7}/>
          {/* </div> */}
        </div>
      </motion.section>
      
    </PagesContainer>
    </div>
  )
}

export default Skills


/*         <div className={styles.skills_container}>
          <h3> Education </h3>
          <div className={styles.education_flex} >
              <p><a href="https://www.bcit.ca/programs/web-development-fundamentals-statement-of-completion-part-time-0325000000/" target="_blank" rel="noreferrer"> 
              Web Development Fundamentals  </a></p>
              <div className={styles.horizontal_line_education}> </div>
              <p className={styles.education_insititution_name}> British Columbia Institute of Technology (2021) </p>
            </div>
            <div className={styles.education_flex}>
              <p><a href="https://www.lighthouselabs.ca/en/intro-web-development-course" target="_blank" rel="noreferrer"> 
              Intro to Web Development </a></p>
              <div className={styles.horizontal_line_education}> </div>
              <p className={styles.education_insititution_name}> Lighthouse Labs (2020) </p>
            </div>
            <div className={styles.education_flex}>
              <p><a href="https://www.uvic.ca/socialsciences/psychology/index.php" target="_blank" rel="noreferrer"> 
              BSc. Psychology </a></p>
              <div className={styles.horizontal_line_education}> </div>
              <p className={styles.education_insititution_name}> University of Victoria (2017)</p>
            </div>

        </div> */

/*
<div className={styles.education_grid_container}>
          <p><a href="https://www.bcit.ca/programs/web-development-fundamentals-statement-of-completion-part-time-0325000000/" target="_blank" rel="noreferrer"> 
          Web Development Fundamentals  </a></p>
          <div className={styles.horizontal_line_education}> </div>
          <p className={styles.education_insititution_name}> British Columbia Institute of Technology (2021) </p>
          <p><a href="https://www.lighthouselabs.ca/en/intro-web-development-course" target="_blank" rel="noreferrer"> 
          Intro to Web Development </a></p>
          <div className={styles.horizontal_line_education}> </div>
          <p className={styles.education_insititution_name}> Lighthouse Labs (2020) </p>
          <p><a href="https://www.uvic.ca/socialsciences/psychology/index.php" target="_blank" rel="noreferrer"> 
          BSc. Psychology </a></p>
          <div className={styles.horizontal_line_education}> </div>
          <p className={styles.education_insititution_name}> University of Victoria (2017)</p>
      </div>


        <div className={styles.skills_grid_container}>
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
*/