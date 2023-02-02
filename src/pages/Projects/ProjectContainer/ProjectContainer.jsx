import {useEffect} from 'react';
import styles from './ProjectContainer.module.css';

// External Libraries
import { 
   FaGithub, FaExternalLinkAlt
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';


function ProjectContainer({title, description, languages, img, flexDirection, link, github, featuredType}) {

  const [ref, inView] = useInView({
    /* threshold: 0.95 */ // 95% of the parent should be in view before initiating animations
  });


  const animateProject = useAnimation();


  useEffect(() => {
      if(inView){
        animateProject.start({
          opacity: 1,
          x: 0,
          transform: `scale(1)`,
          transition:{
            type: 'ease-in-out', duration: 0.5,  
          }
        })
      }
      if(!inView){
        animateProject.start({
          opacity: 0.25,
          transform: `scale(0.8)`,
          transition:{
            type: 'ease-in-out', duration: 0.5,  
          },
          x: 0,
         
        })
      }
  }, [inView])



  return (
  <div >
    <div ref={ref}> </div>
    <motion.article className={styles.project_container} animate={animateProject}>
      <div className={flexDirection === 'normal' ? styles.project_overlay_wrapper_normal : styles.project_overlay_wrapper_reverse}>
        <div className={flexDirection === 'normal' ? styles.project_container_text : styles.project_container_text_reverse}>
          <div>
            <p className={flexDirection === 'normal' ? styles.project_overline : styles.project_overline_reverse}> Featured {featuredType} </p>
            <a href={link} target="_blank" rel='noreferrer'><h3 className={styles.project_title}> {title} </h3> </a>
          </div>
            <p className={styles.project_description}> {description}</p>
          
            <p className={flexDirection === 'normal' ? styles.project_languages : styles.project_languages_reverse}> {languages}</p>
            <div className={styles.project_external_links}>
              <a href={github} target="_blank" rel="noreferrer"><FaGithub/></a>
              <a href={link} target="_blank" rel="noreferrer"><FaExternalLinkAlt/></a>
            </div>
          
      </div>

      <a className={flexDirection === 'normal' ? styles.project_container_img : styles.project_container_img_reverse} href={link} target="_blank" rel='noreferrer'>
              <img src={img} alt='' className={styles.project_img}/> 
      </a>
      </div>
  </motion.article>
  </div>

  
  )
}

export default ProjectContainer