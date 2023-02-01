import styles from './SectionBreakTitle.module.css'

function SectionBreakTitle({header, backgroundColor}) {
  return (
    <div className={styles.section_break_container}> 
        <h2 className={styles.section_text}> {header}</h2>
    </div>
  )
}

export default SectionBreakTitle