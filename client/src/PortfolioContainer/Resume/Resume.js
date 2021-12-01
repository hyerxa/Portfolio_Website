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
            title: "Senior Design Project - Auto Test Fixture ",
            duration: { fromDate: "2021", toDate: "Now" },
            description:
                "An Angular Electron.NET application to automate testing procedures for firmware devices at American Traction Systems",
            subHeading:
                "Technologies Used:  Angular, .NET Core, SQLite, Electron.NET.",
        }
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
                    heading={"Security Clearance"}
                    subHeading={"Top Secret"}
                    fromDate={"2015"}
                    toDate={"2018"}
                />
            </div>
        </div>,

        /* CURRENT EMPLOYMENT */
        <div className="resume-item" key="current-employment">
            <div className="resume-screen-container" key="current-employment" id="Current Employment">
                <div className="experience-container">
                    <ResumeHeading
                        heading={"Florida Trapshooters Association"}
                        subHeading={"Southern Zone Director"}
                        fromDate={"2021"}
                        toDate={"Present"}
                    />
                    <div className="experience-description">
                        <span className="resume-description-text">
                            - Prepare for and attend board meetings to approve major contracts and grants, update bylaws, and
                            review financial standing.
                        </span>
                    </div>
                </div>
                <div className="experience-container">
                    <ResumeHeading
                        heading={"Amateur Trapshooting Association"}
                        subHeading={"Board of Directors"}
                        fromDate={"2021"}
                        toDate={"Present"}
                    />
                    <div className="experience-description">
                        <span className="resume-description-text">
                            - Elected by peers to represent the Southeastern Zone on the Board of Directors.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Serve as an active advocate and ambassador for the organization and fully engage in identifying and
                            securing the financial resources and partnerships necessary for the organization to advance its
                            mission.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Prepare for and attend board meetings to approve major contracts and grants, update bylaws, and
                            review financial standing.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Chairman of the Handicap Committee responsible for classification of competitors based on average
                            score or special category.
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
                        heading={"Harris Corporation"}
                        subHeading={"Engineering Technician"}
                        fromDate={"October 2007"}
                        toDate={"January 2018"}
                    />
                    <div className="experience-description">
                        <span className="resume-description-text">
                            - Designated Team Lead for the build, test, and integration of space-based communications platforms
                            for various commercial and government organizations.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Managed technician teams ranging in size from 7 to 15 members
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Conducted inspections to determine completion of work against schedule, specifications, and
                            standards.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Analyzed build/test documentation (Work Order Flow Tags, Technical Drawings, Procedures, and
                            Parts Lists) to ensure they were unambiguous and complete.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Coordinated with Quality Engineering to ensure inspections were performed as required by the build
                            documentation.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Interfaced with customer representatives throughout the program lifecycle to ensure their needs were
                            being addressed
                        </span>
                        <br />
                    </div>
                </div>
                <div className="experience-container">
                    <ResumeHeading
                        heading={"Blackberry"}
                        subHeading={"Software Development Student"}
                        fromDate={"May 2019"}
                        toDate={"August 2019"}
                    />
                    <div className="experience-description">
                        <span className="resume-description-text">
                            - Created Machine Learning program attached to Django web service and AWS S3 buckets to process
                            data and predict values.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Maintained multiple servers to ensure proper communication of data being received from devices
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Developed valuable projects in Elastic Stack and Kibana to interpret and visualise data

                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Worked with Spring MVC Web Service and created and modified Docker images and containers.
                        </span>
                        <br />
                        <span className="resume-description-text">
                            - Debugged and established new code in Python, Java, and Kotlin, on Ubuntu
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
                    heading="Golf"
                    description="I am an NCAA Division 1 Golfer, with several acolades including 2020 ASUN All-Academic Team, Champion of the 2021 Pat Bradley Invite, and co-captain of my team."
                />
                <ResumeHeading
                    heading="Music"
                    description="I play 8 different instruments, with my primary instrument being piano. The others include flute, clarinet, tenor saxophone, oboe, violin, percussion, and piccolo."
                />
                <ResumeHeading
                    heading="Traveling"
                    description="I thrive in exploring the world and all the different cultures, food, and history traveling has to offer."
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
