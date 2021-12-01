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
            "Hello! My name is Alexandra Salas and I am in my final year pursuing my bachelors in software engineering with a minor in mathematics at Florida Gulf Coast University.I began programming in high school when my world history teacher decided to spend an early release day introducing the basics of programming. From then on, I found my passion. I am a first generation college student so I had to learn to navigate being the first in college and in software. Because of this, I am a fast learner, easily adaptable, and I've never been one to back down from a challenge.",
        highlights: {
            bullets: [
                "Proficient: Java, SQL, Python",
                "Knowledgeable: C++, JavaScript, HTML / CSS, JIRA, Confluence, Angular",
                "Familiar: NLP(Natural Language Processing), Affinity Analysis, Requirements engineering"
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
                            <a href="Alexandra_Salas_FGCU_Resume.pdf" download="Alexandra_Salas.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}