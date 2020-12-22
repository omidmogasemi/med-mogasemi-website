import React, { useEffect } from "react"
import styles from "./css/home_section.module.css"
import Typed from "typed.js"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import scrollTo from 'gatsby-plugin-smoothscroll';

const HomeSection = (props) => {
    // let typed

    // useEffect(() => {
    //     // set typed
    //     typed = new Typed("#typed", {
    //         strings: ["// code for social good"],
    //         typeSpeed: 30,
    //         backSpeed: 30,
    //         backDelay: 3500,
    //         startDelay: 1000,
    //         fadeOut: false,
    //         loop: true,
    //         shuffle: false,
    //         cursorChar: "_",
    //     })

    //     // Cleanup event handlers
    //     return () => {
    //         // clean up the event handler when the component unmounts
    //         typed.destroy()
    //     }
    // })

    function OnClickBehavior(section_id){
        scrollTo(`#${section_id}`)
    }

    return (
        <div className="container-fluid p-0">
            <div className={`row no-gutters align-items-center`}>
                <div className={styles.start_button_container} onClick={()=> OnClickBehavior('about_section')}>
                    <div className={styles.start_button_text}>START</div>
                    <div className={styles.start_button_button}>
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L10 10L18 2" stroke="white" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection