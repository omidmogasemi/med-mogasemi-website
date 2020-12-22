import React from "react"
import styles from "./css/section.module.css"

const Section = ({ children, id }) => {
    return (
        <div>
            <div id={id} className={styles.section}>{children}</div>
        </div>
    )
}

export default Section