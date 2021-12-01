import React, { useState, useEffect } from "react";
import InsertChartIcon from '@mui/icons-material/InsertChart';
import HistoryIcon from '@mui/icons-material/History';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolIcon from '@mui/icons-material/School';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: <SchoolIcon className="bullet-logo"/> },
        { label: "Current Employment", logoSrc: <WorkOutlineOutlinedIcon className="bullet-logo"/> },
        { label: "Work History", logoSrc: <HistoryIcon className="bullet-logo"/> },
        { label: "Projects", logoSrc: <InsertChartIcon className="bullet-logo"/> },
        { label: "Interests", logoSrc: <SportsGolfIcon className="bullet-logo"/> },
    ];

    /* Array for id's*/
    const idArray = ["Education", "Current Employment", "Work Experience", "Projects", "Interests"]

    const projectsDetails = [
        {
            title: "VHI Webpage Requirements",
            duration: { fromDate: "2021", toDate: "Now" },
            description:
                "A semester-long project focused on the documentation side of Software engineering. Involved creating requirements for a client, writing documentation, and going through the processes of requirements engineering.",
            subHeading:
                "Used JIRA and Confluence to manage backlog items, user stories, prototypes, and other documents.",
        },
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2021", toDate: "Now" },
            description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
            title: "Spotify Pomodoro Technique Web Application ",
            duration: { fromDate: "2021", toDate: "Now" },
            description:
                "Utilize Spotify API (Spotipy) to help students time their music using the pomodoro technique.",
            subHeading:
                "Technologies Used: Python.",
        },
    ];

    const resumeDetails = [
        <div className="resume-item" key="education">
            <div className="resume-screen-container" key="education" id="Education">
                <ResumeHeading
                    heading={"Florida Gulf Coast University"}
                    subHeading={"BACHELOR OF SCIENCE SOFTWARE ENGINEERING"}
                    fromDate={"2018"}
                    toDate={"Present"}
                />
                <ResumeHeading
                    heading={"High School "}
                    subHeading={"West Broward High School"}
                    fromDate={"2014"}
                    toDate={"2018"}
                />
            </div>
        </div>,

        /* CURRENT EMPLOYMENT */
        <div className="resume-item" key="current-employment">
            <div className="resume-screen-container" key="current-employment" id="Current Employment">
                <div className="experience-container">
                    <ResumeHeading
                        heading={"American Traction Systems"}
                        subHeading={"Senior Design Project"}
                        fromDate={"September 2021"}
                        toDate={"Present"}
                    />
                    <div className="experience-description">
                        <span className="resume-description-text">
                            - An Angular Electron.NET application to automate testing procedures for firmware devices at American Traction Systems.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Technologies Used:  Angular, .NET Core, SQLite, Electron.NET.
                        </span>
                    </div>
                </div>
                </div>
            </div>,

        /* WORK EXPERIENCE */
        <div className='resume-item' key="work-experience">
            <div className="resume-screen-container" key="work-experience" id="Work Experience">
                <div className="experience-container">
                    <ResumeHeading
                        heading={"EIB Home Inspections"}
                        subHeading={"Receptionist"}
                        fromDate={"June 2017"}
                        toDate={"June 2018"}
                    />
                    <div className="experience-description">
                        <span className="resume-description-text">
                            - Managed receptionist area, including greeting customers, responding to telephone, and in-person requests for information.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Prepared reports to be sent out to insurance companies and realtors.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Managed inspection schedule.
                        </span>
                        <br />
                    </div>
                </div>
                </div>
            </div>,

        /* PROJECTS */
        <div className="resume-item" key="projects">
            <div className="resume-screen-container" key="projects" id="Projects">
                {projectsDetails.map((projectsDetails, index) => (
                    <ResumeHeading
                        key={index}
                        heading={projectsDetails.title}
                        subHeading={projectsDetails.subHeading}
                        description={projectsDetails.description}
                        fromDate={projectsDetails.duration.fromDate}
                        toDate={projectsDetails.duration.toDate}
                    />
                ))}
            </div>
        </div>,

        /* Interests */
        <div className="resume-item" key="interests">
            <div className="resume-screen-container" key="interests" id="Interests">
                <ResumeHeading
                    heading="Graphic design"
                    description="I've created several logos for different local companies. I am proficient in Adobe Photoshop and Illustrator."
                />
                <ResumeHeading
                    heading="Reading"
                    description="Whether it's in the hallways before class or on my bed besides my cat, I spend as much of my free time reading. I always try to have at least one book with me at all times"
                />
            </div>
        </div>,
    ];

    const handleCarousal = (index) => {
        let tallestDiv = 0;
        idArray.forEach((id, i) => {
            console.log(id);
            if (document.getElementById(id).offsetHeight > tallestDiv) {
                tallestDiv = document.getElementById(id).offsetHeight;
                console.log(id + " is now the tallest div with a height of " + tallestDiv);
            }
                
        })
        let offsetHeight = tallestDiv;
        let root = document.documentElement;
        root.style.setProperty('--resume-height', tallestDiv + "px");
        root.style.setProperty('--two-resume-height', tallestDiv*2 + "px");

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                {bullet.logoSrc}
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div
            className="resume-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
