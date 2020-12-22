import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styles from "./css/navbar.module.css"

const Navitem = ({ name, section_id }) => {

    const [sectionId, setSectionId] = useState("");

    useEffect(() => 
    {
        setSectionId(section_id);
    })

    function OnClickBehavior(section_id) {
        scrollTo(`#${section_id}`)
    }

    let button_text = name;

    return (
        <div className={`${styles.navitem}`} data-id={section_id}>
            <button className={styles.navbutton} onClick={() => OnClickBehavior(sectionId)}>
                {button_text}
            </button>
            <div className={styles.underline}></div>
        </div >
    );
}

export default Navitem