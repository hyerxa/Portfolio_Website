import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description:
            "My name is Thomas Harrington and I am a fourth-year software engineering student at Florida Gulf Coast University (FGCU). The path that has led me to where I am currently, has not been traditional by any means. I entered my family construction business after graduating high school in 2004. When the construction industry faced an unprecedented recession in 2007, I was fortunate enough to be able apply my mechanical knowledge in the aerospace industry for the Harris Corporation. I was quickly elevated to a crew lead position for the build, test, delivery, and final integration of space-based communication platforms.  Eventually, I was asked to obtain a security clearance so that I could contribute to our government contracts business area. I often worked alongside our software team during the lifecycle of the programs I was selected for and that is where my passion in software development came from. While I deeply loved the work I was doing, I felt like I was meant for more and with the support of my wife, in 2018 I made the decision to earn my software engineering degree. Since then, I have entered the world of full stack web development utilizing Angular/.NET Core and React JS. My other passion in life is the sport of Trapshooting.I have competed in the sport since the age of thirteen and have won numerous state and national titles over my shooting career.More importantly, this sport introduced me to my wife! In 2019, I was elected to serve on the Board of Directors for the Amateur Trapshooting Association, which is the largest sport shooting foundation in the world.",
        highlights: {
            bullets: [
                "Project Management",
                "Professional",
                "Full Stack web app development",
                "Interactive Front End Operations in React and Angular",
                "Comprehensive Back End Integration using .NET Core"
            ],
            heading: "Here are a Few Highlights:",
        },
    };
    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };

    return (
        <div
            className="about-me-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            {SCREEN_CONSTSANTS.description}
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button
                                className="btn primary-btn"
                                onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
                            >
                                {" "}
                                ContactMe{" "}
                            </button>
                            <a href="Thomas_Harrington_FGCU_Resume.pdf" download="Thomas Harrignton.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}