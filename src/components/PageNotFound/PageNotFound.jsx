import styles from './PageNotFound.module.css';

// External Libraries
import { 
    FaHome
 } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className={styles.notfound_container}>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here, let's bring you home:</p>
            <div className={styles.notfound_links_wrapper}>
                <Link className={styles.notfound_link} to='/'><FaHome/></Link>
            </div>

        </div>
    )
}