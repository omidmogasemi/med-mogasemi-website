import React from "react"
import styles from "./css/experience_section.module.css"
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

const ExperienceSection = () => {
    const classes = useStyles();

    return (
        <div className={`container-fluid p-0 text_container ${styles.text_container}`}>
            <div className={`row no-gutters align-items-center ${styles.top_margin}`}>
                <div className={`col-sm-10 offset-sm-1 col-md-8 offset-md-2 ${styles.top_text}`} align="center">
                    Experience
                </div>
                <div className={`col-sm-10 offset-sm-1 col-md-8 offset-md-2`}>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                            <Typography variant="body2">
                                2019 - present
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <AssignmentIndIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                <b>Associative Faculty, Computer Science Department, Saddleback College & Santiago Canyon College</b>
                                </Typography>
                                <Typography>
                                Currently teaching Introduction to C++ Programming, Intro to Java Programming, and Intro to Object-Oriented Programming. Topics include handling input, output, control statements, functions, recursion, simple data structures, pointers, linked lists, and more.
                                </Typography>
                            </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                            <Typography variant="body2">
                                1994 - 2018
                            </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <ShowChartIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                <b>Owner, US Capital West LLC</b>
                                </Typography>
                                <Typography>Successfully owned and operated my own hedge fund specializing in options on S&P 500 futures and equities. Learned the inner details of companies I invested in, giving me a broad knowledge of companies' various business models, balance sheets, as well as a broad knowledge of the various industry sectors and micro/macro economics in general. </Typography>
                            </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                <b>M.S. in Electrical Engineering, USC</b>
                                </Typography>
                                <Typography>Graduated with an emphasis in Optical Engineering and Quantum Electronics</Typography>
                            </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <SchoolIcon />
                            </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                <b>B.S. in Electrical Engineering, George Washington</b>
                                </Typography>
                                <Typography>Graduated with Special Academic Honors for Original Research for Achieving a Solution to Wireless Communication and a Certificate of Achievement in Undergraduate Honors Research Program in the field of spread spectrum in mobile communications, working on signal to noise ratio.</Typography>
                            </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection