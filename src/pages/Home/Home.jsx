import styles from './Home.module.css';

// Internal Assets
import logo from '../../images/jbLogo.png';
import Bubbles from '../../components/Bubbles/Bubbles';

// Internal Components
import BracketIcon from '../../components/BracketIcons/BracketIcon';

// External Libraries
import { 
    FaLinkedin, FaGithub
} from "react-icons/fa";

function Home() {
  return (
    <div className={styles.home_container}>
        <div className={styles.home_flex_wrapper}>
            <Bubbles />

            {/*TOP SCREEN CONTENT */}

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

            {/*MIDDLE SCREEN/LOGO CONTENT */}
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

  
            {/*BOTTOM SCREEN CONTENT */}
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
}

export default Home