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
            "My name is Haley Yerxa and I am a fourth-year software engineering student minoring in Mathematics at Florida Gulf Coast University (FGCU). I am also the co-captain of the FGCU women's golf team, which competes at the NCAA Division 1 level. I have spent the first 3 summers of my degree doing internships to get introduced to the world programming, and the focus of my experience has been on fullstack web development in React JS and TS and Angular with .NET Core backend operations. I also have experience working with Machine Learning, both in professional and academic settings. I am someone who loves to take on projects and see them through to completion, and I always strive to put forward my best work possible. What I love so much about programming is how it allows you to take on any problem and come up with a unique solution. There is nothing more gratifying for me than finally breaking through on a project and seeing the results from my hard work.",
        highlights: {
            bullets: [
                "Full Stack web app development",
                "Interactive Front End Operations in React and Angular",
                "Comprehensive Back End Integration using .NET Core",
                "Using Redux for State Management",
                "Building and implementing REST API",
                "Managing databases",
                "Keras, Scikit Learn, and Matlab for Machine Learning"
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
                            <a href="Haley_Yerxa_FGCU_Resume.pdf" download="Haley Yerxa.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}