import React, { useEffect } from "react"
import styles from "./css/home_section.module.css"
import Typed from "typed.js"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import scrollTo from 'gatsby-plugin-smoothscroll';
import background from "../images/med.jpg";

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
        <div style={{minHeight: "100vh", backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="container-fluid p-0">
                <div className={`row no-gutters align-items-center ${styles.background}`}>
                    <div className={`col-sm-8 offset-sm-2 col-lg-10 offset-lg-1 ${styles.text_container}`}>
                        <h1 className={styles.typedtext}>Med Mogasemi</h1>
                        <body1 className={styles.abouttext}>Teacher | Trader | Thinker</body1> <br />
                        <img src="https://img.icons8.com/windows/56/000000/email-open.png" className={styles.spacedimages} onClick={() => window.open("mailto:.med@mogasemi.com")}/>
                        <img src="https://img.icons8.com/fluent-systems-regular/56/000000/facebook-new.png" className={styles.spacedimages} onClick={() => window.open("https://www.facebook.com/mogasemi")}/>
                    </div>
                    <div className={`row no-gutters align-items-center`}>
                        <div className={styles.start_button_container} onClick={()=> OnClickBehavior('about_section')}>
                            <div className={styles.start_button_button}>
                                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L10 10L18 2" stroke="white" strokeWidth="3"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection