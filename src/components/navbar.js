import React, { useState, useEffect } from 'react';
import $ from "jquery";
import styles from "./css/navbar.module.css";
import Navitem from "./navitem";

const NavBar = ({ setFadeAbout, setFadeExperience }) => {

    useEffect(() => {
        // Init anchor scrolling
        let navItems = $(`.${styles.navitem}`)
        let anchors = navItems.map(function (i, elem) {
            let id = $(elem).data('id');

            let $els = {
                navItem: navItems.eq(i),
                page: $(`#${id}`)
            }

            return { id, $els };
        });

        function OnScroll()
        {
            let scrollTop = $(window).scrollTop();

            // Detect scrolled to anchor
            for (let i = anchors.length - 1; i >= 0; i--) {
                let anchor = anchors[i];
                let $els = anchor.$els;

                if ($els.page.length > 0) {
                    let anchorTop = $els.page.offset().top - ($els.page.height() / 2);
                    let anchorTop_full = $els.page.offset().top;

                    if (scrollTop >= anchorTop) {
                        $(`.${styles.navitem}`).find(`div.${styles.underline}`).removeClass(styles.selected);
                        $els.navItem.find(`.${styles.underline}`).addClass(styles.selected);
                        
                        if (i == 1)
                        {
                            setFadeAbout(true);
                        }
                        else if (i == 2)
                        {
                            setFadeExperience(true);
                        }
                    }

                }
            }
        }

        OnScroll();

        $(window).on("scroll", function () {
            OnScroll();
        });

        // hamburger menu stuff for mobile 
        // $(`.${styles.hamburger_menu}`).on("click",function() {
        //         setHamburgerMenuIsOpen(true);
        //         if(!isLoggedIn()){
        //             setLoginModalIsOpen(true);
        //         }
        //         else {
        //             setProfileModalIsOpen(true);
        //         }
        //     }
        // )
        // Cleanup event handlers
        return () => {
            // clean up the event handler when the component unmounts
            // $(`.${styles.hamburger_menu}`).off("click")
        }
    })

    return (
        <div className={styles.navbarcontainer}>
            <div className={styles.navbar}>
                <Navitem name="Home" section_id="home_section"></Navitem>
                <Navitem name="About" section_id="about_section"></Navitem>
                <Navitem name="Experience" section_id="experience_section"></Navitem>
            </div>
        </div>
    );
}

export default NavBar