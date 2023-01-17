import React from 'react';
import styles from './ProjectContainer.module.css';

// External Libraries
import { 
   FaGithub, FaExternalLinkAlt
} from "react-icons/fa";





function ProjectContainer({title, description, languages, img, flexDirection, link, github, featuredType}) {
  return (
  <div>
    <article className={styles.project_container}>
      <div className={flexDirection === 'normal' ? styles.project_overlay_wrapper_normal : styles.project_overlay_wrapper_reverse}>
        <div className={flexDirection === 'normal' ? styles.project_container_text : styles.project_container_text_reverse}>
        <p className={styles.project_overline}> Featured {featuredType} </p>
        <a href={link} target="_blank" rel='noreferrer'><h3 className={styles.project_title}> {title} </h3> </a>
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
  </article>
  </div>

  
  )
}

export default ProjectContainer