import React from "react"
import styles from "./css/about_section.module.css"
import scrollTo from 'gatsby-plugin-smoothscroll';
import portrait from "../images/IMG_0026.jpg";

const AboutSection = () => {

    function OnClickBehavior(section_id){
        scrollTo(`#${section_id}`)
    }

    return (
        <div className="container-fluid p-0">
            <div className={`row no-gutters align-items-center`}>
                <div className={`col-sm-10 offset-sm-1 ${styles.top_text}`} align="center">
                    Hi, I'm Med.
                </div>
                <div className={`col-sm-1 col-md-2`} />
                <div className={`col-sm-10 col-md-3 ${styles.top_margin}`}>
                    <img className={styles.img_style} src={portrait} />
                </div>
                <div className={`col-sm-2`} />
                <div className={`col-sm-10 col-md-3 ${styles.top_margin} ${styles.about_text}`}>
                A lifelong stock trader turned teacher, I strive to learn something new everyday. I love what I do, and pride helping my students in whatever way possible. I currently teach several introductory level computer science courses at two different community colleges - ranging from introductions in Java and C++ to more advanced concepts in object-oriented programming. 
                </div>
                <div className={`col-sm-1 col-md-3`} />
                <div className={`row no-gutters align-items-center`}>
                    <div className={styles.start_button_container} onClick={()=> OnClickBehavior('experience_section')}>
                        <div className={styles.start_button_button}>
                            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L10 10L18 2" stroke="white" strokeWidth="3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection