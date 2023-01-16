import { 
     FaArrowDown
  } from "react-icons/fa";

  import styles from './DownArrow.module.css'

function DownArrow() {

    const scrollBottom = () =>{
        window.scrollTo({top: 1000, behavior: 'smooth'});
     };

  return (
    <FaArrowDown onClick={scrollBottom}  className={styles.down_arrow}/>
  )
}

export default DownArrow