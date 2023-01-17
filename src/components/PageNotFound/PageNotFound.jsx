import { Link } from "react-router-dom";

import styles from './PageNotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.notfound_container}>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <div className={styles.notfound_links_wrapper}>
                <Link className={styles.notfound_link} to='/'>Home</Link>
                <Link className={styles.notfound_link} to='/about'>About</Link>
                <Link className={styles.notfound_link} to='/contact'>Contact</Link>
            </div>

        </div>
    )
}