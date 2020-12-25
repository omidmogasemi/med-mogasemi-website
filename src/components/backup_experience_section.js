import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from "./css/experience_section.module.css"

const ExperienceSection = () => {
    return (
        <div className={`container-fluid p-0 text_container ${styles.text_container}`}>
            <div className={`row no-gutters align-items-center ${styles.top_margin}`}>
                <div className={`col-sm-10 offset-sm-1 col-md-8 offset-md-2 ${styles.top_text}`} align="center">
                    Experience
                </div>
                <div className={`col-sm-10 offset-sm-1 col-md-8 offset-md-2`}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            date="2019 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Adjunct Faculty in Computer Science</h3>
                            <h4 className="vertical-timeline-element-subtitle">Saddleback & Santiago Canyon Colleges</h4>
                            <p>
                            Responsible for instructing several classes every semester in various computer science topics including object oriented programming, Java, and an introduction to C++. 
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            date="1988 - 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Stock Trader</h3>
                            <h4 className="vertical-timeline-element-subtitle">Aliso Viejo, CA</h4>
                            <p>
                                Managed a multi-million dollar portfolio for over three decades, closely watching for and monitoring trends in equity, option, and future markets. 
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            date="1989-1992"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">MS, Electric Engineering</h3>
                            <h4 className="vertical-timeline-element-subtitle">USC</h4>
                            <p>
                            Received a Masters' degree in electrical engineering. 
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            date="1985-1989"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">BS, Electrical Engineering</h3>
                            <h4 className="vertical-timeline-element-subtitle">George Washington</h4>
                            <p>
                            Received a Bachelors' degree in electrical engineering. 
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection