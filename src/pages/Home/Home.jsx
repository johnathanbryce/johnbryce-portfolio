import {useEffect} from 'react';

import styles from './Home.module.css';

// Internal Assets

import LogoBubbles from '../../components/LogoBubbles/LogoBubbles';

// External Libraries 
import { useNavigate } from 'react-router-dom';

/* -- OLD LAYOUT
import { 
    FaLinkedin, FaGithub
} from "react-icons/fa";
import { Navigate } from 'react-router-dom';
*/

function Home() {

const navigate = useNavigate()

  /* countdown to send user to /about page */
  useEffect(()=>{
    setTimeout(()=>{
       /* window.location.replace("/about"); */
       navigate('/about');
    }, 2500 ) 
  }, [])


  return (
    <div className={styles.home_container}>
        <div className={styles.home_flex_wrapper}>
            <LogoBubbles />
            <section className={styles.logo_animation_container}>
                {/* LEFT ARROW */ }
                <svg className={styles.left_arrow} width="100" height="125" viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="125" fill="white"/>
                    <line x1="24.5858" y1="61.669" x2="72.669" y2="13.5858" stroke="#A63446" stroke-width="4"/>
                    <line x1="27.4142" y1="61.5858" x2="75.4975" y2="109.669" stroke="#A63446" stroke-width="4"/>
                </svg>

                {/* TEXT */ }
                <svg className={styles.text} width="100" height="125" viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="125" fill="white"/>
                    <path d="M28.5895 92.54C25.5495 92.54 22.8095 91.96 20.3695 90.8C17.9295 89.64 16.0095 88.06 14.6095 86.06C13.2495 84.02 12.5695 81.74 12.5695 79.22C12.5695 77.54 13.2695 76.36 14.6695 75.68C16.1095 75 18.1095 74.66 20.6695 74.66C20.5495 75.38 20.4895 76.3 20.4895 77.42C20.4895 80.02 21.1695 82.02 22.5295 83.42C23.9295 84.82 25.9495 85.52 28.5895 85.52C31.1895 85.52 33.1895 84.78 34.5895 83.3C35.9895 81.78 36.6895 79.62 36.6895 76.82V56.96H30.6295C28.7495 56.96 27.3495 56.4 26.4295 55.28C25.5095 54.12 25.0495 52.36 25.0495 50H40.8295C41.9095 50 42.8295 50.36 43.5895 51.08C44.3495 51.76 44.7295 52.62 44.7295 53.66V76.82C44.7295 79.82 44.0295 82.52 42.6295 84.92C41.2695 87.28 39.3495 89.14 36.8695 90.5C34.4295 91.86 31.6695 92.54 28.5895 92.54ZM55.4194 92C54.3394 92 53.3994 91.64 52.5994 90.92C51.7994 90.2 51.3994 89.34 51.3994 88.34V53.66C51.3994 52.66 51.7794 51.8 52.5394 51.08C53.3394 50.36 54.2994 50 55.4194 50H71.5594C75.3994 50 78.4594 51.08 80.7394 53.24C83.0594 55.36 84.2194 58.22 84.2194 61.82C84.2194 63.54 83.7594 65.18 82.8394 66.74C81.9194 68.26 80.6994 69.44 79.1794 70.28V70.46C81.2594 71.18 82.8994 72.36 84.0994 74C85.3394 75.64 85.9594 77.52 85.9594 79.64C85.9594 82.04 85.3994 84.18 84.2794 86.06C83.1594 87.94 81.5994 89.4 79.5994 90.44C77.5994 91.48 75.3194 92 72.7594 92H55.4194ZM71.4394 67.64C72.7594 67.64 73.8794 67.1 74.7994 66.02C75.7594 64.94 76.2394 63.64 76.2394 62.12C76.2394 60.48 75.7994 59.18 74.9194 58.22C74.0794 57.26 72.9194 56.78 71.4394 56.78H59.1994V67.64H71.4394ZM72.6394 85.22C74.2794 85.22 75.5794 84.74 76.5394 83.78C77.4994 82.78 77.9794 81.42 77.9794 79.7C77.9794 78.02 77.4994 76.72 76.5394 75.8C75.6194 74.84 74.3194 74.36 72.6394 74.36H59.1994V85.22H72.6394Z" fill="#A63446"/>
                </svg>

                {/* RIGHT ARROW */ }
                <svg className={styles.right_arrow} width="100" height="125" viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="125" fill="white"/>
                    <line x1="24.4142" y1="13.5858" x2="72.4975" y2="61.669" stroke="#A63446" stroke-width="4"/>
                    <line x1="26.5858" y1="109.669" x2="74.669" y2="61.5858" stroke="#A63446" stroke-width="4"/>
                </svg>
            </section>
  
        </div>
    </div>
  )
}

export default Home





/******************* OLD LAYOUT JSX *******************/
/* OLD LAYOUT:

    <div className={styles.home_container}>
        <div className={styles.home_flex_wrapper}>
            <Bubbles />

            

            <div className={styles.home_top_container}>
                <div className={styles.top_container_left}> 
                    <a className={styles.home_button_container} href="/projects">
                        Projects 
                    </a>

                    <div className={styles.vertical_line}>
                        <hr />
                    </div>
                    <BracketIcon />
                    <div className={styles.vertical_line}>
                        <hr />
                    </div>
                    <div className={styles.horizontal_line_container_left}>
                        <div className={styles.horizontal_line}> </div>
                    </div>

                </div>
                <div className={styles.top_container_right}> 
                    <a className={styles.home_button_container} href="/skills">
                        Skills 
                    </a>
                    <div className={styles.vertical_line}>
                        <hr />
                    </div>
                    <BracketIcon />
                    <div className={styles.vertical_line}>
                        <hr />
                    </div>

                    <div className={styles.horizontal_line_container_right}>
                        <div className={styles.horizontal_line}> </div>
                    </div>
                </div> 
            </div>

         
            <div className={styles.middle_container}>

                <a href="https://www.linkedin.com/in/johnathanbryce/" target="_blank" rel="noreferrer"><FaLinkedin className={styles.icon}/></a>
                <div className={styles.horizontal_line_middle}></div>
     
                <div className={`${styles.logo_container} ${styles.flip_card}`}> 
                    <div className={styles.flip_card_inner}>
                        <div className={styles.flip_card_front}>
                            <img className={styles.logo}src={logo} alt='John Bryce web development logo'/>
                        </div>
                        <div className={styles.flip_card_back}>
                                <p> johnathanbryce@gmail.com </p>
                                <p> 604-220-7425 </p>
                                <p> linked-in</p>
                                <p> github </p>
                        </div>
                    </div>
                </div>
             

                <div className={styles.horizontal_line_middle}></div>
                <a href="https://github.com/johnathanbryce" target="_blank" rel="noreferrer"><FaGithub className={styles.icon}/></a>
            </div>

  
           
            <div className={styles.home_bottom_container}>
                <div className={styles.bottom_container_left}>
                    <div className={styles.horizontal_line_container_left}>
                        <div className={styles.horizontal_line}> </div>
                    </div> 
                    <div className={styles.vertical_line}>
                        <hr />
                    </div>
                    <BracketIcon />
                    <div className={styles.vertical_line}>
                        <hr />
                    </div>
                    <a className={styles.home_button_container} href="/about">
                        About 
                    </a>
                </div>
                
                <div className={styles.bottom_container_right}>
                    <div className={styles.horizontal_line_container_right}>
                        <div className={styles.horizontal_line}> </div>
                    </div>
                    <div className={styles.vertical_line}>
                        <hr />
                    </div>
                    <BracketIcon />
                    <div className={styles.vertical_line}>
                        <hr />
                    </div>
                    <a className={styles.home_button_container} href="/contact">
                        Contact
                    </a>
                </div>

            </div> 

        </div>

    </div>
  )

*/