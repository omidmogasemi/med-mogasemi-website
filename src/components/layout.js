import React, { useState } from "react"
import NavBar from "./navbar" 
import Section from "./section"
import HomeSection from "./home_section"
import AboutSection from "./about_section"
import ExperienceSection from "./experience_section"
import Footer from "./footer"

const Layout = ({ children }) => {
  
    const [fadeAbout, setFadeAbout] = useState(false);
    const [fadeExperience, setFadeExperience] = useState(false);
  
    return (
      <>
            <NavBar setFadeAbout={setFadeAbout} setFadeExperience={setFadeExperience}></NavBar>
            <Section id="home_section">
                <HomeSection></HomeSection>
            </Section>
            <Section id="about_section">
                <AboutSection fadeAbout={fadeAbout}></AboutSection>
            </Section>
            <Section id="experience_section">
                <ExperienceSection fadeExperience={fadeExperience}></ExperienceSection>
            </Section>
          <Footer></Footer>
      </>
    )
  }
  
  export default Layout